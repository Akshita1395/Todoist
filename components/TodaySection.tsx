'use client';

import React from 'react';
import { Sun, Sunset, Moon, Check } from 'lucide-react';

/**
 * TodaySection Component
 * Shows a clean daily timeline broken down into Morning, Afternoon, and Evening cards.
 */
export default function TodaySection() {
  const timeBlocks = [
    {
      period: 'Morning',
      icon: Sun,
      task: 'Check emails',
      completed: true,
      color: 'text-amber-500 bg-amber-50 border-amber-100',
    },
    {
      period: 'Afternoon',
      icon: Sunset,
      task: 'Finish assignment',
      completed: false,
      color: 'text-[#E44232] bg-[#E44232]/5 border-[#E44232]/10',
    },
    {
      period: 'Evening',
      icon: Moon,
      task: 'Plan tomorrow',
      completed: false,
      color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-todoist-charcoal tracking-tight">
          Know what matters today.
        </h2>
        <p className="text-base text-slate-600">
          Organize your day into clear time blocks so you can focus on one thing at a time.
        </p>
      </div>

      {/* 3 Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {timeBlocks.map((block, idx) => {
          const Icon = block.icon;
          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#E8E3DB] card-shadow space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${block.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{block.period}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Schedule</span>
              </div>

              {/* Task Row */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E3DB] flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    block.completed
                      ? 'bg-[#E44232] border-[#E44232] text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {block.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <span
                  className={`text-sm font-medium ${
                    block.completed ? 'line-through text-slate-400' : 'text-slate-700'
                  }`}
                >
                  {block.task}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
