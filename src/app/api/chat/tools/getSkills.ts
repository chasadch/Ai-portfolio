import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool show a list of my skills.',
  parameters: z.object({}),
  execute: async () => {
    return `Skills snapshot:

- Languages & Web: Python, C++, SQL, JavaScript/TypeScript, React, Next.js, HTML/CSS, Flask
- AI/ML & Data: Pandas, NumPy, scikit-learn, TensorFlow, Transformers, LangChain, VectorDBs, scikit-image, NLTK
- Tools & Platforms: Git/GitHub, VS Code, Jupyter, Docker, DVC, Power BI, Tableau
- Strengths: Problem-solving, analytical thinking, communication, rapid learning`;
  },
});