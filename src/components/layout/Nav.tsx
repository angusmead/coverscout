import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { PRIMARY_NAV } from "@/lib/site";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container flex items-center justify-between h-[72px]">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[14.5px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          to="/car-insurance/compare/"
          className="hidden md:inline-flex items-center bg-foreground text-background px-[18px] py-[10px] rounded-full text-[14.5px] font-medium hover:bg-foreground/90 transition"
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
                  className="inline-flex items-center justify-center w-full bg-foreground text-background px-4 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition"
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
