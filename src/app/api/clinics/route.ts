import { NextRequest, NextResponse } from 'next/server';
import { demoClinics } from '@/lib/data/clinics';
import { calculateDistance } from '@/lib/utils';
import { Clinic } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const latStr = searchParams.get('lat');
    const lngStr = searchParams.get('lng');
    const specialty = searchParams.get('specialty') || '';
    const radiusStr = searchParams.get('radius') || '5000'; // 5km default

    const lat = latStr ? parseFloat(latStr) : 28.6139; // default Delhi
    const lng = lngStr ? parseFloat(lngStr) : 77.2090;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    let clinicsResult: Clinic[] = [];

    if (apiKey) {
      try {
        // Fetch from Google Places API
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radiusStr}&type=hospital|doctor|pharmacy&key=${apiKey}`
        );
        const data = await response.json();
        
        if (data.status === 'OK' && data.results) {
          clinicsResult = data.results.map((place: any, index: number) => {
            const placeLat = place.geometry.location.lat;
            const placeLng = place.geometry.location.lng;
            const distance = calculateDistance(lat, lng, placeLat, placeLng);
            const isOpen = place.opening_hours?.open_now ?? true;

            // Map Google place types to our specialties
            const specialtiesList = ['General Medicine'];
            if (place.types.includes('hospital')) specialtiesList.push('Emergency Medicine');
            if (place.types.includes('doctor')) specialtiesList.push('Pediatrics', 'Family Medicine');

            return {
              id: place.place_id || `google-${index}`,
              name: place.name,
              type: place.types.includes('hospital') ? 'hospital' : 'clinic',
              address: place.vicinity || 'Address not available',
              distance,
              rating: place.rating || 4.0,
              reviewCount: place.user_ratings_total || 10,
              isOpen,
              openHours: isOpen ? 'Open Now' : 'Closed',
              phone: '+91-11-XXXXXXXX', // Nearby search doesn't return phone numbers directly
              specialties: specialtiesList,
              location: {
                lat: placeLat,
                lng: placeLng
              },
              isEmergency: place.types.includes('hospital')
            };
          });
        }
      } catch (err) {
        console.error('Failed to fetch from Google Places API, falling back to mock:', err);
      }
    }

    // Fallback or Mock data recalculating distances
    if (clinicsResult.length === 0) {
      clinicsResult = demoClinics.map(clinic => {
        const distance = calculateDistance(lat, lng, clinic.location.lat, clinic.location.lng);
        return {
          ...clinic,
          distance
        };
      });
    }

    // Filter by specialty if provided
    if (specialty && specialty !== 'All') {
      clinicsResult = clinicsResult.filter(clinic => 
        clinic.specialties.some(spec => spec.toLowerCase().includes(specialty.toLowerCase()))
      );
    }

    // Sort by distance ascending
    clinicsResult.sort((a, b) => a.distance - b.distance);

    return NextResponse.json(clinicsResult);
  } catch (error: any) {
    console.error('API Clinics Error:', error);
    return NextResponse.json({ error: 'Failed to fetch clinics' }, { status: 500 });
  }
}
