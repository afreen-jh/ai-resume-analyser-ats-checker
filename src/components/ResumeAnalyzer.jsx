import React, { useState } from 'react';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobDescription) {
      alert("Please upload a resume and provide a job description.");
      return;
    }

    setLoading(true);
    setResults(null); // Clear previous results before scanning

    // Placeholder dummy response simulating analysis until backend is connected
    setTimeout(() => {
      setResults({
        match_percentage: 78,
        profile_summary: "The candidate demonstrates strong frontend expertise with React and modern build tooling. UI styling layout is exceptionally clean using utility-first patterns.",
        missing_keywords: ["Docker", "CI/CD Pipelines", "Redis"],
        strengths: ["Proficient with React 19 & Vite architectures", "Excellent Tailwind CSS utility integration"]
      });
      setLoading(false);
    }, 2000); // 2-second simulation delay
  };


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            AI Resume Analyzer & ATS Checker
          </h1>
          <p className="text-slate-400 mt-2">Optimize your resume against tracking systems in real-time.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">📄 Upload Resume</h2>
              <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-teal-400 transition cursor-pointer relative">
                <input 
                  type="file" 
                  accept=".pdf,.docx" 
                  onChange={handleFileChange} 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <p className="text-slate-300 font-medium">Drag & drop your PDF/Docx here</p>
                <p className="text-xs text-slate-500 mt-1">or click to browse files</p>
                {file && <p className="mt-4 text-sm text-teal-400 font-semibold">Selected: {file.name}</p>}
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="text-xl font-bold mb-4">🎯 Target Job Description</h2>
            <textarea
              rows="6"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 placeholder-slate-600"
              placeholder="Paste the full job description requirements here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-teal-500/20 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Analyzing Content...' : 'Scan & Analyze Resume'}
          </button>
        </div>

        {results && (
          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <h2 className="text-2xl font-extrabold mb-6 border-b border-slate-700 pb-4">Analysis Report</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10">
              <div className="flex flex-col items-center bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <span className="text-sm uppercase font-semibold text-slate-400 tracking-wider">ATS Match Rating</span>
                <div className="text-6xl font-black text-teal-400 mt-2">{results.match_percentage}%</div>
                <div className="w-full bg-slate-700 h-2.5 rounded-full mt-4 overflow-hidden">
                  <div className="bg-teal-400 h-full" style={{ width: `${results.match_percentage}%` }}></div>
                </div>
              </div>

              <div className="md:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-700 self-stretch flex flex-col justify-center">
                <h3 className="font-bold text-lg text-blue-400 mb-1">Executive Summary</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{results.profile_summary}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/60">
                <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">⚠️ Missing Critical Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {results.missing_keywords.map((kw, i) => (
                    <span key={i} className="bg-red-950/40 text-red-300 border border-red-900/50 px-3 py-1.5 rounded-lg text-xs font-medium">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/60">
                <h3 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">✅ Identified Strengths</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  {results.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span> {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}