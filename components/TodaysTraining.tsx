'use client';

import React, { useState } from 'react';
import { Code, Lightbulb } from 'lucide-react';

/**
 * Today's Training Component
 * An interactive card that lets the user click through 3 simple steps of solving a daily problem.
 */
export default function TodaysTraining() {
  // Active step state: 1, 2, or 3
  const [activeStep, setActiveStep] = useState<number>(1);

  // Content for each step written in simple English
  const steps = [
    {
      id: 1,
      title: '1. Understand Problem',
      summary: 'Read constraints and find input limits.',
      explanation: 'We are given an array of numbers and a target number. We need to find two numbers that add up to the target.',
      tip: 'Always check: Can the array be empty? Are all numbers positive?',
      code: `// Step 1: Define what we receive and what we need
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because 2 + 7 = 9)`
    },
    {
      id: 2,
      title: '2. Choose Strategy',
      summary: 'Use a Hash Map for fast lookups.',
      explanation: 'Checking every pair takes O(N^2) time. Instead, as we visit each number, we check if (target - currentNumber) is stored in our Hash Map.',
      tip: 'Hash maps reduce search time from O(N) to O(1) average time!',
      code: `// Step 2: Algorithmic Logic
// For number 7: We check if (9 - 7 = 2) is in map.
// Yes! 2 is at index 0. So answer is [0, 1].`
    },
    {
      id: 3,
      title: '3. Write Clean Solution',
      summary: 'Combine logic into clean code.',
      explanation: 'Here is the complete JavaScript function that runs in O(N) time and O(N) memory space.',
      tip: 'Return an empty array if no matching pair exists.',
      code: `function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
    }
  ];

  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section id="todays-training" className="py-16 px-4 bg-slate-900/40 border-t border-b border-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Today's Training</h2>
          <p className="text-sm text-slate-400">
            Understand the problem before you code.
          </p>
        </div>

        {/* Training Card */}
        <div className="bg-[#0D121D] rounded-2xl border border-slate-800 p-5 sm:p-8 space-y-6">
          
          {/* Card Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
            <div>
              <span className="text-xs text-emerald-400 font-mono font-semibold">Today's Practice</span>
              <h3 className="text-lg font-bold text-slate-100">Today's Problem: Two Sum</h3>
            </div>
            <span className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-300 font-mono self-start sm:self-auto">
              Difficulty: Easy
            </span>
          </div>

          {/* 3 Interactive Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3 rounded-xl border text-left transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500 text-slate-100'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block text-emerald-400">{step.title}</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">{step.summary}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-2">
            
            {/* Left: Explanation & Tip */}
            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-200 uppercase mb-2">Step Explanation</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{currentStep.explanation}</p>
              </div>

              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-200 block mb-0.5">Beginner Tip</span>
                  <p className="text-xs text-slate-300">{currentStep.tip}</p>
                </div>
              </div>
            </div>

            {/* Right: Code Block */}
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Code Preview</span>
                </span>
                <span>JavaScript</span>
              </div>
              <pre className="overflow-x-auto leading-relaxed text-slate-300">{currentStep.code}</pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
