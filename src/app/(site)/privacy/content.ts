import { site } from "@/lib/site";

// DRAFT: placeholder text. Have a lawyer review before launch.
const sections = [
  {
    heading: "Information we collect",
    body: "We collect the information you give us, such as your name, email address, company and message when you contact us, along with basic usage data about how you use this website.",
  },
  {
    heading: "How we use it",
    body: "We use your information to respond to enquiries, provide and improve our services, and keep this website secure. We do not sell your personal information.",
  },
  {
    heading: "Sharing",
    body: "We share information only with service providers who help us run our business, such as hosting and email tools, and when required by law.",
  },
  {
    heading: "Retention",
    body: "We keep personal information only as long as needed for the purposes described here or as required by law.",
  },
  {
    heading: "Your rights",
    body: "Depending on where you live, you may have the right to access, correct or delete your personal information. Contact us to make a request.",
  },
  {
    heading: "Contact",
    body: `Questions about this policy can be sent to ${site.email}.`,
  },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  updated: "October 2026",
  sections,
};
