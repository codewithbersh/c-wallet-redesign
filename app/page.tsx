import { Benefits } from "./_components/benefits";
import { DownloadCta } from "./_components/download-cta";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <DownloadCta />
    </div>
  );
};

export default HomePage;
