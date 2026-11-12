import type { FlowIcon } from "@/components/site/service-page/types";

export const path = "/services/ai-document-processing";
export const bookHref = "/book?service=document-processing";
export const auditHref = "/tools/what-to-automate-first";

export const seo = {
  title: "AI Document Processing & Invoice Automation",
  description:
    "AI document processing that reads invoices, forms and PDFs, enters the data into your systems and flags anything unclear. Book a free 30-min call.",
  socialTitle: "AI Document Processing & Invoice Automation",
  openGraphDescription:
    "AI document processing that reads invoices, forms and PDFs, enters the data into your systems and flags anything unclear for a person.",
  twitterDescription:
    "AI document processing that reads invoices, forms and PDFs, enters the data into your systems and flags anything unclear for a person.",
  serviceName: "AI document processing",
  alternateNames: [
    "Intelligent document processing (IDP)",
    "Invoice processing automation",
    "Data entry automation",
  ],
  serviceDescription:
    "We build AI document processing that reads your invoices, receipts, forms and PDFs, enters the data into your systems and flags anything unclear for a person.",
  imageAlt: "AI document processing for invoices and forms by RZ Automate",
};

export const hero = {
  title: "More invoices and forms, no extra data entry.",
  subhead:
    "We build AI document processing that reads your invoices, receipts, forms and PDFs, enters the data into your systems and flags anything unclear for a person. Your volume grows, your data entry doesn't.",
  secondary: "Find what to automate first →",
  trust: "Free · 30 min · No commitment",
  flow: [
    { tag: "Step 1", title: "Invoice arrives", meta: "INV-20931.pdf in your inbox" },
    { tag: "Step 2", title: "AI reads the fields", meta: "Fields found. PO missing, so flagged" },
    { tag: "Step 3", title: "Entered in your books", meta: "Draft bill ready to approve" },
  ],
};

// TODO: placeholder figures and logos. Replace with real numbers before launch.
export const proof = {
  heading: "Document processing running for growing teams",
  pills: [
    { number: "42,000", label: "documents processed a month" },
    { number: "94%", label: "entered without edits" },
    { number: "310 hrs", label: "of data entry removed monthly" },
  ],
  logosLabel: "Trusted by teams at",
  logos: [
    { name: "Launchlife", src: "/logos/clients/launchlife.svg", height: "h-8" },
    { name: "Choice EMR Learning", src: "/logos/clients/choice-learning.png", height: "h-12" },
    { name: "CloudSDS", src: "/logos/clients/cloudsds.png", height: "h-8" },
    { name: "Akera", src: "/logos/clients/akera.png", height: "h-10" },
    { name: "AI Adoption", src: "/logos/clients/ai-adoption.png", height: "h-9" },
  ],
};

export const pain = {
  label: "The paperwork pile-up",
  heading: "More business shouldn't mean more typing.",
  rows: [
    { title: "Every new client brings more paperwork", line: "Invoices, receipts and forms grow with you." },
    { title: "Numbers copied by hand", line: "One typo and your books disagree." },
    { title: "Month-end runs late", line: "Someone's still keying in last week's bills." },
    { title: "Documents scattered everywhere", line: "Inboxes, uploads, shared drives, desk piles." },
    { title: "Templates break on new layouts", line: "Old OCR tools fail the moment a supplier changes format." },
  ],
  closing:
    "AI document processing reads any layout, enters what it's sure of, and sends the rest to a person, so the work scales without the typing.",
};

export const build = {
  label: "What we build",
  heading: "AI document processing for the paperwork you handle every day",
  definition:
    "AI document processing, also called intelligent document processing (IDP), uses AI to read documents like invoices, receipts and forms, pull out the data you need, check it and enter it into your systems. Unlike template-based OCR, it handles new layouts without being set up for each one.",
  items: [
    {
      name: "Invoice and bill processing",
      body: "Supplier invoices read and entered as draft bills, matched to purchase orders where you use them.",
      stack: [
        { tag: "Arrives", title: "Supplier invoice (PDF)", meta: "accounts@ inbox" },
        { tag: "AI reads", title: "Supplier, amount, due date", meta: "Line items included" },
        { tag: "Done", title: "Draft bill in your accounting software", meta: "Ready to approve" },
      ],
    },
    {
      name: "Receipts and expenses",
      body: "Receipts photographed or forwarded by your team, turned into categorised expense entries.",
      stack: [
        { tag: "Arrives", title: "Receipt photo", meta: "Forwarded by email" },
        { tag: "AI reads", title: "Vendor, total, tax", meta: "Category suggested" },
        { tag: "Done", title: "Expense logged", meta: "Receipt attached" },
      ],
    },
    {
      name: "Forms and applications",
      body: "Application, intake and onboarding forms read and turned into clean records in your CRM or database.",
      stack: [
        { tag: "Arrives", title: "Signed application (PDF)", meta: "Upload portal" },
        { tag: "AI reads", title: "Name, company, details", meta: "Checked for blanks" },
        { tag: "Done", title: "New record in Airtable", meta: "Missing field flagged" },
      ],
    },
    {
      name: "Orders and purchase orders",
      body: "Orders that arrive as PDFs or emails entered into your order sheet or system, without retyping.",
      stack: [
        { tag: "Arrives", title: "Purchase order email", meta: "orders@ inbox" },
        { tag: "AI reads", title: "Items, quantities, ship-to", meta: "Matched to SKUs" },
        { tag: "Done", title: "Order added", meta: "Team notified in Slack" },
      ],
    },
    {
      name: "Contracts and long documents",
      body: "Key terms, dates and amounts pulled out of contracts and reports, with a short summary for your team.",
      stack: [
        { tag: "Arrives", title: "Signed contract", meta: "Shared drive" },
        { tag: "AI reads", title: "Term, renewal date, value", meta: "Summary written" },
        { tag: "Done", title: "Logged + reminder set", meta: "60 days before renewal" },
      ],
    },
  ],
};

export const flow = {
  label: "How it works on every document",
  heading: "Every document, every format, one of three outcomes",
  channels: ["Email inbox", "Uploads", "Scans and photos", "Shared drives"],
  icons: ["mail", "upload", "scan", "folder"] as FlowIcon[],
  center: "Your document processor",
  outcomes: [
    { title: "Entered", line: "Clean data in your books or systems" },
    { title: "Flagged", line: "Unclear fields sent to a person" },
    { title: "Filed", line: "Renamed and stored where it belongs" },
  ],
  footnote:
    "You decide which fields must always be checked by a person before anything is entered.",
};

// TODO: placeholder results. Replace with measured client numbers.
export const results = {
  label: "Results",
  heading: "More documents processed, same team",
  body: "Every result is measured against a number the client already tracked.",
  secondary: { label: "Calculate your number →", href: "/tools/automation-roi-calculator" },
  tiles: [
    { number: "6,400", label: "documents processed a month", line: "Distribution company · Wholesale. Up from 1,800 by hand." },
    { number: "95%", label: "entered without edits", line: "Accounting firm · Professional services" },
    { number: "4 days", label: "faster month-end close", line: "Distribution company · Wholesale" },
  ],
  summary: {
    text: "Supplier invoices arrived by email, in every layout, and two people keyed them in all week. We built a system that reads each one, enters what it's sure of and flags the rest. Month-end now closes four days earlier with the same team.",
    link: { label: "Book a free call", href: "#book" },
  },
};

// TODO: placeholder quotes. Replace with real client quotes.
export const testimonials = {
  heading: "Teams that stopped typing in their paperwork",
  subhead: "What clients say once their document processing is live.",
  quotes: [
    {
      name: "Helen Marsh",
      role: "Finance Manager, distribution company",
      quote: "Invoices used to pile up until Friday. Now they're in the books the day they arrive, and we only look at the exceptions.",
    },
    {
      name: "Rafael Moreno",
      role: "Partner, accounting firm",
      quote: "Volume doubled across our clients and nobody on the team is typing. Accuracy has been better than when we did it by hand.",
    },
    {
      name: "Sana Qureshi",
      role: "Operations Lead, logistics company",
      quote: "Month-end used to drag. Now it closes days earlier, and every flagged document tells us exactly what to check.",
    },
  ],
};

export const tools = {
  heading: "Sends data to the tools you already use",
  centerTitle: "No new system to learn",
  centerLine: "It runs on your accounts. You own it.",
  logos: [
    { name: "QuickBooks", src: "/logos/quickbooks.svg" },
    { name: "Xero", src: "/logos/xero.svg" },
    { name: "Google Sheets", src: "/logos/googlesheets.svg" },
    { name: "Excel", src: "/logos/excel.svg" },
    { name: "Airtable", src: "/logos/airtable.svg" },
    { name: "HubSpot", src: "/logos/hubspot.svg" },
    { name: "Gmail", src: "/logos/gmail.svg" },
    { name: "Outlook", src: "/logos/outlook.jpg" },
    { name: "Google Drive", src: "/logos/googledrive.svg" },
    { name: "Dropbox", src: "/logos/dropbox.svg" },
    { name: "OneDrive", src: "/logos/onedrive.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "DocuSign", src: "/logos/docusign.png" },
    { name: "Notion", src: "/logos/notion.svg" },
    { name: "Stripe", src: "/logos/stripe.svg" },
    { name: "Salesforce", src: "/logos/salesforce.svg" },
    { name: "Zapier", src: "/logos/zapier.svg" },
    { name: "Asana", src: "/logos/asana.svg" },
    { name: "Shopify", src: "/logos/shopify.svg" },
    { name: "Pipedrive", src: "/logos/pipedrive.png" },
  ],
};

export const process = {
  label: "How we work",
  heading: "From first call to paperwork that handles itself",
  steps: [
    { title: "Free call", line: "Bring a few real documents. We show you what can be read and entered." },
    { title: "Fixed-price plan", line: "Which documents, which fields, what gets checked, the price and launch date, in writing." },
    { title: "Launch in review mode", line: "Your team checks every entry until the accuracy holds up." },
    { title: "Grow with you", line: "Support after launch is included, then an optional monthly plan." },
  ],
};

export const fit = {
  heading: "Is AI document processing right for you?",
  goodTitle: "A good fit if",
  good: [
    "You handle the same kinds of documents again and again",
    "They arrive by email, upload or a shared folder",
    "Someone spends hours a week typing them in",
    "The data ends up in a system you already use",
  ],
  badTitle: "Not a fit if",
  bad: [
    "You only process a handful of documents a month",
    "Most documents are handwritten notes",
    "You need a full accounting or ERP system replaced",
    "You want legal judgment on contracts, not data extraction",
  ],
  closing: "Not sure? Find what to automate first →",
};

export const faq = {
  label: "FAQ",
  heading: "Before you hand your paperwork to AI.",
  link: { label: "See all questions →", href: "/faq" },
  items: [
    {
      question: "How accurate is it?",
      answer:
        "Very accurate on clear documents, and it knows when it isn't sure. Unclear fields go to a person instead of being guessed, and it starts in review mode.",
    },
    {
      question: "What about scans, photos and messy layouts?",
      answer:
        "It reads scans, phone photos and layouts it hasn't seen before. Very poor quality images or heavy handwriting get flagged for a person.",
    },
    {
      question: "Does it work with our accounting software?",
      answer:
        "Almost always. We connect to accounting tools like QuickBooks and Xero, plus spreadsheets, Airtable and more. If yours has an API, we can usually connect it.",
    },
    {
      question: "What happens when a field is wrong or missing?",
      answer:
        "The document is flagged with the exact field that needs checking. A person fixes it, and nothing incomplete gets entered.",
    },
    {
      question: "Is our financial data safe?",
      answer:
        "It runs on your own accounts and reads only what each step needs. The AI providers we use don't train on your data.",
    },
    {
      question: "Will it replace our bookkeeper or admin team?",
      answer:
        "No. It removes the typing so your team can check exceptions, close the month faster and keep up as volume grows.",
    },
  ],
};

// TODO: confirm the plan turnaround before launch.
export const book = {
  eyebrow: "Free 30-min call",
  plain: "See which documents you can ",
  muted: "stop typing in",
  body: "Bring a few real invoices, receipts or forms. We'll show you what can be read and entered automatically, and what should stay with your team. You keep the plan either way.",
  planLabel: "Written plan",
  plan: "In your inbox within one business day",
  embedTitle: "Book a free 30-minute call",
  service: "document-processing",
};

export const related = {
  heading: "Related services",
  tiles: [
    { title: "Business process automation", line: "Onboarding, reporting and handoffs that run themselves.", href: "/services/business-process-automation" },
    { title: "AI lead generation & CRM automation", line: "More booked calls, from the leads you already get.", href: "/services/ai-lead-generation" },
    { title: "AI agent development", line: "Custom agents for work no template covers.", href: "/services/ai-agent-development" },
  ],
};
