"use client";

import { FcLock, FcNfcSign, FcIdea } from "react-icons/fc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const benefits = [
  {
    value: "security",
    icon: FcLock,
    label: "Praesent ut purus",
    content: "/transactions-mock-up.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin ut purus sit amet gravida.",
  },
  {
    value: "cs",
    icon: FcNfcSign,
    label: "Lorem ipsum",
    content: "/mobile-hero-image.png",
    description:
      "Aenean diam augue, sagittis eu est at, porta tempor diam. Fusce vestibulum rhoncus convallis.",
  },
  {
    value: "bd",
    icon: FcIdea,
    label: "Dolor sit ament",
    content: "/transactions-mock-up.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt diam eu orci feugiat efficitur. ",
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
                <benefit.icon className="h-8 w-8" />
                <h1 className="font-bold">{benefit.label}</h1>
                <p>{benefit.description}</p>
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
              className="z-50 h-full w-full rounded-lg bg-yellow-50 p-8"
            >
              <div className="relative h-full w-full">
                <Image
                  fill
                  className="object-cover object-center"
                  src={benefit.content}
                  alt="Content"
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};
