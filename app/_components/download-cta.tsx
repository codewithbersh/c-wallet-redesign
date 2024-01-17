import { Button } from "@/components/ui/button";
import AppleIcon from "@/public/assets/apple-icon";
import PlaystoreIcon from "@/public/assets/playstore-icon";
import Image from "next/image";

export const DownloadCta = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <div className="p-4">
      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col items-center justify-center rounded-xl bg-gradient-to-b from-yellow-200 to-yellow-200/25 p-8 md:flex-row  md:items-center md:justify-start">
        <div className="absolute left-1/2 top-0 max-w-[200px] -translate-x-1/2 -translate-y-[50px] md:hidden ">
          <Image
            width={396}
            height={412}
            className="object-cover"
            src="/prepaid-cards.png"
            alt="Prepaid cards"
          />
        </div>

        <div className="space-y-4 pt-24 md:pt-0">
          <h1 className="text-balance text-center text-xl font-bold md:text-start md:text-2xl">
            Get your own CWALLET <br className="hidden md:inline" /> Prepaid
            Card
          </h1>
          <p className=" text-balance text-center font-medium md:text-start">
            Suspendisse eget malesuada ipsum.{" "}
            <br className="hidden md:inline" /> Quisque quis suscipit massa.
          </p>
          <div className="flex items-center justify-center gap-4  md:items-start md:justify-start">
            <Button size="lg" className="px-4">
              <AppleIcon className="mr-4" />
              Get on App Store
            </Button>
            <Button size="lg" className="px-4">
              <PlaystoreIcon className="mr-4" />
              Get on Play Store
            </Button>
          </div>
        </div>
        <div className="relative hidden  flex-1 md:inline">
          <Image
            width={500}
            height={300}
            className="object-cover"
            src="/prepaid-cards-md.png"
            alt="Prepaid Cards"
          />
        </div>
      </div>
    </div>
  );
};
