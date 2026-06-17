import React from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                MedReach AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              An AI-powered healthcare triage and clinic recommendation platform. Empowering users with clinical guidance and connections to healthcare providers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assessment" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Symptom Triage
                </Link>
              </li>
              <li>
                <Link href="/voice" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Voice Assistant
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Clinic Map View
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Doctor Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Helpline */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Emergency</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-red-500 font-semibold">National Toll-Free: 112</span>
              </li>
              <li>
                <span className="text-red-500 font-semibold">Ambulance: 108</span>
              </li>
              <li>
                <Link href="/emergency" className="text-muted-foreground hover:text-red-500 transition-colors">
                  All Emergency Contacts →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DISCLAIMER: MedReach AI is an informational tool and does not provide professional medical advice, diagnosis, or treatment. Always consult a healthcare professional for clinical advice. If you are experiencing a life-threatening medical emergency, call 112 / 108 or go to the nearest emergency room immediately.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4">
            &copy; {new Date().getFullYear()} MedReach AI. All rights reserved. Built for Hackathon judging.
          </p>
        </div>
      </div>
    </footer>
  );
}
