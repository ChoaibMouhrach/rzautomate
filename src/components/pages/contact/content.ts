export const nextSteps = {
  label: "What happens next",
  heading: "From first message to a clear plan",
  steps: [
    {
      title: "You reach out",
      line: "Pick a time that suits you. No preparation needed.",
    },
    {
      title: "We talk for 30 minutes",
      line: "We look at what's slowing growth and what's worth automating.",
    },
    {
      title: "You get a written plan",
      line: "What we'd build and how it would work. Yours to keep.",
    },
  ],
} as const;

export const contactFaq = {
  label: "FAQ",
  heading: "Before you reach out.",
  link: { label: "See all questions →", href: "/faq/" },
  items: [
    {
      question: "Is the call really free?",
      answer:
        "Yes. It's 30 minutes, there's no commitment, and you keep the advice whether you work with us or not.",
    },
    {
      question: "What should I bring to the call?",
      answer:
        "The task that's slowing you down and the tools it touches. A few real examples help, like recent leads, tickets or invoices.",
    },
    {
      question: "Is it a sales pitch?",
      answer:
        "No. You tell us what's going on, we tell you what's worth automating, including when the answer is 'not yet'.",
    },
    {
      question: "Do you work with companies in other countries?",
      answer:
        "Yes. We work remotely across time zones and agree on meeting hours at the start.",
    },
  ],
} as const;
