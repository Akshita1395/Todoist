'use client';

import React from 'react';
import { Target, Zap, Award, ArrowRight, CheckCircle2, Milestone } from 'lucide-react';

export default function TrainingJourney() {
  const steps = [
    {
      phase: '01. Deliberate Training',
      title: 'Deconstruct & Formulate',
      icon: Target,
      tagline: 'Focus on mental blueprints before coding.',
      highlights: [
        'Interactive state-space breakdown workouts',
        'Identify invariant conditions without time pressure',
        'Build personal cognitive pattern dictionary'
      ],
      badge: 'Foundation Phase'
    },
    {
      phase: '02. Timed Challenge',
      title: 'Execute & Audit',
      icon: Zap,
      tagline: 'Apply intuition under realistic conditions.',
      highlights: [
        'Code implementation with clean edge-case audits',
        'Real-time space & time complexity verification',
        'Zero trial-and-error submission policy'
      ],
      badge: 'Execution Phase'
    },
    {
      phase: '03. Interview Mastery',
      title: 'Communicate & Excel',
      icon: Award,
      tagline: 'Articulate structural trade-offs effortlessly.',
      highlights: [
        'Explain thought process smoothly to interviewers',
        'Adapt instantly when interviewers modify constraints',
        'Demonstrate senior-level engineering rigor'
      ],
      badge: 'Career Impact'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
            <Milestone className="w-3.5 h-3.5" />
            <span>Structured Growth Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            The Training → Challenge → Interview Journey
          </h2>
          <p className="text-sm text-slate-400">
            A proven 3-stage progression that shifts your problem-solving mindset from anxiety and memorization to systematic engineering execution.
          </p>
        </div>

        {/* Journey Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/20 via-brand-mint/40 to-brand-500/20 -translate-y-6 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-dark-700 hover:border-brand-500/40 transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-brand-400 font-bold px-2.5 py-1 rounded bg-brand-500/10 border border-brand-500/20">
                      {step.phase}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-dark-850 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-brand-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-6 bg-dark-900/60 p-2.5 rounded-xl border border-dark-800">
                    "{step.tagline}"
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-3 mb-6">
                    {step.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card Footer indicator */}
                <div className="pt-4 border-t border-dark-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Step {index + 1} of 3</span>
                  <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
