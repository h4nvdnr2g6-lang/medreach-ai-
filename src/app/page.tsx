'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Activity, ShieldAlert, Heart, MapPin, Phone, Users, CheckCircle, ArrowRight, Mic, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Disclaimer } from '@/components/shared/disclaimer';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const features = [
    {
      icon: <Activity className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'AI Symptom Assessment',
      description: 'Interact with our advanced AI triage engine to evaluate symptoms, duration, and severity in real time.'
    },
    {
      icon: <Mic className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Voice Assistant',
      description: 'Describe your symptoms naturally using voice input and receive spoken medical guidance and directions.'
    },
    {
      icon: <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Smart Triage Engine',
      description: 'Instant classification of urgency: Emergency, Urgent, Routine, or Self-Care with specialist matching.'
    },
    {
      icon: <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Nearby Clinics Map',
      description: 'Locate nearby hospitals, clinics, and pharmacies with live open status, ratings, and navigation paths.'
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Doctor Directory',
      description: 'Browse available specialists, check consultation fees, availability status, and simulate appointment bookings.'
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-red-500" />,
      title: 'Emergency Detection',
      description: 'Automatic identification of life-threatening symptoms with instant routing to local hotlines and hospitals.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-teal-500/10 via-background to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
            AI-Powered Healthcare Guide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight"
          >
            Your Instant AI Health Triage &amp;{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Clinic Recommendation
            </span>{' '}
            Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Describe symptoms via chat or voice, get clinical urgency triage, match with specialized doctors, and locate nearby medical centers instantly.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
          >
            <Link href="/assessment" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 py-6 text-base">
                <Search className="h-5 w-5" />
                Start Triage Chat
              </Button>
            </Link>
            <Link href="/voice" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full font-semibold flex items-center justify-center gap-2 border border-border/50 py-6 text-base">
                <Mic className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                Speak to AI Assist
              </Button>
            </Link>
          </motion.div>

          <div className="mt-12 w-full max-w-4xl px-4">
            <Disclaimer />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Core Features of MedReach AI</h2>
            <p className="mt-4 text-muted-foreground">
              Designed to optimize patient routing, reduce hospital overcrowding, and speed up clinical access.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 w-fit rounded-xl bg-teal-50 dark:bg-teal-950/30 group-hover:scale-110 transition-transform duration-300 mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight font-sans">How MedReach AI Works</h2>
            <p className="mt-4 text-muted-foreground">
              Follow these simple steps to analyze symptoms and connect with suitable providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-teal-100 dark:bg-teal-950 hidden md:block -z-10" />
            
            {[
              { step: '1', title: 'State Symptoms', desc: 'Type symptoms or speak to our voice assistant naturally.' },
              { step: '2', title: 'Triage Assessment', desc: 'AI extracts details and calculates urgency category.' },
              { step: '3', title: 'Specialist Match', desc: 'Get matched with appropriate specialists and local clinics.' },
              { step: '4', title: 'Connect & Map', desc: 'Find contact details, open hours, and get navigations.' }
            ].map((stepObj, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl relative">
                <div className="h-12 w-12 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-lg shadow-md mb-4 ring-4 ring-background">
                  {stepObj.step}
                </div>
                <h3 className="font-bold text-base mb-2">{stepObj.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{stepObj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
