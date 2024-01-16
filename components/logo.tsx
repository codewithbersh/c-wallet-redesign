import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-neutral-950", className)}
    >
      <g clipPath="url(#clip0_24_157)">
        <path d="M15.5261 8.51279L11.4498 17.293L10.3798 14.4933C10.3202 14.3306 10.229 14.1814 10.1116 14.0545C9.99419 13.9276 9.85289 13.8254 9.6959 13.7538C9.53892 13.6823 9.36938 13.6429 9.19713 13.6379C9.02489 13.6329 8.85337 13.6624 8.69255 13.7247C8.53172 13.7869 8.3848 13.8808 8.26031 14.0007C8.13581 14.1206 8.03622 14.2642 7.96734 14.4232C7.89846 14.5822 7.86166 14.7533 7.85905 14.9268C7.85645 15.1002 7.88811 15.2724 7.95219 15.4334L11.2177 23.9795L15.7129 14.2947L20.937 23.8667L28.9121 2.34266C28.9743 2.18105 29.0041 2.00861 28.9996 1.83535C28.995 1.66209 28.9564 1.49146 28.8859 1.33335C28.8153 1.17523 28.7143 1.03279 28.5887 0.914289C28.463 0.795783 28.3152 0.703571 28.1539 0.643002C27.9925 0.582433 27.8208 0.554711 27.6488 0.561447C27.4767 0.568183 27.3077 0.609242 27.1515 0.682241C26.9953 0.75524 26.8551 0.858727 26.739 0.986698C26.6228 1.11467 26.5331 1.26458 26.475 1.42772L25.7326 3.4308C23.4049 1.58539 20.611 0.431551 17.6664 0.0994906C14.7217 -0.23257 11.7434 0.270368 9.06764 1.55155C6.39188 2.83273 4.12515 4.84115 2.52325 7.35015C0.921356 9.85915 0.04806 12.7689 0.00192733 15.7509C-0.0442054 18.7329 0.738662 21.6686 2.26217 24.2266C3.78568 26.7846 5.98918 28.863 8.62402 30.2275C11.2589 31.5919 14.2201 32.1879 17.1736 31.9483C20.1272 31.7086 22.9554 30.6429 25.339 28.8714C25.6164 28.6649 25.801 28.3559 25.8521 28.0124C25.9032 27.669 25.8166 27.3192 25.6114 27.04C25.4063 26.7608 25.0993 26.575 24.7581 26.5236C24.4169 26.4722 24.0693 26.5593 23.7919 26.7658C21.7691 28.2684 19.3645 29.163 16.8571 29.3458C14.3496 29.5285 11.842 28.992 9.62524 27.7984C7.40846 26.6048 5.57333 24.8031 4.33272 22.6023C3.09211 20.4014 2.49688 17.8916 2.61607 15.3641C2.73525 12.8365 3.56397 10.3947 5.0061 8.32204C6.44822 6.24935 8.44464 4.63066 10.7638 3.65376C13.0829 2.67686 15.6297 2.38178 18.1087 2.80275C20.5877 3.22372 22.8973 4.3435 24.7696 6.03217L20.4843 17.5966L15.5261 8.51279Z" />
      </g>
      <defs>
        <clipPath id="clip0_24_157">
          <rect width="29" height="32" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
};