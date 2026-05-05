import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/site";

type Props = {
  text?: string;
  className?: string;
};

export const AffiliateDisclosure = ({ text = AFFILIATE_DISCLOSURE_TEXT, className = "" }: Props) => {
  return (
    <p className={`text-xs text-muted-foreground leading-relaxed ${className}`}>{text}</p>
  );
};
