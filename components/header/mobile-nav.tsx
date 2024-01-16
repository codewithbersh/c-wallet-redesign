import Link from "next/link";
import { Smartphone } from "lucide-react";

import { navRoutes } from "./header";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileNavProps {
  children: React.ReactNode;
}

export const MobileNav = ({ children }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand p-1">
            <Logo />
          </div>
          <div className="font-extrabold">CWallet</div>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          {navRoutes.map((route) => (
            <Button
              asChild
              variant="ghost"
              className="justify-start"
              key={route.href}
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
          <Button asChild variant="brand" className="justify-start">
            <Link href="/">
              <Smartphone className="mr-2 h-4 w-4" />
              Download app
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
