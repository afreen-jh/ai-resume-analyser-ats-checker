import React from 'react';
import LogoIcon from './components/LogoIcon';

export default function ResumeAnalyzer() {
  return (
    // Swapped plain gray background for a subtle cool-indigo tint
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/40 via-slate-50 to-blue-50/40 p-6 flex flex-col gap-6">
      
      {/* HEADER SECTION */}
      <header className="flex items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-xl border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3">
          <LogoIcon />
          {/* Enhanced heading text style with a dark slate tone */}
          <h1 className="text-xl font-extrabold text-slate-800 tracking-wide uppercase">
            AI Resume Analyser & ATS Checker
          </h1>
        </div>

        {/* Live Parser Badge - More vibrant green pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Parser Active
        </div>
      </header>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CRITERIA & UPLOAD (Takes 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* SECTION 01: TARGET JOB PROFILE CRITERIA */}
          {/* Added a dynamic left colored bar accent */}
          <div className="bg-white p-5 rounded-2xl border-l-4 border-l-blue-600 border-y border-r border-slate-200/80 shadow-md shadow-blue-950/5 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                {/* Colored badge count */}
                <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-sm shadow-blue-500/20">01</span>
                <h2 className="text-sm font-bold text-slate-800 tracking-wide uppercase">Target Job Profile Criteria</h2>
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">0 Chars</span>
            </div>

            {/* Input: Job Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                Job Title / Target Designation <span className="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g., Frontend Developer, System Analyst" 
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Input: Required Skills */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                Required Skills & Technologies <span className="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g., React.js, Tailwind CSS, Python, SQL" 
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Input: Job Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                Job Description & Core Responsibilities
              </label>
              <textarea 
                rows="4"
                placeholder="Paste the primary descriptive requirements or project expectations here..." 
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>
          </div>

          {/* SECTION 02: UPLOAD CANDIDATE RESUME */}
          {/* Added a dynamic left colored bar accent */}
          <div className="bg-white p-5 rounded-2xl border-l-4 border-l-indigo-600 border-y border-r border-slate-200/80 shadow-md shadow-indigo-950/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="bg-indigo-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-sm shadow-indigo-500/20">02</span>
              <h2 className="text-sm font-bold text-slate-800 tracking-wide uppercase">Upload Candidate Resume</h2>
            </div>

            {/* Drag & Drop Area - Given a smooth colorful indigo backdrop tint */}
            <div className="border-2 border-dashed border-indigo-200 hover:border-indigo-500 bg-indigo-50/30 hover:bg-indigo-50/60 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all group">
              <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-700">Choose Resume File</p>
                <p className="text-xs text-slate-400 mt-1">Supports document formats: <span className="text-indigo-600 font-semibold">.pdf, .docx</span></p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON - Vibrant gradient button with matching shadow glowing effect */}
          <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm tracking-wider uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="12" y1="20" y2="10"/><line x1="12" x2="6" y1="20" y2="4"/></svg>
            Run Score Comparison
          </button>
        </div>

        {/* RIGHT COLUMN: ANALYTICS EVALUATION MATRIX (Takes 7 cols) */}
        {/* Swapped white out for a stylized matrix layout with a gradient badge focus */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-md p-6 min-h-[595px] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle colored background accent ring shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col items-center max-w-sm text-center gap-4 relative z-10">
            {/* Colorful custom container for the central idle icon */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 text-indigo-500 rounded-2xl border border-indigo-100/80 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M9 11h6"/></svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">Analytics Evaluation Matrix Idle</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Provide target position criteria and supply your resume document layout to initiate automated ranking assessments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}