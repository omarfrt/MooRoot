import React from "react";

function Torus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="429"
      height="429"
      fill="none"
      viewBox="0 0 429 429"
    >
      <path
        fill={props.color}
        fillOpacity="0.3"
        fillRule="evenodd"
        d="M214.5 429C332.965 429 429 332.965 429 214.5S332.965 0 214.5 0 0 96.035 0 214.5 96.035 429 214.5 429zm0-97c64.893 0 117.5-52.607 117.5-117.5S279.393 97 214.5 97 97 149.607 97 214.5 149.607 332 214.5 332z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Torus;