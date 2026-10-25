import { site } from "@/lib/site";

// DRAFT: placeholder text. Have a lawyer review before launch.
const sections = [
  {
    heading: "Acceptance",
    body: `By using this website or engaging ${site.name}, you agree to these terms.`,
  },
  {
    heading: "Services",
    body: "The scope, deliverables, timeline and fees for each project are set out in a separate written proposal or agreement, which takes priority over these terms.",
  },
  {
    heading: "Intellectual property",
    body: "Unless an agreement says otherwise, you own the deliverables created for you once they are paid for. We keep ownership of our pre-existing tools and know-how.",
  },
  {
    heading: "Confidentiality",
    body: "Each party will keep the other's confidential information private and use it only for the project.",
  },
  {
    heading: "Liability",
    body: "To the extent permitted by law, we are not liable for indirect or consequential losses, and our total liability is limited to the fees paid for the relevant project.",
  },
  {
    heading: "Contact",
    body: `Questions about these terms can be sent to ${site.email}.`,
  },
];

export const termsOfService = {
  title: "Terms of Service",
  updated: "October 2026",
  sections,
};
