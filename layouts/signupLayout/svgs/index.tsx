import React from "react";

export const Triangle = () => (
  <svg
    width="79"
    height="96"
    viewBox="0 0 79 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      left: 0,
      top: 0,
    }}
  >
    <path
      opacity="0.1"
      d="M79 96L-46 -4.63768L57.1599 -32L79 96Z"
      fill="url(#paint0_linear_1_89)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_89"
        x1="-19.9777"
        y1="2.7826"
        x2="78.8351"
        y2="87.381"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const Elipse = () => (
  <svg
    width="78"
    height="78"
    viewBox="0 0 78 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      right: "220px",
      top: "200px",
    }}
  >
    <circle opacity="0.1" cx="39" cy="39" r="39" fill="white" />
  </svg>
);

export const Dashes = () => (
  <svg
    width="94"
    height="5"
    viewBox="0 0 94 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect opacity="0.15" x="47" width="20" height="5" rx="2.5" fill="white" />
    <rect opacity="0.15" x="74" width="20" height="5" rx="2.5" fill="white" />
    <rect width="40" height="5" rx="2.5" fill="white" />
  </svg>
);
