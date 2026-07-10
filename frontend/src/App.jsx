import React from 'react';
import LogoIcon from './components/LogoIcon';
import ResumeAnalyzer from './components/ResumeAnalyzer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/40 via-slate-50 to-blue-50/40 p-4">
      
      {/* HEADER SECTION */}
      <header className="flex items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <h1 className="text-xl font-extrabold text-slate-800 tracking-wide uppercase">
            AI Resume Analyser & ATS Checker
          </h1>
        </div>

        {/* Live Parser Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-700 rounded-full text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Parser Active
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main>
        <ResumeAnalyzer />
      </main>

    </div>
  );
}