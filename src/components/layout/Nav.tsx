import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { PRIMARY_NAV } from "@/lib/site";

export const Nav = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/car-insurance/compare/"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Compare car insurance
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-foreground"
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-2xl bg-card border-0 p-0 transition-transform duration-300 [&>button]:hidden"
          >
            <div className="w-10 h-1 rounded-full bg-border mx-auto mt-3 mb-4" />
            <SheetClose
              aria-label="Close menu"
              className="absolute right-4 top-4 inline-flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground transition"
            >
              <X size={20} />
            </SheetClose>
            <nav className="flex flex-col">
              {PRIMARY_NAV.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link to={item.to} className="py-4 px-6 text-base font-medium border-b border-border">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="p-6">
              <SheetClose asChild>
                <Link
                  to="/car-insurance/compare/"
                  className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-4 rounded-md text-base font-medium hover:opacity-90 transition"
                >
                  Compare car insurance
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
