import React from "react";
import * as T from "../typograhy/Typography";
import "./style.css";

function LoginLogo() {
  return (
    <div className="login-log">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="95"
        height="103"
        viewBox="0 0 95 103"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65.72 35.2194C61.3051 44.4024 51.9151 50.7412 41.0447 50.7412C25.9324 50.7412 13.6815 38.4902 13.6815 23.3779C13.6815 13.4769 18.9401 4.80404 26.8167 0C11.5515 2.86226 0 16.2604 0 32.3565C0 50.5384 14.7394 65.2778 32.9214 65.2778C50.1388 65.2778 64.2691 52.0608 65.72 35.2194Z"
          fill="#1565D8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M79.0933 75.915C71.1335 82.275 59.9242 83.9152 50.1291 79.2021C36.5112 72.6496 30.7836 56.2983 37.3361 42.6804C41.6291 33.7585 50.1281 28.2234 59.3087 27.3096C44.3119 23.2698 28.0933 30.3344 21.1142 44.8389C13.2307 61.2229 20.1217 80.8955 36.5057 88.779C52.0201 96.2441 70.4835 90.4613 79.0933 75.915Z"
          fill="#1565D8"
        />
      </svg>
      <T.LgLogo>Gamers</T.LgLogo>
    </div>
  );
}

export default LoginLogo;
