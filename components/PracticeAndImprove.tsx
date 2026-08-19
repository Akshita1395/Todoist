'use client';

import React from 'react';
import { Layers, Network, ArrowRightLeft, ShieldAlert, Check } from 'lucide-react';

/**
 * Practice and Improve Component
 * Displays 4 fundamental coding topic cards in simple English.
 */
export default function PracticeAndImprove() {
  const topics = [
    {
      title: 'Arrays & Strings',
      icon: ArrowRightLeft,
      description: 'Learn how to traverse sequences using two pointers and sliding windows.',
      skills: ['Two Pointers', 'Sliding Window', 'Prefix Sums']
    },
    {
      title: 'Dynamic Programming',
      icon: Layers,
      description: 'Break big problems down into small subproblems and store their results.',
      skills: ['State Tables', 'Memoization', 'Subproblem Recall']
    },
    {
      title: 'Trees & Graphs',
      icon: Network,
      description: 'Explore nodes and connections using BFS queues and DFS recursion.',
      skills: ['Tree Traversal', 'BFS Shortest Path', 'Graph Connectivity']
    },
    {
      title: 'Logic & Edge Cases',
      icon: ShieldAlert,
      description: 'Avoid bugs by testing empty inputs, single elements, and large numbers.',
      skills: ['Null Checks', 'Integer Overflow', 'Boundary Guards']
    }
  ];

  return (
    <section id="practice" className="py-16 px-4 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Practice and Improve</h2>
        <p className="text-sm text-slate-400">
          Practice important coding topics.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100">{topic.title}</h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {topic.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Key Skills:</span>
                <div className="flex flex-wrap gap-2">
                  {topic.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 text-xs flex items-center gap-1 border border-slate-800"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
