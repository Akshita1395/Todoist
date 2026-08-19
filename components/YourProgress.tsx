'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle, Target, Sparkles } from 'lucide-react';

/**
 * Your Progress Component
 * Shows qualitative learning progress and current practice focus without any fake stats or numbers.
 */
export default function YourProgress() {
  // Currently selected topic state
  const [selectedTopic, setSelectedTopic] = useState<string>('Arrays & Strings');

  // Qualitative topic progress data without any fake numbers
  const progressData: Record<string, { status: string; checkpoints: { name: string; statusText: string }[] }> = {
    'Arrays & Strings': {
      status: 'Active Focus',
      checkpoints: [
        { name: 'Understanding Problem Bounds', statusText: 'Verified & Clear' },
        { name: 'Two-Pointer Pattern Matching', statusText: 'In Active Practice' },
        { name: 'Writing Clean Solution Code', statusText: 'Core Skill Ready' }
      ]
    },
    'Dynamic Programming': {
      status: 'In Practice',
      checkpoints: [
        { name: 'Subproblem Breakdown', statusText: 'In Active Practice' },
        { name: 'Base Case Setup', statusText: 'Verified & Clear' },
        { name: 'State Table Memory', statusText: 'Core Skill Ready' }
      ]
    },
    'Trees & Graphs': {
      status: 'In Review',
      checkpoints: [
        { name: 'BFS Queue Handling', statusText: 'Core Skill Ready' },
        { name: 'DFS Recursion Clarity', statusText: 'In Active Practice' },
        { name: 'Visited Node Tracking', statusText: 'Verified & Clear' }
      ]
    },
    'System Logic': {
      status: 'Practiced',
      checkpoints: [
        { name: 'Null Input Guard', statusText: 'Verified & Clear' },
        { name: 'Empty Array Handling', statusText: 'Verified & Clear' },
        { name: 'Integer Range Check', statusText: 'Core Skill Ready' }
      ]
    }
  };

  const current = progressData[selectedTopic] || progressData['Arrays & Strings'];

  return (
    <section id="progress" className="py-16 px-4 bg-slate-900/40 border-t border-b border-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Your Progress</h2>
          <p className="text-sm text-slate-400">
            Track your current focus and learning progress across core topics.
          </p>
        </div>

        {/* Progress Box */}
        <div className="bg-[#0D121D] rounded-2xl border border-slate-800 p-5 sm:p-8 space-y-6">
          
          {/* Topic Select Buttons */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Topics Practiced:
            </span>
            <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
              {Object.keys(progressData).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    selectedTopic === topic
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Current Focus</span>
                <span className="text-base font-bold text-slate-100">{selectedTopic}</span>
              </div>
              <Target className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Practice Status</span>
                <span className="text-base font-bold text-emerald-400">{current.status}</span>
              </div>
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

          {/* Learning Progress Checkpoints */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Learning Progress for {selectedTopic}:
            </h4>

            <div className="space-y-2.5">
              {current.checkpoints.map((cp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium text-slate-200">{cp.name}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-950 text-emerald-400 text-[11px] font-mono border border-slate-800">
                    {cp.statusText}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
