'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Activity, Phone, Sun, Moon, Menu, X, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Symptom Triage', href: '/assessment' },
    { name: 'Voice Assist', href: '/voice' },
    { name: 'Clinic Map', href: '/map' },
    { name: 'Doctor Directory', href: '/doctors' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-teal-600 dark:text-teal-400 animate-pulse" />
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
            MedReach AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                isActive(item.href)
                  ? 'text-teal-600 dark:text-teal-400 font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Link href="/emergency">
            <Button
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2 px-4 shadow-lg shadow-red-500/20 animate-pulse hover:animate-none"
            >
              <ShieldAlert className="h-4 w-4" />
              EMERGENCY
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Activity className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                    MedReach AI
                  </span>
                </Link>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                        isActive(item.href)
                          ? 'text-teal-600 dark:text-teal-400 font-semibold'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/emergency" className="mt-4">
                    <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center gap-2">
                      <ShieldAlert className="h-5 w-5" />
                      EMERGENCY CONTACTS
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
