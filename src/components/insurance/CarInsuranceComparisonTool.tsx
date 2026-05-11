import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  DollarSign,
  Info,
  MapPin,
  Scale,
  Shield,
  User,
} from "lucide-react";

type State = "QLD" | "NSW" | "VIC" | "Other";
type DriverType = "under-25" | "25-60" | "over-60";
type Priority = "budget" | "balanced" | "premium";

type Answers = {
  state?: State;
  driverType?: DriverType;
  priority?: Priority;
};

type ToolEvent =
  | { type: "tool_started" }
  | { type: "step_completed"; step: 1 | 2; data: Answers }
  | { type: "result_clicked"; resultKey: Priority; href: string }
  | { type: "cta_clicked"; ctaKey: string; href: string };

const track = (event: ToolEvent) => {
  if (typeof window === "undefined") return;
  if (import.meta.env.DEV) console.debug("[CarInsuranceComparisonTool]", event);
};

const STATES: { value: State; label: string }[] = [
  { value: "QLD", label: "QLD" },
  { value: "NSW", label: "NSW" },
  { value: "VIC", label: "VIC" },
  { value: "Other", label: "Other" },
];

const DRIVER_TYPES: { value: DriverType; label: string }[] = [
  { value: "under-25", label: "Under 25" },
  { value: "25-60", label: "25–60" },
  { value: "over-60", label: "Over 60" },
];

const PRIORITIES: {
  value: Priority;
  title: string;
  icon: typeof DollarSign;
  description: string;
}[] = [
  {
    value: "budget",
    title: "Cheapest possible",
    icon: DollarSign,
    description: "You want to keep premiums low.",
  },
  {
    value: "balanced",
    title: "Balanced cover",
    icon: Scale,
    description: "You want a mix of price and protection.",
  },
  {
    value: "premium",
    title: "Maximum protection",
    icon: Shield,
    description: "You want stronger cover and more peace of mind.",
  },
];

type Result = {
  key: Priority;
  title: string;
  label: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
};

const RESULTS: Result[] = [
  {
    key: "budget",
    title: "Budget-friendly cover",
    label: "Good for lower premiums",
    description:
      "If keeping costs down is your main goal, compare cheaper car insurance options and look closely at excess, exclusions and what is not covered.",
    bullets: [
      "Lower premium focus",
      "May involve higher excess",
      "Check exclusions carefully",
    ],
    ctaLabel: "See budget-friendly providers",
    href: "/reviews/budget-friendly/",
  },
  {
    key: "balanced",
    title: "Balanced cover",
    label: "Good middle-ground option",
    description:
      "If you want a mix of value and protection, compare comprehensive policies with flexible excess, add-ons and repair options.",
    bullets: [
      "Balance of cost and cover",
      "Useful for everyday drivers",
      "Compare add-ons carefully",
    ],
    ctaLabel: "See balanced providers",
    href: "/reviews/balanced/",
  },
  {
    key: "premium",
    title: "Comprehensive protection",
    label: "Broader cover",
    description:
      "If stronger protection matters most, comprehensive car insurance may be worth comparing, especially if your vehicle would be expensive to repair or replace.",
    bullets: [
      "Broader protection",
      "Optional extras may be available",
      "Usually higher premiums",
    ],
    ctaLabel: "See providers offering broader cover",
    href: "/reviews/broader-cover/",
  },
];

const ProgressIndicator = ({ step }: { step: 1 | 2 | 3 }) => (
  <div className="flex items-center gap-3 mb-8" aria-label={`Step ${step} of 3`}>
    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
      Step {step} of 3
    </span>
    <div className="flex-1 flex gap-1.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
            i <= step ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </div>
  </div>
);

type SelectableProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const Selectable = ({
  selected,
  onClick,
  children,
  className = "",
  ariaLabel,
}: SelectableProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    aria-label={ariaLabel}
    className={`group text-left rounded-lg border-2 p-5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
      selected
        ? "border-primary bg-primary/5 shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.4)]"
        : "border-border bg-card hover:border-primary/50 hover:-translate-y-0.5"
    } ${className}`}
  >
    {children}
  </button>
);

export const CarInsuranceComparisonTool = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [started, setStarted] = useState(false);

  const fireStarted = () => {
    if (started) return;
    setStarted(true);
    track({ type: "tool_started" });
  };

  const goToStep2 = () => {
    if (!answers.state || !answers.driverType) return;
    track({ type: "step_completed", step: 1, data: answers });
    setStep(2);
  };

  const goToStep3 = () => {
    if (!answers.priority) return;
    track({ type: "step_completed", step: 2, data: answers });
    setStep(3);
  };

  const goBack = (target: 1 | 2) => setStep(target);

  const restart = () => {
    setStep(1);
    setAnswers({});
    setStarted(false);
  };

  const handleResultClick = (result: Result) => {
    track({ type: "result_clicked", resultKey: result.key, href: result.href });
  };

  const handleCtaClick = (ctaKey: string, href: string) => {
    track({ type: "cta_clicked", ctaKey, href });
  };

  return (
    <section
      aria-label="Car insurance comparison tool"
      className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_-30px_hsl(160_30%_10%/0.18)]"
      onFocus={fireStarted}
      onClick={fireStarted}
    >
      <ProgressIndicator step={step} />

      {/* STEP 1, Location + driver */}
      {step === 1 && (
        <div key="step-1" className="animate-fade-in">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
            Let's narrow down your car insurance options
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Answer a few quick questions and we'll point you toward the cover types worth comparing.
          </p>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-primary" />
              <h3 className="font-sans font-extrabold text-base tracking-tight">
                Where do you live?
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATES.map((s) => (
                <Selectable
                  key={s.value}
                  selected={answers.state === s.value}
                  onClick={() => setAnswers((a) => ({ ...a, state: s.value }))}
                  ariaLabel={`Select ${s.label}`}
                  className="text-center"
                >
                  <div className="font-sans font-extrabold text-lg tracking-tight">
                    {s.label}
                  </div>
                </Selectable>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <User size={16} className="text-primary" />
              <h3 className="font-sans font-extrabold text-base tracking-tight">
                Driver type
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DRIVER_TYPES.map((d) => (
                <Selectable
                  key={d.value}
                  selected={answers.driverType === d.value}
                  onClick={() => setAnswers((a) => ({ ...a, driverType: d.value }))}
                  ariaLabel={`Select ${d.label}`}
                  className="text-center"
                >
                  <div className="font-sans font-extrabold text-lg tracking-tight">
                    {d.label}
                  </div>
                </Selectable>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={goToStep2}
              disabled={!answers.state || !answers.driverType}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight size={16} className="transition-transform group-enabled:group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2, Cover preference */}
      {step === 2 && (
        <div key="step-2" className="animate-fade-in">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
            What matters most to you?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Choose your priority, we'll point you to the cover types worth comparing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {PRIORITIES.map((p) => {
              const Icon = p.icon;
              const isSelected = answers.priority === p.value;
              return (
                <Selectable
                  key={p.value}
                  selected={isSelected}
                  onClick={() => setAnswers((a) => ({ ...a, priority: p.value }))}
                  ariaLabel={`Select ${p.title}`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="font-sans font-extrabold text-lg tracking-tight mb-1">
                    {p.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </Selectable>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => goBack(1)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              type="button"
              onClick={goToStep3}
              disabled={!answers.priority}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              See my options
              <ArrowRight size={16} className="transition-transform group-enabled:group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3, Results */}
      {step === 3 && (
        <div key="step-3" className="animate-fade-in">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
            Your car insurance comparison directions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Based on your answers, these options may be worth comparing. General information only,
            not financial advice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {RESULTS.map((r) => {
              const isMatch = answers.priority === r.key;
              return (
                <article
                  key={r.key}
                  className={`relative rounded-xl border bg-card p-6 flex flex-col transition-all duration-300 ${
                    isMatch
                      ? "border-primary border-2 shadow-[0_24px_60px_-30px_hsl(160_30%_10%/0.35)] md:-translate-y-1"
                      : "border-border opacity-95"
                  }`}
                >
                  {isMatch && (
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full uppercase tracking-[0.15em]">
                      Matches your priority
                    </div>
                  )}

                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    {r.label}
                  </div>
                  <h3 className="font-sans font-extrabold text-xl tracking-tight mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {r.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={r.href}
                    onClick={() => handleResultClick(r)}
                    className={`group mt-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition ${
                      isMatch
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-foreground hover:bg-muted"
                    }`}
                  >
                    {r.ctaLabel}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Conditional info boxes */}
          <div className="space-y-3 mb-8">
            {answers.driverType === "under-25" && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    Young drivers often face higher premiums. You may also want to read our guide
                    to car insurance for young drivers.
                  </p>
                </div>
                <Link
                  to="/car-insurance/young-drivers/"
                  onClick={() => handleCtaClick("young-driver-guide", "/car-insurance/young-drivers/")}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shrink-0"
                >
                  Young driver guide
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {answers.state === "NSW" && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-secondary border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    NSW drivers should also understand CTP / green slip requirements.
                  </p>
                </div>
                <Link
                  to="/car-insurance/ctp/"
                  onClick={() => handleCtaClick("nsw-ctp", "/car-insurance/ctp/")}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shrink-0"
                >
                  Learn about CTP
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {answers.state === "QLD" && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-secondary border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    QLD drivers should compare cover carefully based on where they live, how the
                    car is used and weather-related risk.
                  </p>
                </div>
                <Link
                  to="/car-insurance/qld/"
                  onClick={() => handleCtaClick("qld-info", "/car-insurance/qld/")}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition shrink-0"
                >
                  Car insurance QLD
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={() => goBack(2)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              type="button"
              onClick={restart}
              className="text-sm text-primary hover:underline"
            >
              Start over
            </button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-5">
            CoverScout provides general information only and does not take your personal
            circumstances into account. Always read the Product Disclosure Statement (PDS) and
            Target Market Determination (TMD) before deciding whether a product is suitable.
          </p>
        </div>
      )}
    </section>
  );
};

export default CarInsuranceComparisonTool;
