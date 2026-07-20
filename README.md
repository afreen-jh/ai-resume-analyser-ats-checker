# AI Resume Analyser and ATS Checker

An AI-powered MERN stack application designed to analyze resumes against job descriptions, calculate ATS compatibility scores, and provide actionable feedback for improvement.

---

## 🚀 Features

* **AI Resume Analysis:** Uses Google Generative AI (Gemini) to evaluate resume content.
* **ATS Compatibility Score:** Calculates how well your resume matches a job description.
* **User Authentication:** Secure JWT-based registration and login system.
* **File Processing:** Fast and secure upload/extraction of PDF and document resumes.

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **AI Integration:** Google Generative AI (`@google/generative-ai`)

---

## 📁 Project Structure

```text
ai-resume-analyser/
├── backend/          # Express API server & Mongoose models
├── frontend/         # React client interface
├── README.md         # Documentation
└── .gitignore