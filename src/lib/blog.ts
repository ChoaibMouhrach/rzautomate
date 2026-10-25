export interface Author {
  name: string;
  title: string;
  image: string;
}

export const authors = {
  choaib: {
    name: "Choaib Mouhrach",
    title: "Founder",
    image: "/authors/choaib.png",
  },
} satisfies Record<string, Author>;

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  author: Author;
  image: string;
  imageAlt: string;
  body: readonly PostBlock[];
}

export type HeadingLevel = 2 | 3 | 4;

export interface PostBlock {
  heading?: string;
  level?: HeadingLevel;
  text: string;
}

export const posts: readonly Post[] = [
  {
    slug: "where-to-start-with-ai-automation",
    title: "Where to start with AI automation in your business",
    excerpt:
      "Most teams try to automate everything at once. Here is a simple way to pick the first workflow worth automating, and what to leave alone.",
    category: "Strategy",
    date: "2026-10-20",
    readingMinutes: 6,
    author: authors.choaib,
    image: "/blog/where-to-start-with-ai-automation.svg",
    imageAlt: "Three connected steps in an automated workflow",
    body: [
      {
        text: "Most teams that struggle with automation do not have a tooling problem. They try to automate everything at once, or they pick a workflow that is rare, messy or politically sensitive. A good first project is the opposite: frequent, boring and well understood.",
      },
      {
        heading: "Look for repetition",
        text: "List the tasks your team repeats every day or week: copying data between tools, triaging inboxes, chasing approvals, sending the same follow-up. Frequency matters more than size, because a small task done fifty times a week adds up quickly.",
      },
      {
        heading: "Daily and weekly tasks",
        level: 3,
        text: "Daily tasks such as inbox triage and data entry are the easiest wins: they are frequent, and mistakes are cheap to catch. Start the list there.",
      },
      {
        heading: "Hand-offs between tools",
        level: 4,
        text: "Anywhere a person copies information from one system into another is a hand-off. These are rarely documented, so ask the people doing the work rather than their managers.",
      },
      {
        heading: "Weekly and monthly tasks",
        level: 3,
        text: "Reporting, invoicing and reconciliation run less often but take hours each time. They are a good second wave once the first workflow has proven itself.",
      },
      {
        heading: "Check the rules are clear",
        text: "If a new hire could do the task from a short checklist, a workflow can too. If the answer is always it depends, keep a human in charge and use automation only to prepare the information they need.",
      },
      {
        heading: "Start small and measure",
        text: "Pick one workflow, ship a first version in a couple of weeks, and measure the hours saved. A visible win builds the trust you need to automate the next, more ambitious process.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getPostHeadings = (post: Post) =>
  post.body.flatMap((block) =>
    block.heading
      ? [
          {
            id: slugify(block.heading),
            label: block.heading,
            level: block.level ?? 2,
          },
        ]
      : [],
  );
