export const faqGroups = [
  {
    title: "Working With RZ Automate",
    items: [
      {
        question: "Who owns the automations you build?",
        answer:
          "You do. We hand over the code, workflows and documentation, and you are never locked in to us.",
      },
      {
        question: "How do you handle our data?",
        answer:
          "We only access what a project needs, keep credentials in secure storage, and sign an NDA or data processing agreement on request.",
      },
    ],
  },
  {
    title: "AI Workflow Automation",
    items: [
      {
        question: "What does an AI automation agency actually do?",
        answer:
          "We find repetitive, rules-heavy work in your business and replace it with automated workflows and AI agents, then maintain them as your needs change.",
      },
      {
        question: "Which tools do you work with?",
        answer:
          "We are tool-agnostic. We use whatever fits: n8n, Make, Zapier, custom code, and the major LLM providers, integrated with your existing stack.",
      },
    ],
  },
  {
    title: "Pricing & Getting Started",
    items: [
      {
        question: "How long does a typical project take?",
        answer:
          "Most projects ship a first working version in two to four weeks. Larger systems are delivered in stages so you see value early.",
      },
      {
        question: "How much does it cost?",
        answer:
          "It depends on scope. We start with a short discovery call and send a fixed-price proposal for the project.",
      },
    ],
  },
] as const;
