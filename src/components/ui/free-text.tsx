const pattern = /\b(no[- ]commitment|free)\b/gi;

export const FreeText = ({ children }: { children: string }) =>
  children.split(pattern).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-primary">
        {part}
      </span>
    ) : (
      part
    ),
  );
