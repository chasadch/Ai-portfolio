import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of roles/opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about availability or opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Opportunity preferences:

- 📅 Availability: Open to immediate opportunities
- 🧑‍💻 Roles: AI/ML Engineer, AI Agent Engineer, Data/ML Engineer, Full‑stack with AI
- 🌍 Location: Remote or Islamabad (open to strong opportunities elsewhere)
- 🛠️ Core stack: Python, JS/TS, React/Next.js, TensorFlow, scikit‑learn, Docker, Power BI/Tableau
- ✅ Value: Fast iteration, measurable impact, clean engineering

📬 Contact:
- Email: asadarshad.4721@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-asad-arshad/
- GitHub: https://github.com/aasadah
`;
  },
});
