'use client';

import React from 'react';
import { CheckCircle2, Lightbulb, Bell, CheckSquare, ArrowDown } from 'lucide-react';

/**
 * CaptureSection Component
 * Displays 3 cards (Tasks, Ideas, Reminders) flowing into a single Todoist task list.
 */
export default function CaptureSection() {
  const categories = [
    {
      title: 'Tasks',
      icon: CheckCircle2,
      example: 'Finish frontend assignment',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Ideas',
      icon: Lightbulb,
      example: 'New project layout concept',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Reminders',
      icon: Bell,
      example: 'Team catch-up at 4:00 PM',
      color: 'bg-[#E44232]/5 text-[#E44232] border-[#E44232]/10',
    },
  ];

  return (
    <section id="capture" className="py-16 sm:py-24 px-4 bg-white border-t border-b border-[#E8E3DB]">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-todoist-charcoal tracking-tight">
            Everything you need to remember, in one place.
          </h2>
          <p className="text-base text-slate-600">
            Add tasks, ideas, and reminders before they get lost.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E3DB] space-y-3 text-left shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-todoist-charcoal">{cat.title}</h3>
                <p className="text-xs text-slate-500 font-mono">Example: "{cat.example}"</p>
              </div>
            );
          })}
        </div>

        {/* Flow Down Indicator */}
        <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
          <span className="text-xs font-medium uppercase tracking-wider">Flows seamlessly into your list</span>
          <ArrowDown className="w-4 h-4 text-[#E44232] animate-bounce" />
        </div>

        {/* Output Todoist List Preview Card */}
        <div className="max-w-lg mx-auto bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E3DB] card-shadow text-left space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E8E3DB]">
            <CheckSquare className="w-4 h-4 text-[#E44232]" />
            <span className="text-xs font-bold uppercase text-todoist-charcoal">Organized Inbox</span>
          </div>

          <div className="space-y-2 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2 p-2 rounded bg-white border border-[#E8E3DB]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Finish frontend assignment</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white border border-[#E8E3DB]">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>New project layout concept</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white border border-[#E8E3DB]">
              <span className="w-2 h-2 rounded-full bg-[#E44232]" />
              <span>Team catch-up at 4:00 PM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
