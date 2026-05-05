import { DISCLAIMER_BLOCK_TEXT } from "@/lib/site";

type Props = {
  /** Override the default disclaimer copy if needed. */
  text?: string;
  className?: string;
};

export const DisclaimerBlock = ({ text = DISCLAIMER_BLOCK_TEXT, className = "" }: Props) => {
  return (
    <aside
      role="note"
      className={`bg-card border border-border rounded-lg p-5 text-sm text-muted-foreground leading-relaxed ${className}`}
    >
      {text}
    </aside>
  );
};
