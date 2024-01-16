import Image from "next/image";

import { cn } from "@/lib/utils";

interface AssetShapeProps {
  imageSrc: string;
  className: string;
}

export const AssetShape = ({ imageSrc, className }: AssetShapeProps) => {
  return (
    <div className={cn("absolute h-12 w-12", className)}>
      <Image fill alt="shape" className="object-cover " src={imageSrc} />
    </div>
  );
};
