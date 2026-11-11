import { twMerge } from "tailwind-merge";

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <p className={twMerge("text-balance", className)}>
    {text.split(" ").map((word, index) => (
      <span key={index} className="reveal-word inline-block">
        {word}
        {" "}
      </span>
    ))}
  </p>
);
