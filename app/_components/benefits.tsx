"use client";

import { FcLock } from "react-icons/fc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = [
  {
    value: "security",
    icon: FcLock,
    label: "Top notch security",
    content:
      "Lorem ipsum dolor sit amet consectur lorem ipsum dolor sit amet consectur lorem ipsum.",
  },
  {
    value: "cs",
    icon: FcLock,
    label: "Top notch security",
    content: "LAs",
  },
  {
    value: "bd",
    icon: FcLock,
    label: "Top notch security",
    content: "LAs",
  },
];

export const Benefits = () => {
  return (
    <div className="p-4">
      <Tabs defaultValue="security" className="mx-auto flex max-w-7xl gap-8">
        <TabsList className="flex w-full flex-col gap-4 lg:max-w-lg">
          {benefits.map((benefit) => (
            <TabsTrigger
              value={benefit.value}
              key={benefit.value}
              asChild
              className="mx-auto w-full lg:cursor-pointer lg:data-[state=active]:bg-yellow-50"
            >
              <div className="flex w-full flex-col !items-start !justify-start gap-4 rounded-lg border border-border/25 !p-8 text-start shadow-md lg:hover:shadow-none">
                <FcLock className="h-8 w-8" />
                <h1 className="font-bold">Top notch</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate corrupti itaque.
                </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative z-20 mx-auto hidden max-w-[500px]   lg:flex lg:flex-1">
          <div className="absolute -bottom-6 -right-4 -z-10  h-full w-full rounded-lg  bg-yellow-300" />
          {benefits.map((benefit) => (
            <TabsContent
              key={benefit.value}
              value={benefit.value}
              className="z-50 h-full w-full rounded-lg bg-yellow-50 p-4"
            >
              {benefit.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
