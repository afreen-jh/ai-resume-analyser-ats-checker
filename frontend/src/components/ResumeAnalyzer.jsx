import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  Code, 
  FileText, 
  UploadCloud, 
  Play, 
  FileCheck, 
  AlertCircle 
} from 'lucide-react';

export default function ResumeAnalyzer() {
  // Form and layout states
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = useRef(null);

  // Helper validation logic to handle extensions and complex browser MIME types
  const validateAndSetFile = (selectedFile) => {
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const fileType = selectedFile.type;

    const isValidExtension = fileExtension === 'pdf' || fileExtension === 'docx';
    const isValidMime = 
      fileType === 'application/pdf' || 
      fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (isValidExtension || isValidMime) {
      setFile(selectedFile);
    } else {
      alert("Unsupported file format! Please upload a clean .pdf or .docx document.");
    }
  };

  // Input click handler
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  // Drag and drop event handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const selectedFile = e.dataTransfer.files[0];
    validateAndSetFile(selectedFile);
  };

  const triggerFileSelect = (e) => {
  if (e) e.stopPropagation(); // Stops any event conflicts
  if (fileInputRef.current) {
    fileInputRef.current.click();
  } else {
    console.error("File input reference is not connected!");
  }
};

  const handleRunComparison = () => {
    if (!jobTitle || !skills || !jobDescription || !file) {
      alert("Please complete target profile criteria and upload a resume before running execution.");
      return;
    }
    console.log("Executing score alignment pipeline...", { jobTitle, skills, jobDescription, file });
    // TODO: Connect fetch API pipeline to backend controller endpoint here
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-800">
      {/* Header Bar */}
      <header className="mx-auto max-w-7xl bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-200">
            <FileCheck size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">AI RESUME ANALYSER & ATS CHECKER</h1>
            <p className="text-xs text-slate-500 font-medium">Evaluate optimization matching profiles</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Parser Active
        </div>
      </header>

      {/* Primary Split-Screen Grid Layout */}
      <main className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Control Column (Inputs & Upload) */}
        <section className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Step 1: Target Profile Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
            
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-md">01</span>
                <h2 className="text-sm font-bold text-slate-900 tracking-wide uppercase">Target Job Profile Criteria</h2>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {jobDescription.length} Chars
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-slate-400" />
                  Job Title / Target Designation <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g., Frontend Developer, System Analyst"
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code size={14} className="text-slate-400" />
                  Required Skills & Technologies <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g., React.js, Tailwind CSS, Python, SQL"
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText size={14} className="text-slate-400" />
                  Job Description & Core Responsibilities
                </label>
                <textarea 
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the primary descriptive requirements or project expectations here..."
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Upload Document Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-600"></div>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded-md">02</span>
              <h2 className="text-sm font-bold text-slate-900 tracking-wide uppercase">Upload Candidate Resume</h2>
            </div>

            {/* Drag & Drop Target Area Container */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileSelect}
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition relative group ${
                isDragging 
                  ? 'border-indigo-500 bg-indigo-50/50' 
                  : file 
                    ? 'border-emerald-400 bg-emerald-50/10' 
                    : 'border-slate-200 hover:border-indigo-400 hover:bg-slate-50/50'
              }`}
            >
            <input 
             type="file"
             ref={fileInputRef}
             onChange={(e) => {
             handleFileChange(e);
    e.target.value = null; 
  }}
  onClick={(e) => e.stopPropagation()} 
  accept=".pdf, .docx, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  className="hidden"
/>
  

              {file ? (
                <>
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl mb-3">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1 max-w-[240px] truncate">
                    {file.name}
                  </h3>
                  <p className="text-xs text-emerald-600 font-semibold">
                    File structured successfully ({(file.size / 1024).toFixed(1)} KB)
                  </p>
                </>
              ) : (
                <>
                  <div className={`p-3 rounded-xl mb-3 transition ${
                    isDragging ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                  }`}>
                    <UploadCloud size={28} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">Choose Resume File</h3>
                  <p className="text-xs text-slate-400 max-w-[200px]">
                    Supports document formats: <span className="font-semibold text-slate-600">.pdf, .docx</span>
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Execution Action Bar Button */}
          <button
            onClick={handleRunComparison}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl py-4 font-bold text-sm tracking-wide shadow-md shadow-blue-200 transition flex items-center justify-center gap-2 uppercase"
          >
            <Play size={16} fill="currentColor" />
            Run Score Comparison
          </button>
        </section>

        {/* Right Output Column (Analytics Results Visualization) */}
        <section className="lg:col-span-7 h-full min-h-[500px]">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm h-full flex flex-col items-center justify-center text-center">
            <div className="p-4 bg-slate-50 text-slate-400 rounded-2xl mb-4 border border-slate-100 shadow-inner">
              <FileText size={36} />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-2">Analytics Evaluation Matrix Idle</h3>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Provide target position criteria and supply your resume document layout to initiate automated ranking assessments.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}