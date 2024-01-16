import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AssetShape } from "@/components/asset-shape";
import { Marquee } from "@/components/ui/marquee";

import { Underline } from "./underline";

export const Hero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-yellow-100 to-brand-accent/15 p-4 pb-0 pt-12">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-6">
          <h1 className="mx-auto max-w-prose text-balance text-center font-serif text-3xl font-bold md:text-6xl">
            Meet your{" "}
            <div className="relative inline">
              <span className="italic  text-brand-accent">all-in-one</span>
              <div className="absolute -bottom-2 right-0 md:-bottom-6">
                <Underline />
              </div>
            </div>
            <br />
            digital banking app
          </h1>

          <p className=" mx-auto max-w-prose text-balance text-center font-medium md:text-lg">
            Get your salary on time and make payments effortlessly. Online,
            offline, on-the-go, or on delivery—send money home anytime,
            anywhere, in any currency.
          </p>
          <Button variant="brand" size="lg">
            Join now – <span className="italic">it&apos;s free</span>
          </Button>

          <div className="relative mt-12 h-[264px] w-full max-w-[373px] md:h-[500px] md:max-w-none">
            <Image
              fill
              src="/desktop-hero-image.png"
              alt="C-Wallet mock up"
              className="hidden object-cover object-top md:inline"
              priority
              sizes="100vw"
            />
            <Image
              fill
              src="/mobile-hero-image.png"
              alt="C-Wallet mock up"
              className="object-cover object-top md:hidden"
              priority
              sizes="100vw"
            />
          </div>

          <AssetShape
            imageSrc="/assets/star.svg"
            className="-left-2 top-2 md:left-12 md:top-12"
          />
          <AssetShape
            imageSrc="/assets/star.svg"
            className="bottom-24 right-4"
          />
          <AssetShape
            imageSrc="/assets/diamond.svg"
            className="bottom-12 left-4"
          />
        </div>
      </div>
      <div className="bg-neutral-50">
        <Marquee className="mx-auto w-full max-w-7xl justify-between" fade>
          {companies.map((company) => (
            <div key={company.src}>
              <Image
                src={company.src}
                alt="Image"
                width={company.width}
                height={company.height}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

const companies = [
  {
    width: 140,
    height: 40,
    src: "/logo-bkn.png",
  },
  {
    width: 250,
    height: 32,
    src: "/logo-nymcard.png",
  },
  {
    width: 157,
    height: 60,
    src: "/logo-pci.png",
  },
  {
    width: 203,
    height: 75,
    src: "/logo-qcb.png",
  },
];

// const companies = [
//   {
//     Company: () => {
//       return <Image src={bkn} width={140} height={40} alt="" />;
//     },
//   },
//   {
//     Company: () => {
//       return <Image src={nymcard} width={250} height={32.69} alt="" />;
//     },
//   },
//   {
//     Company: () => {
//       return <Image src={pci} width={157} height={60} alt="" />;
//     },
//   },
//   {
//     Company: () => {
//       return <Image src={qcb} width={203} height={75} alt="" />;
//     },
//   },
// ];
