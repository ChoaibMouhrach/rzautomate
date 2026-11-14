import type { LegalSection } from "@/components/site/legal-page";
import { company, site } from "@/lib/site";

// DRAFT: written from what this site does today. Update it when you add a newsletter, analytics or a new provider, and have a lawyer review before launch.
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    blocks: [
      { paragraph: `${site.name} is operated by ${company.legalName}, a Wyoming limited liability company at ${company.address.streetAddress}, ${company.address.addressLocality}, ${company.address.addressRegion} ${company.address.postalCode}. This policy explains what personal information we collect through ${site.url.replace("https://", "")} and what we do with it.` },
    ],
  },
  {
    heading: "Information we collect",
    blocks: [
      { paragraph: "We collect only what you choose to give us or what your browser sends when you visit:" },
      {
        list: [
          "Booking details. When you book a call, the scheduling tool collects your name, email address, the time you choose, and any notes or answers you add, such as your company website, your CRM or your monthly lead volume.",
          "Email. If you write to us, we keep your message and your email address.",
          "Technical data. Like most websites, our hosting provider processes your IP address and basic request details such as the page requested, browser type and time, to deliver the site and keep it secure.",
          "Your theme choice. If you pick a light or dark theme, your browser stores that choice on your device. It is not sent to us.",
        ],
      },
    ],
  },
  {
    heading: "How we use it",
    blocks: [
      { paragraph: "We use your information to:" },
      {
        list: [
          "Respond to enquiries and run the calls you book",
          "Provide and improve our services",
          "Keep this website secure and working",
        ],
      },
      { paragraph: "We do not sell your personal information, and we do not use it for advertising." },
    ],
  },
  {
    heading: "Service providers",
    blocks: [
      { paragraph: "We share information only with providers who help us run the site and our business, and when the law requires it. These include:" },
      {
        list: [
          "Cal.com, which runs our booking calendar and receives the details you enter when you book",
          "Cloudflare, which hosts this website and delivers it to your browser",
          "Our email provider, which handles the messages we exchange with you",
        ],
      },
      { paragraph: "These providers handle your information under their own privacy policies." },
    ],
  },
  {
    heading: "Cookies and tracking",
    blocks: [
      { paragraph: "This site does not use advertising or analytics trackers. The booking calendar is provided by Cal.com and may set its own cookies when it loads. If we add analytics later, we will update this policy." },
    ],
  },
  {
    heading: "How long we keep it",
    blocks: [
      { paragraph: "We keep booking and email records for as long as we need them to run the relationship and meet our legal and accounting duties. You can ask us to delete your information at any time." },
    ],
  },
  {
    heading: "Your rights",
    blocks: [
      { paragraph: "Depending on where you live, you may have the right to access, correct, delete or export the personal information we hold about you, and to object to how we use it. To make a request, email us at the address below. We will respond within a reasonable time." },
    ],
  },
  {
    heading: "Children",
    blocks: [
      { paragraph: "This website is for businesses and is not directed at children. We do not knowingly collect information from anyone under 16." },
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      { paragraph: "We may update this policy. The date at the top shows when it last changed." },
    ],
  },
  {
    heading: "Contact",
    blocks: [
      { paragraph: `Questions about this policy can be sent to ${site.email}.` },
    ],
  },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  updated: "November 14, 2026",
  sections,
};
