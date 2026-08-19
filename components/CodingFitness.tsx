'use client';

import React, { useState } from 'react';
import { Activity, Calendar, Trophy, Zap, Sparkles, Sliders, LineChart } from 'lucide-react';

interface MetricItem {
  name: string;
  score: number;
  benchmark: string;
  description: string;
}

export default function CodingFitness() {
  const [selectedDomain, setSelectedDomain] = useState<string>('Dynamic Programming');
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | 'all'>('30d');

  const domainData: Record<string, { fitnessScore: number; metrics: MetricItem[]; streak: number }> = {
    'Dynamic Programming': {
      fitnessScore: 92,
      streak: 18,
      metrics: [
        { name: 'State Space Identification', score: 94, benchmark: 'Top 5%', description: 'Speed in isolating subproblem bounds before coding.' },
        { name: 'Base Case Verification', score: 89, benchmark: 'Top 10%', description: 'Eliminating out-of-bounds boundary errors.' },
        { name: 'Space Optimization', score: 95, benchmark: 'Top 3%', description: 'Reducing O(N^2) space to O(N) or O(1).' },
        { name: 'Code Implementation', score: 90, benchmark: 'Top 8%', description: 'Translating recurrences into clean loops.' },
      ]
    },
    'Graph Traversal': {
      fitnessScore: 88,
      streak: 14,
      metrics: [
        { name: 'Cycle Detection', score: 91, benchmark: 'Top 7%', description: 'Visited array state management accuracy.' },
        { name: 'Topological Intuition', score: 86, benchmark: 'Top 12%', description: 'In-degree array construction speed.' },
        { name: 'BFS/DFS Choice', score: 92, benchmark: 'Top 5%', description: 'Selecting optimal queue vs recursion model.' },
        { name: 'Connected Component Count', score: 83, benchmark: 'Top 15%', description: 'Union-find vs traversal decision speed.' },
      ]
    },
    'Sliding Window': {
      fitnessScore: 96,
      streak: 24,
      metrics: [
        { name: 'Monotonic Expansion', score: 98, benchmark: 'Top 1%', description: 'Right pointer increment condition accuracy.' },
        { name: 'Shrink Condition Assertion', score: 95, benchmark: 'Top 2%', description: 'Left pointer while loop termination.' },
        { name: 'Subarray Length Math', score: 94, benchmark: 'Top 4%', description: 'Off-by-one window calculation.' },
        { name: 'Hash Map Shrinking', score: 97, benchmark: 'Top 2%', description: 'Frequency count updates.' },
      ]
    },
    'System Boundaries': {
      fitnessScore: 85,
      streak: 9,
      metrics: [
        { name: 'Integer Overflow Guard', score: 88, benchmark: 'Top 10%', description: 'Detecting MAX_SAFE_INTEGER limits.' },
        { name: 'Null & Empty Guard', score: 92, benchmark: 'Top 6%', description: 'Null check before property dereference.' },
        { name: 'Duplicate Input Handling', score: 81, benchmark: 'Top 18%', description: 'Managing redundant array elements.' },
        { name: 'Single-Element Input', score: 79, benchmark: 'Top 20%', description: 'Handling N=1 boundary edge cases.' },
      ]
    }
  };

  const currentDomainData = domainData[selectedDomain] || domainData['Dynamic Programming'];

  return (
    <section id="fitness" className="py-20 bg-dark-900/40 relative border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Progress Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Coding Fitness & Cognitive Metrics
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Track your algorithmic problem-solving stamina, invariant accuracy, and cognitive consistency across distinct problem domains.
            </p>
          </div>

          {/* Timeframe Selector */}
          <div className="inline-flex items-center p-1 rounded-xl bg-dark-950 border border-dark-700 text-xs font-mono">
            {(['7d', '30d', 'all'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  timeframe === t
                    ? 'bg-brand-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Domain Tabs & Overview */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-dark-950 p-5 rounded-3xl border border-dark-700 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                Select Skill Domain
              </span>

              {Object.keys(domainData).map((domain) => {
                const isSelected = selectedDomain === domain;
                const score = domainData[domain].fitnessScore;
                return (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-500/10 border-brand-500/60 text-slate-100 shadow-md shadow-brand-500/10'
                        : 'bg-dark-900/60 border-dark-800 text-slate-400 hover:bg-dark-850 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-xs font-semibold">{domain}</span>
                    <span className="text-xs font-mono font-bold text-brand-400 bg-dark-950 px-2.5 py-1 rounded-lg border border-dark-700">
                      {score} / 100
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Streak & Consistency Widget */}
            <div className="glass-card p-5 rounded-3xl border border-dark-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Active Routine</span>
                  <span className="text-sm font-bold text-slate-100">{currentDomainData.streak} Days Deliberate Streak</span>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-mint animate-pulse" />
            </div>

          </div>

          {/* Right Column: Detailed Radar Bar Visualizer */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-dark-700 flex flex-col justify-between">
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-dark-700/60 gap-3 mb-6">
                <div>
                  <span className="text-xs font-mono text-brand-400 font-semibold uppercase tracking-wider block">
                    Domain Deep-Dive
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">{selectedDomain} Mental Fitness</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Overall Index:</span>
                  <span className="text-lg font-mono font-bold text-brand-mint bg-brand-500/10 px-3 py-1 rounded-xl border border-brand-500/30">
                    {currentDomainData.fitnessScore}%
                  </span>
                </div>
              </div>

              {/* Metric Progress Bars */}
              <div className="space-y-6">
                {currentDomainData.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-200">{metric.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 bg-dark-900 px-2 py-0.5 rounded border border-dark-800">
                          {metric.benchmark}
                        </span>
                        <span className="font-bold text-brand-400">{metric.score}%</span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-dark-950 rounded-full overflow-hidden border border-dark-800 p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-mint rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 font-mono">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-4 border-t border-dark-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Interactive metric breakdown updated live</span>
              <span className="text-brand-400">Zero guess-and-check submissions</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
