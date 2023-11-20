import { FC } from "react";

const Next: FC = () => {
  return (
    <svg fill="none" viewBox="0 0 16 12" width="14" height="10">
      <path
        d="m9.5 11 4.2929-4.2929c0.3333-0.33334 0.5-0.5 0.5-0.70711s-0.1667-0.37377-0.5-0.70711l-4.2929-4.2929"
        stroke="url(#b)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="m1 10 3.4343-3.4343c0.26666-0.26666 0.39999-0.39999 0.39999-0.56568s-0.13333-0.29902-0.4-0.56569l-3.4343-3.4343"
        stroke="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(13.207 6.0122) scale(4.7164 3.7748)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#523FD7" offset="0" />
          <stop stopColor="#FF7DFF" offset="1" />
        </radialGradient>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(3.9654 6.0097) scale(3.7731 3.0199)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#523FD7" offset="0" />
          <stop stopColor="#FF7DFF" offset="1" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Next;
