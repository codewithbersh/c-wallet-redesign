import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export const navRoutes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "Contact",
  },
];

export const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-[72px] w-full border-b bg-background p-4 shadow-sm">
      <div className=" mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand p-1">
            <Logo />
          </div>
          <div className="font-extrabold">CWallet</div>
        </div>

        <div className="md:hidden">
          <MobileNav>
            <Button size="icon" variant="brand">
              <Menu className="h-6 w-6" strokeWidth="3" />
            </Button>
          </MobileNav>
        </div>

        <div className="hidden md:inline">
          <DesktopNav />
        </div>
      </div>
    </div>
  );
};
