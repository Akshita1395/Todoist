'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * FinalCTA Component
 * Simple closing call-to-action encouraging users to get started.
 */
export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 max-w-4xl mx-auto text-center">
      <div className="bg-[#E44232]/5 border border-[#E44232]/20 p-8 sm:p-14 rounded-3xl space-y-6">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-todoist-charcoal tracking-tight">
          Ready to clear your mind?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          Start with one task. We'll help you organize the rest.
        </p>

        <div>
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#E44232] hover:bg-[#D13627] text-white font-bold text-base shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Start for free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
