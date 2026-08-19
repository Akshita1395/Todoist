'use client';

import React, { useState } from 'react';
import { Play, CheckCircle2, Cpu, Sparkles, Layers, RefreshCw, Terminal, Eye, Code, Zap } from 'lucide-react';

interface StageInfo {
  id: number;
  phaseName: string;
  shortLabel: string;
  tagline: string;
  thoughtProcess: string[];
  complexityTime: string;
  complexitySpace: string;
  keyInsight: string;
  codeSnippet: string;
}

export default function TodaysTrainingCard() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [showSolutionCode, setShowSolutionCode] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const stages: StageInfo[] = [
    {
      id: 1,
      phaseName: 'Phase 1: Input State Deconstruction',
      shortLabel: '1. Deconstruct',
      tagline: 'Isolate what changes vs what stays invariant.',
      thoughtProcess: [
        'Analyze contiguous subarray constraints with non-negative constraints.',
        'Define state variable K: target sum boundary.',
        'Notice brute-force O(N²) recalculates overlapping sums repeatedly.'
      ],
      complexityTime: 'O(N²) Brute Force',
      complexitySpace: 'O(1) Auxiliary',
      keyInsight: 'Expanding window increases sum monotonically; shrinking window decreases sum.',
      codeSnippet: `// Step 1: Naive formulation (O(N^2))
function maxSubarraySumBrute(nums, k) {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum <= k) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}`
    },
    {
      id: 2,
      phaseName: 'Phase 2: Invariant Discovery',
      shortLabel: '2. Find Invariant',
      tagline: 'Formulate monotonic sliding window property.',
      thoughtProcess: [
        'Invariant: Right pointer expands window greedily until currentSum > K.',
        'When currentSum exceeds K, increment Left pointer until currentSum <= K.',
        'Every valid window boundary is checked exactly once.'
      ],
      complexityTime: 'O(N) Amortized',
      complexitySpace: 'O(1) Auxiliary',
      keyInsight: 'Both left and right pointers traverse the array at most 1 time.',
      codeSnippet: `// Step 2: Invariant formulation (Sliding Window)
// Invariant: sum(left..right) <= K at validity check
let left = 0, currentSum = 0, maxLen = 0;

for (let right = 0; right < nums.length; right++) {
  currentSum += nums[right];
  while (currentSum > k) {
    currentSum -= nums[left++];
  }
  maxLen = Math.max(maxLen, right - left + 1);
}`
    },
    {
      id: 3,
      phaseName: 'Phase 3: Edge Case & State Audit',
      shortLabel: '3. Audit Boundaries',
      tagline: 'Verify empty array, zero targets, and index bounds.',
      thoughtProcess: [
        'Edge case 1: Array length = 0 -> Return 0.',
        'Edge case 2: All elements > K -> Left window shrinks past Right pointer.',
        'Edge case 3: Large integer values -> Avoid overflow issues.'
      ],
      complexityTime: 'O(N) Optimal',
      complexitySpace: 'O(1) Constant',
      keyInsight: 'Pre-flight boundary checks eliminate 90% of submission runtime errors.',
      codeSnippet: `// Step 3: Production-grade boundary verification
if (!nums || nums.length === 0 || k < 0) return 0;

let left = 0, currentSum = 0, maxLen = 0;
for (let right = 0; right < nums.length; right++) {
  currentSum += nums[right];
  while (currentSum > k && left <= right) {
    currentSum -= nums[left++];
  }
  if (currentSum <= k) {
    maxLen = Math.max(maxLen, right - left + 1);
  }
}
return maxLen;`
    },
    {
      id: 4,
      phaseName: 'Phase 4: Synthesis & Recall Anchoring',
      shortLabel: '4. Mental Model Synthesis',
      tagline: 'Lock in pattern primitive for 25+ related problem variants.',
      thoughtProcess: [
        'Pattern Class: Two-Pointer Variable Window.',
        'Applicable to: Minimum Size Subarray Sum, Subarrays with K Different Integers, Longest Substring Without Repeating Characters.',
        'Mental Trigger: "Contiguous subarray + monotonic property = Sliding Window".'
      ],
      complexityTime: 'O(N) Guaranteed',
      complexitySpace: 'O(1) Constant',
      keyInsight: 'You have mastered the underlying structural invariant, not just memorized lines of code.',
      codeSnippet: `// Mental Model Primitive: Dynamic Sliding Window
// Trigger Condition: Contiguous Subarray + Monotonic Sum/Condition
// Time: O(2N) = O(N) | Space: O(1)`
    }
  ];

  const current = stages.find(s => s.id === activeStage) || stages[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.codeSnippet);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <section id="todays-training" className="py-20 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Training Card</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Today's Guided Cognitive Workout
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Experience how "Train Your Thinking" breaks down algorithmic challenges step by step before touching a single line of code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Daily Focus:</span>
            <span className="px-3 py-1 rounded-full bg-dark-900 border border-dark-700 text-slate-200 text-xs font-mono">
              Sliding Window & Invariants
            </span>
          </div>
        </div>

        {/* Main Interactive Card Frame */}
        <div className="glass-panel rounded-3xl p-5 sm:p-8 border border-dark-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar inside Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-dark-700/60 gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-100">Workout #142: Subarray Sum Constraint</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Medium Cognitive Load
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Given an array of integers <code className="text-brand-400 font-semibold">nums</code> and target <code className="text-brand-400 font-semibold">K</code>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSolutionCode(!showSolutionCode)}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 border border-dark-700 text-xs font-mono text-slate-300 hover:text-slate-100 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-brand-400" />
              <span>{showSolutionCode ? 'Hide Blueprint Code' : 'View Blueprint Code'}</span>
            </button>

          </div>

          {/* Stepper Navigation Pills (Micro-Interaction 1 control) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-6">
            {stages.map((stage) => {
              const isActive = stage.id === activeStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500/10 border-brand-500/60 text-slate-100 shadow-md shadow-brand-500/10'
                      : 'bg-dark-900/60 border-dark-700/60 text-slate-400 hover:bg-dark-850 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[11px] font-mono text-brand-400 font-semibold">
                    {stage.shortLabel}
                  </span>
                  <span className="text-xs font-medium truncate w-full mt-0.5">
                    {stage.phaseName.split(':')[1]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Content Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Thought Process & Invariant Reasoning */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-dark-900/80 p-5 rounded-2xl border border-dark-700/60">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-mint" />
                    {current.phaseName}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 italic">
                    Step {current.id} of 4
                  </span>
                </div>

                <p className="text-xs text-brand-400 font-mono mb-4 bg-brand-500/5 p-2.5 rounded-lg border border-brand-500/10">
                  🎯 Tagline: {current.tagline}
                </p>

                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                    Cognitive Breakdown:
                  </span>
                  <ul className="space-y-2">
                    {current.thoughtProcess.map((tp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{tp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Algorithmic Insight Pill */}
              <div className="p-4 rounded-xl bg-dark-900 border border-brand-500/30 flex items-start gap-3">
                <Zap className="w-5 h-5 text-brand-mint shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-200 block mb-0.5 font-mono">
                    Core Algorithmic Insight
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.keyInsight}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Code & Complexity Metrics */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Complexity Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-dark-900 p-3.5 rounded-xl border border-dark-700 text-center">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Time Complexity
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-400">
                    {current.complexityTime}
                  </span>
                </div>
                <div className="bg-dark-900 p-3.5 rounded-xl border border-dark-700 text-center">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Space Complexity
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-300">
                    {current.complexitySpace}
                  </span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-dark-900 rounded-2xl border border-dark-700/80 overflow-hidden font-mono">
                <div className="bg-dark-950 px-4 py-2.5 border-b border-dark-700 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-brand-400" />
                    <span>ThoughtBlueprint.js</span>
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-slate-200 transition-colors text-[10px] bg-dark-850 px-2 py-0.5 rounded border border-dark-700"
                  >
                    {copiedNotification ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>

                <div className="p-4 text-xs overflow-x-auto text-slate-300 bg-dark-950/60 max-h-56 leading-relaxed">
                  <pre>{current.codeSnippet}</pre>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="font-mono text-[11px]">Toggle stages to view invariant shift</span>
                <button
                  onClick={() => setActiveStage((prev) => (prev % 4) + 1)}
                  className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-mint transition-colors font-medium"
                >
                  <span>Next Step</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
