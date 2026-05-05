import { Head as Helmet } from "vite-react-ssg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSchema, type FaqItem } from "@/lib/schema";

type Props = {
  items: FaqItem[];
  /** When true, emits FAQPage JSON-LD. Default true. */
  emitSchema?: boolean;
  className?: string;
  heading?: string;
};

export const FAQAccordion = ({ items, emitSchema = true, className = "", heading }: Props) => {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      {emitSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema(items))}</script>
        </Helmet>
      )}
      {heading && (
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-6">{heading}</h2>
      )}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
