import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 font-sans text-slate-800 antialiased">
      {/* Top Banner / Hero Area */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-6 relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
        
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-md mb-3 border border-indigo-500/30">
            ✨ Optimize Your Focus
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Your Ultimate Study Command Center.
          </h1>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            Eliminate guesswork. Build intelligent study routines, automatically track your syllabus completion, and meet every deadline with confidence.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/plan"
              className="bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
            >
              Start New Plan
            </Link>
            <button className="bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all border border-white/10">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Core Utilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Features Segment (Span 2) */}
        <div className="md:col-span-2 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">System Toolkit</h2>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-indigo-50/30 hover:border-indigo-100 transition-all">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold text-sm mb-2 group-hover:bg-indigo-100 transition-colors">
                01
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Structured Planning</h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Input subjects, break down modules, and assign hard deadlines.
              </p>
            </div>

            <div className="group p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50/30 hover:border-emerald-100 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold text-sm mb-2 group-hover:bg-emerald-100 transition-colors">
                02
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Progress Tracker</h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Visual completion rates and burn-down charts for every subject.
              </p>
            </div>

            <div className="group p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-rose-50/30 hover:border-rose-100 transition-all">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-semibold text-sm mb-2 group-hover:bg-rose-100 transition-colors">
                03
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Intelligent Alerts</h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Proactive warnings for approaching target dates and overdue tasks.
              </p>
            </div>

            <div className="group p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-amber-50/30 hover:border-amber-100 transition-all">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-semibold text-sm mb-2 group-hover:bg-amber-100 transition-colors">
                04
              </div>
              <h3 className="text-sm font-semibold text-slate-900">AI Priority Engine</h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                Dynamic generation of "What to study next" based on task urgency.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Sidebar Info (Span 1) */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Live Insights</h2>
            
            {/* Quick Micro-Widget */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-slate-600">Weekly Target</span>
                <span className="text-xs font-bold text-indigo-600">72% Done</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-1.5 rounded-full w-[72%]" />
              </div>
            </div>

            {/* Quick Micro-Widget 2 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
              <span className="text-[11px] font-medium uppercase tracking-tight text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                Next AI Suggestion
              </span>
              <p className="text-xs font-semibold text-slate-800 mt-2">
                Review: Data Structures & Algorithms
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Urgency factor: High (Exam in 4 days)
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/60 text-center">
            <p className="text-[11px] text-slate-400 font-medium">
              Ready to break procrastination?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;