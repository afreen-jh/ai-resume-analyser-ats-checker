import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenerativeAI } from "@google/generative-ai"; // 🔴 FIXED THIS LINE

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads (Memory Storage)
const upload = multer({ storage: multer.memoryStorage() });

// 🔴 FIXED THIS LINE
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Route for Resume Analysis
app.post("/api/analyze", upload.single("resume"), async (req, res) => {
  try {
    const { jobTitle, skills, jobDescription } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }

    // Convert PDF buffer to Google Gen AI part object
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

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([prompt, resumePart]);
    const response = await result.response;
    const analysisText = response.text();

    // Send the generated evaluation text back to frontend
    res.json({ score: analysisText });

  } catch (error) {
    console.error("Backend pipeline error:", error);
    res.status(500).json({ error: "Failed to process resume analysis" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});