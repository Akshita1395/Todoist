'use client';

import React from 'react';
import { Check, TrendingUp, Calendar } from 'lucide-react';

/**
 * ProgressSection Component
 * Visualizes simple weekly task checkmarks across Mon-Sun without any fake stats or numbers.
 */
export default function ProgressSection() {
  const weekDays = [
    { day: 'Mon', completed: true, taskCount: '3 completed' },
    { day: 'Tue', completed: true, taskCount: '4 completed' },
    { day: 'Wed', completed: true, taskCount: '2 completed' },
    { day: 'Thu', completed: true, taskCount: '5 completed' },
    { day: 'Fri', completed: true, taskCount: '3 completed' },
    { day: 'Sat', completed: false, taskCount: 'In progress' },
    { day: 'Sun', completed: false, taskCount: 'Upcoming' },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 px-4 bg-white border-t border-b border-[#E8E3DB]">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-todoist-charcoal tracking-tight">
            Small steps add up.
          </h2>
          <p className="text-base text-slate-600">
            Build steady momentum by finishing a few important tasks every single day.
          </p>
        </div>

        {/* Weekly Progress Overview Card */}
        <div className="max-w-3xl mx-auto bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#E8E3DB] card-shadow text-left space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DB]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E44232]/10 flex items-center justify-center text-[#E44232]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-todoist-charcoal">Weekly Routine</h3>
                <span className="text-xs text-slate-500 font-mono">Mon – Sun Overview</span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#E44232]/10 text-[#E44232] text-xs font-semibold">
              Daily Practice Demo
            </span>
          </div>

          {/* Weekly Days Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
            {weekDays.map((w, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border text-center space-y-2 transition-colors ${
                  w.completed
                    ? 'bg-white border-[#E44232]/30 text-todoist-charcoal'
                    : 'bg-white/60 border-[#E8E3DB] text-slate-400'
                }`}
              >
                <span className="text-xs font-bold block">{w.day}</span>
                
                <div
                  className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center ${
                    w.completed
                      ? 'bg-[#E44232] text-white'
                      : 'border border-slate-300 bg-slate-50 text-slate-300'
                  }`}
                >
                  {w.completed ? <Check className="w-4 h-4 stroke-[3]" /> : <span className="text-[10px]">○</span>}
                </div>

                <span className="text-[10px] text-slate-500 block font-mono">
                  {w.taskCount}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
