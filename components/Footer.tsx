'use client';

import React from 'react';
import { CheckSquare } from 'lucide-react';

/**
 * Footer Component
 * Minimal footer with Todoist branding, links, and explicit conceptual redesign disclaimer.
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E3DB] py-12 px-4 text-xs font-medium text-slate-500">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E3DB]">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#E44232] flex items-center justify-center text-white">
              <CheckSquare className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-todoist-charcoal tracking-tight">
              todoist
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <a href="#how-it-works" className="hover:text-todoist-coral transition-colors">Product</a>
            <a href="#features" className="hover:text-todoist-coral transition-colors">Features</a>
            <a href="#capture" className="hover:text-todoist-coral transition-colors">How it works</a>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="text-center sm:text-left text-slate-400 leading-relaxed text-[11px]">
          <p>
            <strong className="text-slate-600">Disclaimer:</strong> Conceptual redesign created for a frontend assignment. Not affiliated with Todoist.
          </p>
        </div>

      </div>
    </footer>
  );
}
