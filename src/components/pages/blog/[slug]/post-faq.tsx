import { Fragment, type ReactNode } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";

const markdownLink = /\[([^\]]+)\]\(([^)]+)\)/g;

const renderAnswer = (answer: string): ReactNode => {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of answer.matchAll(markdownLink)) {
    nodes.push(answer.slice(last, match.index));
    nodes.push(
      <Link key={match.index} href={match[2]!} className="underline">
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  nodes.push(answer.slice(last));
  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
};

export const PostFaq = ({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) => <div className="not-prose my-6">
      <Accordion
        name="post-faq"
        items={items.map((item) => ({
          question: item.question,
          answer: renderAnswer(item.answer),
        }))}
      />
    </div>;
