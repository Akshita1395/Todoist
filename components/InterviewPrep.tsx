'use client';

import React from 'react';
import { Target, MessageSquare, Award, CheckCircle } from 'lucide-react';

/**
 * Interview Preparation Component
 * Shows 3 simple steps to get ready for coding interviews.
 */
export default function InterviewPrep() {
  const steps = [
    {
      number: '01',
      title: 'Learn Core Patterns',
      icon: Target,
      description: 'Learn common coding patterns instead of memorizing solutions.',
    },
    {
      number: '02',
      title: 'Practice Every Day',
      icon: Award,
      description: 'Spend 20 minutes every day breaking down 1 problem step by step without rushing to write code immediately.',
    },
    {
      number: '03',
      title: 'Explain Out Loud',
      icon: MessageSquare,
      description: 'Practice explaining your thinking clearly to your interviewer before you start typing your solution.',
    }
  ];

  return (
    <section id="interview-prep" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Interview Preparation</h2>
        <p className="text-sm text-slate-400">
          A simple 3-step strategy to feel confident during technical interviews.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">{step.number}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Step {index + 1} Goal</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
