import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows my contact information.',
  // Be lenient: accept either an object (any shape) or a raw string, since some models
  // occasionally pass non-JSON text as tool arguments.
  parameters: z.object({}),
  execute: async (_args) => {
    return `Here are my contact details:

- Email: asadarshad.4721@gmail.com
- Phone: 030911329590
- Location: Islamabad, Pakistan
- LinkedIn: https://www.linkedin.com/in/muhammad-asad-arshad/
- GitHub: https://github.com/aasadah

Happy to connect about AI/ML engineering, AI agents, and data-centric roles.`;
  },
});
