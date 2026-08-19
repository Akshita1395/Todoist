'use client';

import React, { useState } from 'react';
import { Check, Calendar, ArrowRight } from 'lucide-react';

interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * Hero Component
 * Displays main tagline, action buttons, and an interactive Todoist task card (Micro-Interaction 1).
 */
export default function Hero() {
  // Interactive Task List State
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: 'Finish assignment', completed: true },
    { id: 2, text: 'Review interview notes', completed: false },
    { id: 3, text: 'Practice DSA', completed: false },
    { id: 4, text: 'Call home', completed: false },
  ]);

  // Toggle completion state of a task
  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Calculate remaining incomplete tasks count
  const remainingCount = tasks.filter(t => !t.completed).length;

  return (
    <section id="hero" className="py-12 sm:py-20 px-4 max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E44232]/10 border border-[#E44232]/20 text-[#E44232] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Productivity Redesign Concept</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-todoist-charcoal tracking-tight leading-[1.15]">
            Get your head clear.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Turn everything on your mind into a simple plan for today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a
              href="#start"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E44232] hover:bg-[#D13627] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-[#E8E3DB] font-semibold text-sm transition-colors"
            >
              See how it works
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Todoist Task Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E3DB] card-shadow space-y-5">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E44232]" />
                <h2 className="text-sm font-extrabold tracking-wider uppercase text-todoist-charcoal">
                  TODAY
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </div>

            {/* Interactive Tasks List */}
            <div className="space-y-3">
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#FAF8F5] cursor-pointer transition-colors group"
                >
                  {/* Custom Checkbox Button */}
                  <button
                    type="button"
                    aria-label={`Mark task ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      task.completed
                        ? 'bg-[#E44232] border-[#E44232] text-white'
                        : 'border-slate-300 group-hover:border-[#E44232]'
                    }`}
                  >
                    {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>

                  {/* Task Text */}
                  <span
                    className={`text-sm transition-all duration-200 ${
                      task.completed
                        ? 'line-through text-slate-400'
                        : 'text-slate-800 font-medium'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Footer: Remaining Count */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>{remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} left</span>
              <span className="text-[11px] text-[#E44232] font-semibold bg-[#E44232]/10 px-2 py-0.5 rounded">
                Click checkbox to toggle
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
