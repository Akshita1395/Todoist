'use client';

import React, { useState } from 'react';
import { CheckSquare, Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Displays the Todoist logo, section navigation links, action buttons, and mobile menu drawer (390px).
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E3DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#E44232] flex items-center justify-center text-white shadow-sm">
            <CheckSquare className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-todoist-charcoal tracking-tight">
            todoist
          </span>
          <span className="text-[10px] font-medium text-slate-400 bg-todoist-lightgray px-2 py-0.5 rounded-full ml-1">
            Redesign Concept
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
          <a href="#how-it-works" className="hover:text-todoist-coral transition-colors">Product</a>
          <a href="#capture" className="hover:text-todoist-coral transition-colors">How it works</a>
          <a href="#features" className="hover:text-todoist-coral transition-colors">Features</a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#login" className="text-slate-700 hover:text-todoist-coral transition-colors">
            Log in
          </a>
          <a
            href="#hero"
            className="px-4 py-2 rounded-lg bg-[#E44232] hover:bg-[#D13627] text-white font-semibold shadow-sm transition-colors"
          >
            Try Todoist
          </a>
        </div>

        {/* Mobile Menu Toggle Button (390px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white border border-[#E8E3DB] text-slate-700 hover:text-todoist-coral"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (390px Viewport) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E3DB] px-4 py-5 space-y-3 text-sm font-medium">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-todoist-coral py-1"
          >
            Product
          </a>
          <a
            href="#capture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-todoist-coral py-1"
          >
            How it works
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-todoist-coral py-1"
          >
            Features
          </a>
          <div className="pt-3 border-t border-[#E8E3DB] flex flex-col gap-2">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-slate-700"
            >
              Log in
            </a>
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-[#E44232] text-white font-semibold shadow-sm"
            >
              Try Todoist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
