import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Muhammad Asad Arshad. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Muhammad Asad Arshad — a CS graduate from NUST (Islamabad). I build AI agents and practical AI applications using Python and JS/TS. I care about clean engineering, fast iteration, and measurable impact. Recently: real-time analytics over 1M+ Apache logs (33% better observability), UX refactors that boosted conversions, and ML projects from plant disease detection to autonomous drone navigation.",
    };
  },
});