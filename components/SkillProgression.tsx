'use client';

import React from 'react';
import { Layers, Network, ArrowLeftRight, AlertTriangle, ShieldCheck, CheckCircle, Flame } from 'lucide-react';

interface SkillCard {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  keyInvariant: string;
  commonTrap: string;
  masteryPercentage: number;
  unlockedPatterns: string[];
}

export default function SkillProgression() {
  const skills: SkillCard[] = [
    {
      title: 'State Space & Subproblems',
      category: 'Dynamic Programming',
      icon: Layers,
      description: 'Isolate optimal substructure and overlapping subproblems without memoization confusion.',
      keyInvariant: 'dp[i] depends solely on valid sub-states dp[0..i-1]',
      commonTrap: 'Failing to establish base case boundaries before state transitions.',
      masteryPercentage: 88,
      unlockedPatterns: ['Knapsack Variants', 'Interval DP', 'State Reduction']
    },
    {
      title: 'Graph Boundary Exploration',
      category: 'Graph & Matrix Traversal',
      icon: Network,
      description: 'Formulate graph representations from abstract relations and manage cyclic visit states cleanly.',
      keyInvariant: 'Each node processed in topological or distance order exactly once',
      commonTrap: 'Infinite recursion due to late cycle marking.',
      masteryPercentage: 92,
      unlockedPatterns: ['BFS Shortest Path', 'Topological Sort', 'Union-Find']
    },
    {
      title: 'Two-Pointer & Window Invariants',
      category: 'Array & Sequence Intuition',
      icon: ArrowLeftRight,
      description: 'Exploit monotonic properties to eliminate nested loops with mathematical confidence.',
      keyInvariant: 'Window boundaries expand or contract monotonically',
      commonTrap: 'Window pointer overshoot on empty or single-element inputs.',
      masteryPercentage: 95,
      unlockedPatterns: ['Sliding Window', 'Fast & Slow Pointers', 'Binary Search']
    },
    {
      title: 'Boundary & Defensive Auditing',
      category: 'System Robustness',
      icon: AlertTriangle,
      description: 'Systematically check nullability, integer overflow, and off-by-one errors before running tests.',
      keyInvariant: 'Pre-condition and post-condition assertions hold invariant',
      commonTrap: 'Relying on trial-and-error test runner feedback.',
      masteryPercentage: 85,
      unlockedPatterns: ['Edge Case Matrix', 'Overflow Guard', 'Pointer Verification']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900/60 relative border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
            <Flame className="w-3.5 h-3.5" />
            <span>Targeted Skill Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Train Mental Models, Not Static Solutions
          </h2>
          <p className="text-sm text-slate-400">
            Algorithms are organized into core cognitive primitives. Master these four domains to unlock problem-solving clarity across any engineering problem.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-dark-700 hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-brand-400 font-semibold uppercase tracking-wider block">
                          {skill.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-100 group-hover:text-brand-400 transition-colors">
                          {skill.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-slate-200 block">
                        {skill.masteryPercentage}%
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Intuition Index</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {skill.description}
                  </p>

                  {/* Invariant & Pitfall Details */}
                  <div className="space-y-2.5 mb-6 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-dark-950 border border-dark-700/60 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-mint shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Key Invariant:</span>
                        <span className="text-slate-300 text-[11px]">{skill.keyInvariant}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-dark-950 border border-dark-700/60 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block">Common Pitfall Avoided:</span>
                        <span className="text-slate-400 text-[11px]">{skill.commonTrap}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Unlocked Patterns */}
                <div className="pt-4 border-t border-dark-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">
                    Transferable Patterns Unlocked:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.unlockedPatterns.map((pat, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded bg-dark-800 text-slate-300 text-[11px] font-mono border border-dark-700 flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-brand-400" />
                        {pat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
