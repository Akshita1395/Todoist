'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <aside aria-label="Conceptual redesign notice" className="w-full bg-dark-900/90 border-b border-dark-700/60 py-2.5 px-4 text-xs font-mono text-slate-400 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center p-1 rounded bg-brand-500/10 text-brand-400">
            <AlertCircle className="w-3.5 h-3.5" />
          </span>
          <span>
            <strong className="text-slate-200 font-semibold uppercase tracking-wider text-[11px] mr-1.5">Conceptual Redesign:</strong> 
            Independent design experiment repositioning algorithm practice into deliberate cognitive training.
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="hidden sm:inline">Not affiliated with LeetCode Inc.</span>
          <span className="px-2 py-0.5 rounded bg-dark-800 text-brand-400 border border-brand-500/20 text-[10px]">v1.0 Design Preview</span>
        </div>
      </div>
    </aside>
  );
}
