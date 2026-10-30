export const path = "/services/ai-document-processing";
export const bookHref = "/book?service=document-processing";
export const auditHref = "/tools/what-to-automate-first";

export const hero = {
  "eyebrow": "AI document processing for small and mid-sized businesses",
  "title": "AI document processing: invoices and forms entered without anyone retyping them",
  "subline": "I'm a software engineer. I build systems that read invoices, receipts and POs, enter them in QuickBooks, Xero, your CRM or sheets, and flag anything unclear for a person.",
  "trust": "Free · 30 min · No commitment. You talk to the engineer who builds it."
} as const;

export const fit = {
  "title": "Is document processing automation right for your business?",
  "intro": "This works best when the documents are already digital and the slow part is someone retyping them. Here's how to tell if that's you.",
  "goodTitle": "Good fit if",
  "badTitle": "Not a fit if",
  "good": [
    "Someone on your team types data from invoices, bills, PDFs or forms into another tool by hand every week.",
    "Your documents arrive digitally: email attachments, uploads to a shared folder, or scans from an office scanner.",
    "The data ends up in a known place, like QuickBooks, Xero, your CRM or a Google Sheet.",
    "You want a person to check the exceptions. Anything the system isn't sure about gets flagged for review instead of guessed."
  ],
  "bad": [
    "You want bills paid automatically. I don't move money. The system prepares bill entries for a person to review before they are created. Approval and payment stay with your team.",
    "Most of your documents are handwritten or very poor scans. Those would end up in the review queue, so you'd save little time.",
    "You handle regulated records like health data or ID checks for KYC and don't have a compliance plan we've scoped together first.",
    "You process thousands of documents a day. At that volume an enterprise IDP platform is probably the better buy, and I'll tell you so."
  ],
  "closing": "Not sure which side you're on?"
} as const;

export const pain = {
  "title": "Why is invoice data entry still eating my week?",
  "description": "They arrive on their own. Someone still types them in.",
  "cards": [
    [
      "Hours a week retyping invoices",
      "Bills and receipts keyed into QuickBooks, Xero or a sheet."
    ],
    [
      "PDFs pile up until month-end",
      "Then close drags for days."
    ],
    [
      "Typos and duplicate bills",
      "One wrong digit or double entry means a wrong payment."
    ],
    [
      "Contracts copied into the CRM by hand",
      "Fields get missed and renewals slip past."
    ]
  ],
  "bridge": "That's reading and retyping. I automate it, so your team only checks the exceptions."
} as const;

export const build = {
  "title": "Invoice processing automation and the other document workflows I build",
  "definition": "AI document processing (sometimes called intelligent document processing, or IDP) is using AI to read documents, extract the data, validate it and enter it into your accounting tool, CRM or spreadsheet. Unlike OCR-only tools and fixed templates, it keeps working when a layout changes.",
  "intro": "Six builds that move documents from your inbox and shared folders into the tools you already use, each running from a trigger to a result you can check.",
  "cards": [
    {
      "title": "AI invoice processing and bill entry",
      "flow": "An invoice lands in your AP inbox → AI reads vendor, dates, line items, tax and total and checks the math, duplicates and PO match → the extracted bill details wait for your approval before a bill is created in QuickBooks or Xero.",
      "chips": "Outlook · QuickBooks Online · Xero"
    },
    {
      "title": "Receipt and expense capture",
      "flow": "Staff snap a receipt or forward an emailed one → a vision model reads merchant, date, amount and tax and picks the category → it's logged in Xero or your expense sheet, image attached.",
      "chips": "Gmail · Xero · Google Sheets"
    },
    {
      "title": "Purchase order automation",
      "flow": "A customer emails a PO or order form as a PDF → AI pulls the buyer, ship-to, SKUs, quantities, prices and delivery date → the order is created in your order system or Google Sheet.",
      "chips": "Outlook · Airtable · Google Sheets"
    },
    {
      "title": "Data entry automation for forms, contracts and onboarding documents",
      "flow": "A signed contract, intake form or onboarding pack arrives → AI pulls names, dates, amounts and key terms into your CRM or database → renewal and notice dates go straight onto your calendar.",
      "chips": "HubSpot · Airtable · Google Calendar"
    },
    {
      "title": "Document automation for email and attachment triage",
      "flow": "A PDF arrives in a shared inbox → AI tells an invoice from a statement, contract or anything else → it's renamed, filed in the right Drive or SharePoint folder and routed to the right person.",
      "chips": "Gmail · Google Drive · SharePoint"
    },
    {
      "title": "Human review queue and weekly report",
      "flow": "A low-confidence field or failed check → it goes to a Slack review queue with the source document attached → a person approves or fixes it, and a weekly report shows volume, exception rate and time saved.",
      "chips": "Slack · Airtable · Google Sheets"
    }
  ],
  "guardrail": "Fields the AI isn't confident about get flagged for a person instead of guessed. Totals are math-checked, duplicates are caught before they post, and the system never pays a bill or moves money. Payments stay with a person.",
  "closing": "Built with n8n plus Claude or OpenAI (vision models for scans and photos), and it runs on your own accounts, so every workflow, document and API key stays yours."
} as const;

export const proof = {
  "eyebrow": "See it running",
  "title": "Watch AI invoice processing run on three invoices, from inbox to review",
  "description": "This is a demo on sample invoices and a test accounting account, not a client project. Three invoices land in an inbox, and you see what gets extracted, what gets checked and the one that goes to a person.",
  "steps": [
    "Extract. Three invoices arrive as email attachments. The workflow reads each one and pulls the vendor, invoice number, dates, line items, tax and total.",
    "Check. It does the math (line items plus tax must equal the total) and looks for a duplicate invoice number from the same vendor.",
    "Result. Two clean invoices are ready for review before bill creation in [ACCOUNTING TOOL]. The third has a total that does not add up, so it goes to Slack with the PDF and the reason, for a person to check."
  ],
  "leadIn": "Want to see it run on your own invoices?",
  "microcopy": "You talk to me, the person who builds it. Bring 3 to 5 real invoices or forms and tell me where the data ends up. I'll show you what would go straight through and what would get flagged.",
  "transcriptTitle": "Demo narration draft",
  "transcript": [
    "This is an invoice processing workflow I built, running on three sample invoices and a test [ACCOUNTING TOOL] account.",
    "The invoices just came into a shared inbox as PDF attachments. The workflow picks them up and reads each one. Here's what it pulled from the first: vendor, invoice number, dates, every line item, tax and the total.",
    "Before anything gets created, it checks two things. Do the line items and tax add up to the total? And has this vendor sent this invoice number before?",
    "The first two pass. Their bill details are ready for review in [ACCOUNTING TOOL]. A person approves the details before bill creation and handles payment.",
    "The third one doesn't add up. The total is off from the line items. So it doesn't guess. It posts to Slack with the PDF, the fields it read and the reason it stopped, and someone on your team checks it.",
    "Every document gets logged, so nothing goes missing.",
    "If you want this on your own invoices, book a free 30-minute call."
  ]
} as const;

export const how = {
  "eyebrow": "How it works",
  "title": "How I set up AI document processing for your invoices, forms and PDFs",
  "summary": "RZ Automate sets up AI document processing in four steps: a free 30-minute audit of your real documents and where their data ends up, a written plan with a fixed price, a reviewed launch within [BUILD DAYS] days, and weekly monitoring once it's live.",
  "steps": [
    {
      "title": "Free 30-min call and workflow audit",
      "time": "30 minutes",
      "what": "We look at a few of your real documents (invoices, receipts, POs, forms) and follow where their data goes today: QuickBooks, Xero, a spreadsheet or your CRM. I point out which document types are worth automating first and which are too messy to trust to a model yet.",
      "get": "A straight answer on how much typing an automation could take off your plate, and what has to change in your inbox or folders before it can.",
      "you": "Bring 3–5 recent documents and tell me who types them in today and how long it takes."
    },
    {
      "title": "Scoped plan with a fixed price",
      "time": "[PLAN TURNAROUND]",
      "what": "I write down the document types, the fields pulled from each, the validation rules (math check, duplicate check, PO match), what gets entered automatically and what goes to a person for review. It also sets the success criteria: share of fields extracted correctly on a test set of your documents, and time from document received to entry created.",
      "get": "A written plan with one fixed price and a launch date. Keep it even if you don't go ahead.",
      "you": "Confirm the field list. You know which fields your bookkeeper actually needs."
    },
    {
      "title": "Build and launch your first automation",
      "time": "[BUILD DAYS] days",
      "what": "I connect your inbox or folder to your accounting tool or CRM and test extraction on a batch of your past documents. Then it runs live with every entry reviewed for the [TEST PERIOD]. After that, the document types you've approved get entered on their own and low-confidence fields still go to review.",
      "get": "A working document pipeline, test-set accuracy results, a short Loom walkthrough and a one-page runbook covering which fields are extracted, what gets flagged and how to pause it.",
      "you": "Give me access to the inbox or folder and your accounting tool or CRM, share [SAMPLE SIZE] past documents and the field list, review entries during the [TEST PERIOD], and sign off each document type before it runs on its own."
    },
    {
      "title": "Run, monitor and improve",
      "time": "Ongoing, [SUPPORT TERMS]",
      "what": "I watch every run, get alerted when a document fails to parse or an entry doesn't sync, and tune the rules and prompts as new vendors and layouts show up.",
      "get": "[MONITORING REPORT], including a weekly exception report: documents processed, what got flagged and why, and the time from document received to entry created.",
      "you": "Tell me when you add a vendor, a new form or a new document type, or when your chart of accounts changes."
    }
  ],
  "total": "From our first call to your documents being extracted, checked and entered for review: [TOTAL DAYS] days.",
  "microcopy": "Bring a few recent invoices or forms. You'll leave knowing which ones are worth automating first, even if you never hire me."
} as const;

export const scope = {
  "title": "What's included in your invoice and data entry automation",
  "intro": "Here's exactly what you get, what you don't, and the tools it works with.",
  "includedTitle": "Included",
  "excludedTitle": "Not included",
  "worksWithTitle": "Works with",
  "included": [
    "Document intake from the inboxes and shared folders where your invoices, receipts, POs and forms already arrive",
    "Extraction for the document types and fields we agree on up front, like vendor, dates, line items, totals and tax",
    "Validation rules before anything is entered: math checks, duplicate checks, required fields, and PO matching where you use POs",
    "Approved entries into QuickBooks, Xero, your CRM or a sheet as bills or new records. Bill details are reviewed before creation; the system never pays them.",
    "A review queue for low-confidence fields, so a person checks them instead of the system guessing",
    "Automatic renaming and filing of each document into the right folder",
    "Logging and error alerts, so a failed document gets flagged instead of disappearing",
    "Written documentation and a walkthrough video of how it works",
    "You own every account and workflow. Nothing runs on mine.",
    "[SUPPORT TERMS] after launch"
  ],
  "excluded": [
    "Paying bills or moving money. A person reviews bill details before creation and handles payment.",
    "Replacing your accountant, or an AP platform you need for multi-step approval chains. The system feeds the tools you already use.",
    "Regulated records like health data or ID checks for KYC, unless we scope and agree on them first",
    "Guaranteed accuracy on handwriting-heavy documents. Those go to the review queue.",
    "Enterprise volumes of thousands of documents a day. At that scale an enterprise IDP product is likely the better fit.",
    "Software subscriptions and AI or OCR usage fees. These run on your own accounts, so you see every charge."
  ],
  "worksWith": [
    [
      "Intake",
      "Gmail, Outlook, Google Drive, Dropbox, SharePoint, OneDrive, a simple upload form"
    ],
    [
      "Accounting",
      "QuickBooks Online, Xero"
    ],
    [
      "Data",
      "Google Sheets, Excel, Airtable"
    ],
    [
      "CRM",
      "HubSpot, Pipedrive, Salesforce"
    ],
    [
      "Alerts",
      "Slack, email"
    ],
    [
      "AI",
      "Claude or OpenAI vision models, plus OCR where a scan needs it"
    ],
    [
      "Orchestration",
      "n8n"
    ]
  ],
  "closing": "Using something else? If it has an API, I can likely connect it."
} as const;

export const pricing = {
  "eyebrow": "Pricing",
  "title": "What AI document processing costs",
  "intro": "You pay a fixed price for the build, then decide if you want me on maintenance. The AI and OCR usage runs on your own accounts, so you see every cent and I don't mark it up.",
  "columns": [
    "Service",
    "What it covers",
    "Price"
  ],
  "rows": [
    [
      "Build (one-time, fixed)",
      "Document intake from your inbox or folder, AI extraction of the fields you need, validation rules (math check, duplicate check, PO match if you use POs), reviewed bill entries or rows in QuickBooks, Xero, a sheet or your CRM, a review queue for low-confidence fields, error alerts, tested on a set of your real documents before launch",
      "From [DOC PROCESSING PRICE FROM]"
    ],
    [
      "Maintenance (optional, monthly)",
      "Fixes when a tool or API changes, new vendor layouts or document types, extraction and rule tuning, the weekly report on volume, exceptions and time saved",
      "[MONTHLY RANGE]/month, cancel anytime"
    ],
    [
      "Running costs (paid by you, to the provider)",
      "Claude or OpenAI usage (including vision for scans and photos), OCR if your documents need it, plus your n8n plan if you host it in the cloud. Billed to your own accounts, not through me",
      "Typically [API COST RANGE]/month"
    ]
  ],
  "footnote": "The exact build price goes in your written plan before any work starts. It doesn't change unless you add scope.",
  "comparison": "Most extraction and invoice-capture tools charge per document, per page or per seat, so the bill grows every month your volume does. With a custom build you pay once for the workflow, it runs in accounts you own, and your ongoing cost is the AI and OCR usage itself. To be fair: if you only process a handful of documents a month, an off-the-shelf tool can be cheaper. If you process thousands a day, an enterprise IDP product may fit better. I'll tell you which side you're on during the call.",
  "affectsTitle": "What affects the price",
  "affects": [
    [
      "Document types and layouts.",
      "Invoices from five regular vendors cost less than invoices, receipts, POs and contracts from hundreds of senders with different layouts."
    ],
    [
      "Number of fields.",
      "Vendor, date and total is quick. Every line item, tax code, GL account and project code takes more extraction rules and more testing."
    ],
    [
      "Validation complexity.",
      "A math and duplicate check is light. Matching each invoice against a purchase order and a delivery note, with rules for partial matches, adds real work."
    ],
    [
      "Destination systems.",
      "One Google Sheet is the simplest target. Approved bill creation in QuickBooks or Xero plus CRM updates plus files renamed and stored in SharePoint means more connections to build and test."
    ],
    [
      "Monthly volume.",
      "A few hundred documents a month runs on a simple setup. Higher volumes need batching, retry handling and closer monitoring so nothing gets dropped."
    ]
  ],
  "payment": "[PAYMENT TERMS]. Maintenance is billed monthly and you can stop it at any time. Everything stays in your accounts either way.",
  "guarantee": "[GUARANTEE NAME]: if your first automation misses the criteria we wrote down within [GUARANTEE WINDOW], you get the milestone fee back or I fix it free.",
  "microcopy": "Get a fixed quote for your setup. The plan is yours to keep even if you don't hire me.",
  "secondary": "Not sure what to automate first?"
} as const;

export const guarantee = {
  "title": "The [GUARANTEE NAME]: your document system passes the checks we wrote down, or you get your money back",
  "body": [
    "Before I build anything, we write down what \"working\" means for your first automation. Plain checks you can test yourself.",
    "If the first automation doesn't meet those written criteria within [GUARANTEE WINDOW] of kickoff, you choose one of two options: a full refund of the first milestone fee, paid within [REFUND SPEED], or I keep working on it at no charge until it passes."
  ],
  "leadIn": "For document processing, the criteria could look like this:",
  "criteria": [
    "[X]% of fields extracted correctly on a test set of [SAMPLE SIZE] of your real documents.",
    "Every document entered or flagged for review within [TIME] of arriving.",
    "Zero documents lost between inbox and your accounting tool over [PERIOD]."
  ],
  "closing": "Blurry scans and handwriting get flagged for a person, not guessed. They're left out of the accuracy count only if we agree that in the plan.",
  "link": "Read the full [GUARANTEE NAME] terms"
} as const;

export const why = {
  "eyebrow": "Why me",
  "title": "Why hire me for AI document processing instead of buying a tool or outsourcing data entry",
  "cards": [
    [
      "Built around your documents, from inbox to filed",
      "An emailed invoice gets read, checked for math and duplicates, prepared for review before bill creation in QuickBooks or Xero, renamed and filed in Drive. It uses your fields and rules."
    ],
    [
      "You own the workflow and the accounts",
      "It runs in your n8n, with model and OCR usage billed to your own accounts. No per-document markup from me. Leave anytime and it keeps running."
    ],
    [
      "You talk to the engineer, and unclear documents go to a person",
      "I build and maintain it. Every document is validated and logged, failed runs alert me, and low-confidence fields wait in a review queue for your team instead of being guessed."
    ]
  ],
  "buyTitle": "When to buy a tool or outsource instead",
  "buy": "If you mostly push standard receipts and bills into Xero or QuickBooks, Dext or Hubdoc (included with eligible Xero plans) likely covers it for less. Very high volumes or full approval chains fit an AP platform better. If every document needs a judgment call, outsource or hire. A custom build fits mixed documents across several systems.",
  "link": "How an AI automation agency compares with a freelancer"
} as const;

export const faq = {
  "title": "AI document processing FAQ",
  "intro": "Straight answers to what owners ask before they let a system read their invoices and touch their books.",
  "items": [
    {
      "question": "How accurate is AI document processing?",
      "answer": "It depends on your documents, so I measure it on yours before launch. I run [SAMPLE SIZE] of your past invoices or forms through the system and report the share of fields it reads correctly. Totals are math-checked and duplicates caught. Any field the model isn't sure about goes to a person for review instead of into your books."
    },
    {
      "question": "What happens when AI document processing can't read a document or isn't sure?",
      "answer": "It flags it for a person instead of guessing. Low-confidence fields, failed math checks, possible duplicates and unreadable scans land in a review queue, with a Slack or email alert saying what's wrong. You correct or approve it in a minute. The weekly exception report shows what got flagged and why, so I can tune the rules."
    },
    {
      "question": "Will invoice automation pay bills or change anything in my books without approval?",
      "answer": "No. I don't move money, and the system never pays a bill. It prepares bill details for your approval before creating a bill in QuickBooks or Xero. During the [TEST PERIOD] you review every entry. After that, only document types you've signed off run on their own; bill creation still requires approval. It never edits or deletes past entries."
    },
    {
      "question": "Is my financial data secure, and is it used to train AI?",
      "answer": "Your documents aren't used to train AI models. The workflow uses the OpenAI or Anthropic business API on accounts you own, and neither trains on API data by default. Your files are stored in your own tools and pass through n8n and the model API for processing. I get only the access the workflow needs, and you can revoke it. Health records and ID checks stay out of scope."
    },
    {
      "question": "Does invoice processing automation work with QuickBooks and Xero?",
      "answer": "Yes. It prepares the vendor, dates, line items, totals and tax for you to review before creating a bill in QuickBooks Online or Xero. If you track spending in Google Sheets, Excel or Airtable instead, it adds a row there. If your accounting tool isn't listed but has an API, I'll confirm on the free call."
    },
    {
      "question": "What does AI document processing cost to run each month?",
      "answer": "Two parts, on top of the one-time build from [DOC PROCESSING PRICE FROM]. AI model and OCR usage, plus your n8n plan if it's cloud-hosted, typically costs [API COST RANGE] a month, billed to your own accounts. Optional maintenance covers fixes, new vendors and layouts, and the weekly exception report for [MONTHLY RANGE] a month, cancel anytime."
    }
  ],
  "closing": "Not sure how it would handle your paperwork? Bring 3–5 recent invoices or forms to the call and I'll show you what it would pull from each one and what it would flag."
} as const;

export const book = {
  "title": "Let's look at the documents you're typing in by hand",
  "subhead": "A free 30-min call with me, the engineer who builds it. Bring 3–5 real documents, like invoices, receipts or order forms, and we'll check which fields can be read reliably and where they should go.",
  "bullets": [
    "We go through your own documents, not a generic demo, and see which fields AI can read reliably.",
    "You leave knowing what to automate first and what should stay manual.",
    "You keep the plan either way. Use it with me, someone else, or on your own."
  ],
  "next": "After the call, I send you the written plan within [PLAN TURNAROUND].",
  "capacity": "I take on [N] builds a month. Next opening is [MONTH].",
  "email": "Rather not get on a call? Email me at contact@rizon.agency with 2–3 sample documents, sensitive details blacked out, and tell me where the data goes today.",
  "relatedTitle": "Related services",
  "related": [
    {
      "title": "Business process automation",
      "href": "/services/business-process-automation",
      "body": "Onboarding, approvals, reports and handoffs between your tools moved into n8n workflows that run themselves."
    },
    {
      "title": "AI lead generation & CRM automation",
      "href": "/services/ai-lead-generation",
      "body": "New leads researched, scored and added to your CRM, with first follow-ups drafted for you."
    },
    {
      "title": "AI agent development",
      "href": "/services/ai-agent-development",
      "body": "Custom AI agents for jobs outside support and sales, connected to your tools and data."
    }
  ]
} as const;

export const seo = {
  "title": "AI Document Processing for Invoices & Forms",
  "description": "AI document processing for small businesses: invoices, receipts, POs and forms read and entered in QuickBooks, Xero, your CRM or sheets. Unclear? Flagged.",
  "socialTitle": "AI Document Processing for Invoices & Forms",
  "openGraphDescription": "Invoices, receipts, POs and forms read and entered in QuickBooks, Xero, your CRM or sheets, with anything unclear flagged for a person. Built by an engineer.",
  "serviceName": "AI document processing",
  "alternateNames": [
    "Intelligent document processing (IDP)",
    "Invoice processing automation",
    "Data entry automation"
  ],
  "serviceDescription": "Custom systems that read invoices, receipts and POs, enter approved data in QuickBooks, Xero, a CRM or sheets, and flag anything unclear for a person.",
  "imageAlt": "AI document processing for invoices and forms by RZ Automate",
  "twitterDescription": "Invoices, receipts, POs and forms read and entered in QuickBooks, Xero, your CRM or sheets, with anything unclear flagged for a person. Built by an engineer."
} as const;
