import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Debug check for API Key
if (!process.env.GEMINI_API_KEY) {
  console.error("⚠️ GEMINI_API_KEY is missing from environment variables!");
} else {
  console.log("🔑 GEMINI_API_KEY loaded successfully.");
}

// Database Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ai_resume_db";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Database Connected Successfully!"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer
const upload = multer({ storage: multer.memoryStorage() });

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Route
app.post("/api/analyze", upload.single("resume"), async (req, res) => {
  try {
    const { jobTitle, skills, jobDescription } = req.body;
    const file = req.file;

    if (!file) {
      console.error("❌ No file attached in request body.");
      return res.status(400).json({ error: "No resume file uploaded" });
    }

    console.log(`📄 Processing file: ${file.originalname} (${file.mimetype})`);

    const resumePart = {
      inlineData: {
        data: file.buffer.toString("base64"),
        mimeType: file.mimetype,
      },
    };

    const prompt = `
You are an expert ATS (Applicant Tracking System) and HR manager.
Analyze the provided resume against the following job details:
Target Job Title: ${jobTitle}
Required Skills: ${skills}
Job Description: ${jobDescription}

Provide a structured evaluation containing:
1. A match percentage score (0-100%).
2. Missing keywords or critical skills.
3. Practical recommendations to improve the resume.
`;

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent([prompt, resumePart]);
    const response = await result.response;
    const analysisText = response.text();

    console.log("✅ Resume analysis complete!");
    res.json({ score: analysisText });
  } catch (error) {
    // PRINT DETAILED ERROR TO BACKEND TERMINAL
    console.error("================ ❌ API ERROR DETAILS ❌ ================");
    console.error(error);
    console.error("=========================================================");

    res.status(500).json({ 
      error: error.message || "Failed to process resume analysis" 
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});