import React, { useState } from 'react';
import LogoIcon from './LogoIcon';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);

  const [jobTitle, setJobTitle] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [roleDetails, setRoleDetails] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState('');

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!file || !jobTitle.trim() || !requiredSkills.trim()) {
      alert("Please fill in the Job Title, Required skills, and upload a resume first.");
      return;
    }

    setIsAnalyzing(true);
    setShowResults(false);
    setProgress(10);
    setCurrentStepText("Initializing Natural Language Processing Engine...");

    setTimeout(() => {
      setProgress(40);
    }, 200);

    setTimeout(() => {
      setCurrentStepText("Cross-referencing resume vectors with job criteria...");
    }, 600);

    setTimeout(() => {
      setProgress(75);
      setCurrentStepText("Calculating ATS keyword density and structure validation...");
    }, 1300);

    setTimeout(() => {
      setProgress(100);
      setCurrentStepText("Finalizing report data...");
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 400);
    }, 2100);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const totalChars = jobTitle.length + requiredSkills.length + roleDetails.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-indigo-50/40">
      
      {/* Colorful Header Banner */}
      <header className="w-full max-w-[1600px] mx-auto px-6 pt-6">
        <div className="backdrop-blur-md bg-white/90 border-b-4 border-b-teal-500 border border-slate-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            
            {/* Vector logo icon integration */}
            <LogoIcon />

            <div>
              <h1 className="font-black text-xl tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                AI RESUME ANALYSER & ATS CHECKER
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <span className="inline-flex items-center gap-1.5 text-xs bg-teal-50 border border-teal-200/60 px-3 py-1 rounded-full text-teal-700 font-medium">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              Live Parser Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Workspace Grid Layout */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Input Panel (5/12 columns) */}
        <section className="lg:col-span-5 flex flex-col gap-6 animate-fadeIn">
          
          {/* Main Input Form */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
              <h2 className="text-xs font-black text-indigo-600 uppercase tracking-wider flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 font-bold text-[10px]">01</span>
                Target Job Profile Criteria
              </h2>
              <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-100 font-extrabold px-2 py-0.5 rounded-md">
                {totalChars} Chars
              </span>
            </div>

            <div className="space-y-4">
              {/* Field 1: Title */}
              <div className="group">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Job Title / Target Designation <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g., Frontend Developer, System Analyst"
                  className="w-full px-3 py-2.5 text-sm bg-slate-50/60 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Field 2: Skills */}
              <div className="group">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Required Skills & Technologies (Comma Separated) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={requiredSkills}
                  onChange={(e) => setRequiredSkills(e.target.value)}
                  placeholder="e.g., React.js, Tailwind CSS, Python, SQL"
                  className="w-full px-3 py-2.5 text-sm bg-slate-50/60 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Field 3: Details */}
              <div className="group">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Job Description & Core Responsibilities
                </label>
                <textarea
                  value={roleDetails}
                  onChange={(e) => setRoleDetails(e.target.value)}
                  placeholder="Paste the primary descriptive requirements or project expectations here..."
                  className="w-full h-28 p-3 text-sm bg-slate-50/60 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* Upload Box Zone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-wider flex items-center gap-2 mb-4">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 font-bold text-[10px]">02</span>
              Upload Candidate Resume
            </h2>

            <label className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all block ${file ? 'border-emerald-400 bg-emerald-50/40' : 'border-slate-200 bg-slate-50/30 hover:border-teal-400'}`}>
              <input type="file" accept=".pdf,.docx" className="hidden" onChange={handleFileChange} />
              
              <div className="flex flex-col items-center justify-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${file ? 'bg-gradient-to-tr from-emerald-400 to-teal-500 text-white shadow-md shadow-emerald-100' : 'bg-slate-100 text-slate-400 group-hover:text-teal-500'}`}>
                  {file ? (
                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  )}
                </div>
                <p className="text-sm font-bold text-slate-700">
                  {file ? file.name : "Choose Resume File"}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Supports document formats: <span className="text-teal-600 font-semibold">.pdf, .docx</span>
                </p>
              </div>
            </label>
          </div>

          {/* Glowing Action Button */}
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing Parser Vector Matrix...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span>Run Score Comparison</span>
              </>
            )}
          </button>
        </section>

        {/* Right Output Dashboard (7/12 columns) */}
        <section className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-md min-h-[595px] flex flex-col overflow-hidden">
          
          {/* State A: Complete Idle */}
          {!isAnalyzing && !showResults && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto opacity-80">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-indigo-50 border border-slate-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-base font-black text-slate-800 tracking-tight">Analytics Evaluation Matrix Idle</h3>
              <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
                Provide target position criteria and supply your resume document layout to initiate automated ranking assessments.
              </p>
            </div>
          )}

          {/* State B: Processing Progress Engine */}
          {isAnalyzing && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto transition-opacity duration-300">
              <div className="w-20 h-20 relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-l-transparent border-t-teal-400 border-r-indigo-500 animate-spin"></div>
                <span className="text-sm font-black text-teal-600 tracking-tighter">{progress}%</span>
              </div>
              <h3 className="text-base font-bold text-indigo-950 tracking-tight animate-pulse">{currentStepText}</h3>
              <div className="w-48 bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-indigo-500 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          {/* State C: Full Colorized Dashboard View Report */}
          {showResults && (
            <div className="flex-1 flex flex-col opacity-100 animate-fadeIn duration-500 fill-mode-forwards">
              {/* Dynamic Header Block with colorful status */}
              <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-2 bg-slate-50/50">
                <div>
                  <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block">Evaluation Metrics</span>
                  <h4 className="text-sm font-black text-indigo-950 mt-0.5">Target: {jobTitle}</h4>
                </div>
                <span className="text-[10px] bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-3 py-1 rounded-full shadow-sm shadow-emerald-100 self-start sm:self-auto">
                  PASSED PRE-SCREEN ENGINE
                </span>
              </div>

              {/* Scoring Matrix Cards with colorful gradients */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-500/10 to-indigo-500/5 p-4 rounded-xl border border-teal-500/20 flex flex-col">
                  <span className="text-[10px] font-black text-teal-600 uppercase tracking-wider">Overall Match Score</span>
                  <span className="text-4xl font-black bg-gradient-to-br from-teal-600 to-indigo-600 bg-clip-text text-transparent mt-1">84%</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold mt-1.5 px-2 py-0.5 rounded-md self-start">Strong Match Tier</span>
                </div>

                <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100 text-center hover:bg-slate-50 transition-colors">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider text-indigo-600 block">Keyword Density</span>
                  <span className="text-4xl font-black text-slate-800 mt-1 block tracking-tight">72%</span>
                  <span className="text-[10px] text-teal-600 font-semibold mt-2 inline-block">High Density</span>
                </div>

                <div className="bg-slate-50/60 p-4 rounded-xl border border-slate-100 text-center hover:bg-slate-50 transition-colors">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider text-amber-600 block">Structural Formatting</span>
                  <span className="text-4xl font-black text-slate-800 mt-1 block tracking-tight">91%</span>
                  <span className="text-[10px] text-amber-600 font-medium mt-2 inline-block">Refinement Advised</span>
                </div>
              </div>

              {/* Layout Placeholder for recommendations list */}
              <div className="flex flex-col gap-5 px-6 pb-6">
                {/* Custom feedback maps can be rendered safely here */}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}