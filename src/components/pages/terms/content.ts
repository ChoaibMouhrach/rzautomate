import type { LegalSection } from "@/components/site/legal-page";
import { company, site } from "@/lib/site";

// DRAFT: adapted from the Rizon LMS terms for RZ Automate. Check the business terms and have a lawyer review before launch.
const sections: LegalSection[] = [
  {
    heading: "Overview",
    blocks: [
      { paragraph: `These Terms and Services (“Terms”) govern all engagements between ${company.legalName}, doing business as ${site.name} (“${site.name}”, “we”, “us”), and our clients (“Client”, “you”). By engaging ${site.name} for any services, you agree to these Terms in full.` },
      { paragraph: `${company.legalName} is a Wyoming limited liability company. ${site.name} designs, builds and maintains AI agents and automated workflows for businesses.` },
    ],
  },
  {
    heading: "Services",
    blocks: [
      { paragraph: `${site.name} provides AI automation services on a project basis. All work is scoped, agreed upon, and delivered according to a written proposal or statement of work (“SOW”) signed by both parties prior to engagement.` },
      { paragraph: "Services may include but are not limited to:" },
      {
        list: [
          "AI agent development",
          "AI customer support agents",
          "AI document processing",
          "AI lead generation and CRM automation",
          "Workflow design and builds in tools such as n8n, Make and Zapier",
          "Automation monitoring, maintenance and updates (where agreed)",
        ],
      },
    ],
  },
  {
    heading: "Proposals and Statements of Work",
    blocks: [
      { paragraph: "Each project begins with a written proposal or SOW outlining scope, deliverables, timeline, and payment terms. The SOW takes precedence over these Terms in the event of a conflict specific to the project." },
      { paragraph: "Any changes to scope must be agreed upon in writing and may result in revised timelines and additional fees." },
    ],
  },
  {
    heading: "Payment Terms",
    blocks: [
      { subheading: "4.1 Invoicing" },
      { paragraph: "Payment schedules are defined in each SOW. Standard arrangements include a deposit prior to work beginning, with remaining payments tied to project milestones or delivery. Recurring services, such as maintenance, are billed as set out in the SOW." },
      { subheading: "4.2 Late Payments" },
      { paragraph: `Invoices unpaid beyond 14 days of the due date may result in a pause of work. ${site.name} reserves the right to charge a late fee of 1.5% per month on overdue balances.` },
      { subheading: "4.3 Currency" },
      { paragraph: "All invoices are issued in USD unless otherwise agreed in writing." },
      { subheading: "4.4 Third-Party Costs" },
      { paragraph: "Subscriptions and usage fees charged by third-party platforms and AI model providers (for example n8n, Make, Zapier, OpenAI, Anthropic and Google) are separate from our fees. The Client is responsible for them unless the SOW says otherwise." },
      { subheading: "4.5 Refunds" },
      { paragraph: `Due to the custom nature of our work, deposits and milestone payments are non-refundable once work on that phase has begun. If ${site.name} is unable to complete a project due to circumstances on our end, any work not yet started will be refunded in full.` },
    ],
  },
  {
    heading: "Intellectual Property and Ownership",
    blocks: [
      { paragraph: `Upon receipt of full payment for a project, the Client owns the custom workflows, agent configurations, prompts, code, designs and other deliverables produced by ${site.name} for that engagement. ${site.name} transfers all relevant intellectual property rights to the Client at that time.` },
      { paragraph: `${site.name} retains the right to:` },
      {
        list: [
          "Reference the project in its portfolio and marketing materials (without disclosing confidential business information)",
          "Reuse general methodologies, patterns, templates, and non-client-specific know-how developed during the engagement",
        ],
      },
      { paragraph: `Third-party platforms, libraries, frameworks, AI models and open-source components used in the build remain subject to their respective licenses and terms. ${site.name} will disclose all such dependencies upon request.` },
    ],
  },
  {
    heading: "Confidentiality",
    blocks: [
      { paragraph: "Both parties agree to keep confidential any non-public information shared during the engagement, including business logic, customer data, pricing, and internal systems. This obligation survives the end of the project." },
      { paragraph: `${site.name} will not sell, share, or disclose Client data to third parties except as required by law or as necessary to perform the services (for example hosting providers, automation platforms, AI model providers and other third-party APIs the Client has approved).` },
    ],
  },
  {
    heading: "Client Responsibilities",
    blocks: [
      { paragraph: "The Client agrees to:" },
      {
        list: [
          "Provide timely access to necessary systems, credentials, and stakeholders",
          "Review and provide feedback on deliverables within the timeframes outlined in the SOW",
          "Review the outputs of AI agents and automations, and keep a person in the loop for decisions that matter",
          "Ensure that any content, data, or materials provided to us do not infringe third-party rights and may lawfully be processed by the agreed tools",
        ],
      },
      { paragraph: `Delays caused by the Client may result in revised project timelines. ${site.name} is not liable for delays attributable to the Client’s failure to provide required inputs.` },
    ],
  },
  {
    heading: "Warranties and Representations",
    blocks: [
      { paragraph: `${site.name} warrants that:` },
      {
        list: [
          "Work will be performed professionally and in accordance with the agreed SOW",
          `${site.name} has the right to enter into this agreement and is not bound by any conflicting obligations`,
        ],
      },
      { paragraph: `${site.name} does not warrant that deliverables will be entirely free of bugs or defects at delivery, or that the output of an AI model will always be accurate, complete or suitable for a particular purpose. A post-delivery support period (if included in the SOW) will be used to resolve reported issues at no additional charge.` },
    ],
  },
  {
    heading: "Limitation of Liability",
    blocks: [
      { paragraph: `To the maximum extent permitted by law, ${site.name}’s total liability for any claim arising from or related to these Terms or any project shall not exceed the total fees paid by the Client for the specific project giving rise to the claim.` },
      { paragraph: `${site.name} is not liable for:` },
      {
        list: [
          "Indirect, incidental, or consequential damages",
          "Loss of revenue, data, or business opportunities",
          "Issues arising from third-party services, APIs, AI models, or infrastructure outside our control",
          "Decisions the Client makes based on the output of an AI agent or automation",
        ],
      },
    ],
  },
  {
    heading: "Termination",
    blocks: [
      { paragraph: "Either party may terminate an engagement with 14 days written notice. In the event of termination:" },
      {
        list: [
          "The Client owes payment for all work completed up to the termination date",
          `${site.name} will deliver all completed work product to the Client upon receipt of outstanding payment`,
          "Deposits and milestone payments for work already begun are non-refundable",
        ],
      },
      { paragraph: `${site.name} may terminate immediately and without notice in cases of non-payment beyond 30 days or violation of these Terms.` },
    ],
  },
  {
    heading: "Independent Contractor",
    blocks: [
      { paragraph: `${site.name} operates as an independent contractor. Nothing in these Terms creates an employment, partnership, or joint venture relationship between ${site.name} and the Client.` },
    ],
  },
  {
    heading: "Governing Law and Dispute Resolution",
    blocks: [
      { paragraph: "These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles." },
      { paragraph: "Any disputes arising from these Terms or a project engagement shall first be attempted to be resolved through good-faith negotiation. If unresolved after 30 days, disputes shall be submitted to binding arbitration in Wyoming in accordance with the rules of the American Arbitration Association." },
    ],
  },
  {
    heading: "Changes to These Terms",
    blocks: [
      { paragraph: `${site.name} reserves the right to update these Terms at any time. Updates will be posted on our website with a revised effective date. Continued engagement with ${site.name} after such updates constitutes acceptance of the revised Terms. Active projects in progress are governed by the Terms in effect at the time the SOW was signed.` },
    ],
  },
  {
    heading: "Contact",
    blocks: [
      { paragraph: "For questions regarding these Terms, please contact:" },
      { list: [`${company.legalName}, doing business as ${site.name}`, `${company.address.streetAddress}, ${company.address.addressLocality}, ${company.address.addressRegion} ${company.address.postalCode}`, `Email: ${site.email}`, `Website: ${site.url.replace("https://", "")}`] },
    ],
  },
];

export const termsOfService = {
  title: "Terms and Services",
  updated: "November 14, 2026",
  facts: [
    ["Entity", `${company.legalName} (${site.name})`],
    ["Effective", "November 14, 2026"],
    ["Jurisdiction", "Wyoming, USA"],
  ] as const,
  sections,
};
