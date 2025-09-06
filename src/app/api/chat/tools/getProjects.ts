import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool shows a list of selected projects by Muhammad Asad Arshad",
  parameters: z.object({}),
  execute: async () => {
    return `Selected projects:

- AI‑Native Interactive Portfolio — Human‑like, real‑time Q&A avatar with expressive gestures; React/Next.js + AI SDK; context‑aware responses and seamless cross‑device experience.
- AI Voice Agent — Python + Speech Recognition + gTTS; WhatsApp + Twilio integration to initiate and manage calls; Gmail + Google Apps Script automation; OpenAI/Groq for summarization and tasks.
- Plant Disease Detection — TensorFlow/EfficientNet/ResNet; 36‑class image classification with data augmentation; trained on custom agriculture dataset.
- AI Autonomous Drone Navigation — Vision‑based obstacle recognition; Jetson compute + telemetry + LiDAR stability; path planning and low‑level controls.
- Research: Latency‑Aware Task Partitioning and Data Modeling in MEC Networks — designed a metaheuristic‑based framework (ACO/GA/PSO) for optimal task partitioning and user association.

Curious about any of these? I can dive deeper into architecture, stack, or results.`;
  },
});