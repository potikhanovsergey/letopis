import { FC } from "react";
import { rem } from "@mantine/core";

import { GradientBoxProps } from "./GradientBox.typings";

export const GradientBox: FC<GradientBoxProps> = ({ size, radius }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={rem(size)}
      height={rem(size)}
      viewBox="0 0 80 80"
      version="1.1"
      style={{
        borderRadius: radius,
      }}
    >
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
          <stop stopColor="#0673f9" offset="0%" />
          <stop stopColor="#f90673" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          fill="url(#g)"
          x="0"
          y="0"
          width="80"
          height="80"
        />
      </g>
    </svg>
  );
};
