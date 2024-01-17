import * as React from "react";

const PlaystoreIcon = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    width={23}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M.854 1.155C.576 1.451.41 1.91.41 2.504v21.231c0 .595.165 1.053.443 1.349l.07.07L12.773 13.26v-.28L.925 1.084l-.071.07Z"
        fill="url(#b)"
      />
      <path
        d="m16.72 17.225-3.947-3.966v-.28l3.949-3.965.089.051 4.679 2.67c1.336.761 1.336 2.008 0 2.772l-4.68 2.668-.09.05Z"
        fill="url(#c)"
      />
      <g filter="url(#d)">
        <path
          d="m16.81 17.174-4.038-4.055L.854 25.084c.44.468 1.168.526 1.988.06l13.969-7.97Z"
          fill="url(#e)"
        />
      </g>
      <path
        d="M16.81 9.064 2.843 1.096C2.022.63 1.294.687.854 1.156L12.773 13.12l4.038-4.056Z"
        fill="url(#f)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={11.722}
        y1={2.279}
        x2={-4.389}
        y2={18.327}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A0FF" />
        <stop offset={0.007} stopColor="#00A1FF" />
        <stop offset={0.26} stopColor="#00BEFF" />
        <stop offset={0.512} stopColor="#00D2FF" />
        <stop offset={0.76} stopColor="#00DFFF" />
        <stop offset={1} stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={23.229}
        y1={13.119}
        x2={0.091}
        y2={13.119}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE000" />
        <stop offset={0.409} stopColor="#FFBD00" />
        <stop offset={0.775} stopColor="orange" />
        <stop offset={1} stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={14.617}
        y1={15.321}
        x2={-7.231}
        y2={37.084}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3A44" />
        <stop offset={1} stopColor="#C31162" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={-2.147}
        y1={-5.912}
        x2={7.609}
        y2={3.806}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32A071" />
        <stop offset={0.069} stopColor="#2DA771" />
        <stop offset={0.476} stopColor="#15CF74" />
        <stop offset={0.801} stopColor="#06E775" />
        <stop offset={1} stopColor="#00F076" />
      </linearGradient>
      <filter
        id="a"
        x={0.411}
        y={0.774}
        width={22.081}
        height={24.692}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-0.144} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect1_innerShadow_23_138" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.144} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend
          in2="effect1_innerShadow_23_138"
          result="effect2_innerShadow_23_138"
        />
      </filter>
      <filter
        id="d"
        x={0.854}
        y={13.119}
        width={15.956}
        height={12.346}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-0.144} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="shape" result="effect1_innerShadow_23_138" />
      </filter>
    </defs>
  </svg>
);

export default PlaystoreIcon;
