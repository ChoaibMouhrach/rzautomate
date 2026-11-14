export const bookHref = "/book?service=maintenance&source=automation-tools";

export const billing = {
  title: "How automation tools charge you",
  body: "The plan price is only half the story. What decides your bill is what each tool counts as one unit, and every tool counts differently.",
  example: "One run of a 5-step workflow costs you",
  closing: "The more steps a workflow has and the more often it runs, the bigger the gap gets.",
  cards: [
    { tool: "Zapier", number: "4", unit: "tasks", line: "Every action step is a task. The trigger is free." },
    { tool: "n8n", number: "1", unit: "execution", line: "One full run is one execution, however many steps." },
    { tool: "Make", number: "5", unit: "credits", line: "Every module uses a credit, the trigger included." },
  ],
} as const;

export const choose = {
  title: "How to choose a workflow automation tool",
  intro: "We get asked this a lot. Here's what we actually look at.",
  rows: [
    { n: "01", title: "Does it work with your apps?", line: "Check this first. If it can't connect to your CRM, nothing else matters." },
    { n: "02", title: "What will it cost at your volume?", line: "Count your runs and steps, then try the calculator on each tool's page." },
    { n: "03", title: "Who will look after it?", line: "Workflows break when apps change. Someone has to notice and fix it." },
    { n: "04", title: "Does your data need to stay in house?", line: "Then pick a tool you can run on your own servers." },
    { n: "05", title: "How well does it handle AI?", line: "More workflows need an AI step. Some tools make that easy." },
  ],
  take: {
    title: "Our take",
    body: "We build most of our client work on n8n. It's open source, we can host it ourselves, and it charges per run instead of per step. That's our bias, so we're telling you upfront. The table treats every tool the same.",
    label: "See n8n pricing →",
    href: "/automation-tools/n8n",
  },
} as const;

export const types = {
  title: "Three kinds of automation tools",
  columns: [
    { icon: "workflow", title: "Workflow platforms", body: "Where most businesses start. You pick a trigger, add the steps, and the tool runs them every time.", tools: ["zapier", "make", "n8n"] },
    { icon: "sparkles", title: "AI agent builders", body: "Newer tools where an agent reads a message, decides what to do and acts on it.", tools: ["gumloop", "lindy"] },
    { icon: "building", title: "Enterprise integration", body: "Built for large companies with many systems and an IT team. Powerful, and priced to match.", tools: ["workato", "tray", "pipedream"] },
  ],
} as const;

export const faqs = [
  { question: "What are workflow automation tools?", answer: "They connect your apps and handle the repetitive work between them. When something happens in one app, like a new order or a form entry, the tool runs the next steps for you. It can update your CRM, send emails and tell your team, with nobody doing it by hand." },
  { question: "What's the best free workflow automation tool?", answer: "It depends on what you need. n8n is free if you host it yourself, with no limit on runs, but someone technical has to set it up. Zapier and Make both have free plans that are easy to start with, though they cap how much you can run each month." },
  { question: "Is n8n cheaper than Zapier?", answer: "Usually, yes, especially for longer workflows. Zapier charges for every step, while n8n charges once per full run no matter how many steps it has. So the more steps you have, the bigger the difference. Self-hosted n8n costs nothing apart from the server." },
  { question: "What's the difference between Zapier and Make?", answer: "Zapier is the simpler of the two. It's quick to set up and connects to more apps. Make gives you a visual canvas where you can build bigger workflows with branches and loops. Make also tends to cost less for the same amount of work." },
  { question: "Can I self-host a workflow automation tool?", answer: "Yes. n8n and Activepieces are open source, so you can run them on your own server. That keeps your data in house and removes usage limits. The trade-off is that someone has to set the server up, keep it updated and fix it when something breaks." },
  { question: "Do I need a developer to use these tools?", answer: "Not for simple workflows. Zapier and Make are built so anyone can connect two apps in a few minutes. It gets harder once you add lots of steps, AI or custom logic, or when something breaks. That's usually when businesses bring in someone like us." },
] as const;
