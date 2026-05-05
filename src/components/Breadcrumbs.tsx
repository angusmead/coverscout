import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/schema";

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export const Breadcrumbs = ({ items, className = "" }: Props) => {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-muted-foreground ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="text-foreground" aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.url} className="hover:text-primary transition">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight size={14} className="text-border" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
