import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";

export type GuideCardProps = {
  title: string;
  description?: string;
  category: string;
  readTime: string;
  to: string;
  className?: string;
};

export const GuideCard = ({ title, description, category, readTime, to, className = "" }: GuideCardProps) => {
  return (
    <Link
      to={to}
      className={`group bg-card border border-border rounded-lg p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary">{category}</div>
      </div>
      <h3 className="font-sans font-extrabold text-2xl leading-snug mb-3 group-hover:text-primary transition-colors tracking-tight">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
      )}
      <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <Clock size={14} /> {readTime}
        </span>
        <ArrowUpRight
          size={16}
          className="group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
        />
      </div>
    </Link>
  );
};
