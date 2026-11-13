export const hero = {
  eyebrow: "Free automation ROI calculator",
  title: "What is one manual task",
  accent: "really costing you?",
  subhead:
    "Enter five numbers about one task. See the hours, money and share of a hire that automating it could give back each year. No email needed.",
};

export const howItWorks = {
  heading: "How the automation ROI calculator works",
  intro:
    "Automation ROI comes down to one question: how much time does a task take, and what is that time worth? Here's exactly what the calculator does with your numbers.",
  steps: [
    "Hours by hand each month = times per month × minutes each time ÷ 60",
    "Hours saved = hours by hand × the share that can be automated",
    "Money back = hours saved × your hourly cost",
    "Net savings = money back − the automation's running cost",
    "Share of a full-time role = hours saved a year ÷ 1,800 productive hours",
    "If you enter a build cost: payback in months = build cost ÷ net monthly savings, and first-year return = (net savings in year one − build cost) ÷ build cost",
  ],
  closing:
    "We round hours and money down and payback up, so the result errs on the cautious side.",
};

export const workedExample = {
  heading: "Worked example: invoice data entry",
  body: "A team enters 400 supplier invoices a month, about 5 minutes each. That's around 33 hours a month by hand. If 80% of it is automated, they get back about 26 hours a month. At $47 an hour, that's roughly $1,250 a month, or $15,040 a year. After $50 a month in running costs, it's about $14,440 a year. The 320 hours saved are a little under a fifth of a full-time role (the calculator rounds this down and shows 0.1).",
};

export const assumptions = {
  heading: "What this calculator doesn't count",
  intro:
    "The number above is a starting point, not a quote. Things that change the real result:",
  bullets: [
    {
      title: "Errors and rework.",
      text: "Fewer typos and missed steps usually add value on top of time saved.",
    },
    {
      title: "Speed.",
      text: "Faster replies to leads and customers can win revenue, which isn't counted here.",
    },
    {
      title: "Setup time.",
      text: "Your team spends some time explaining the process and checking early results.",
    },
    {
      title: "Exceptions.",
      text: "Some cases still need a person, which is why the automation share is rarely 100%.",
    },
  ],
  source: {
    prefix: "Default hourly cost: ",
    label: "U.S. Bureau of Labor Statistics, Employer Costs for Employee Compensation, June 2026",
    href: "https://www.bls.gov/news.release/ecec.nr0.htm",
  },
};

export const faq = {
  label: "FAQ",
  heading: "Automation ROI questions",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "How do you calculate automation ROI?",
      answer:
        "Multiply the hours a task takes by the share you can automate and by the hourly cost of the person doing it. Subtract the automation's running cost. If you know the build cost, divide it by the monthly savings to get the payback period.",
    },
    {
      question: "What hourly cost should I use?",
      answer:
        "The fully loaded cost: pay plus benefits and taxes. A quick estimate is hourly pay × 1.4. The default here is the US private-industry average from the Bureau of Labor Statistics.",
    },
    {
      question: "What's a realistic automation share?",
      answer:
        "For repetitive tasks, 50% to 85% is a sensible starting range. Someone usually still handles exceptions, so 100% is rare.",
    },
    {
      question: "Is my data saved?",
      answer:
        "No. The calculator runs in your browser. Nothing is sent anywhere. If you copy the link to a result, your numbers are in the link, not on our servers.",
    },
    {
      question: "What if the result is low?",
      answer:
        "That's useful to know before you build anything. Small tasks often aren't worth automating on their own. Combining a few related tasks usually changes the math.",
    },
  ],
};

export const bookCall = {
  title: "Want the real number for your business?",
  description:
    "Book a free 30-minute call. We'll look at your actual tasks and show you which ones are worth automating first.",
};

export const related = {
  heading: "More free tools",
  tiles: [
    {
      title: "What to automate first",
      line: "Get a ranked list of tasks to hand off.",
      href: "/tools/what-to-automate-first",
    },
    {
      title: "AI readiness check",
      line: "See what to fix before you build.",
      href: "/tools/ai-readiness-check",
    },
    {
      title: "AI model prices",
      line: "Compare what each model costs per task.",
      href: "/models",
    },
  ],
};
