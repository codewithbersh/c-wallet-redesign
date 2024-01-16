import Link from "next/link";
import { Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";

import { navRoutes } from "./header";

export const DesktopNav = () => {
  return (
    <div className="flex items-center gap-4">
      {navRoutes.map((route) => (
        <Button asChild variant="ghost" key={route.href}>
          <Link href={route.href}>{route.label}</Link>
        </Button>
      ))}
      <Button asChild variant="brand">
        <Link href="/">
          <Smartphone className="mr-2 h-4 w-4" />
          Download app
        </Link>
      </Button>
    </div>
  );
};
