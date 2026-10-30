const INK = "#17384c";
const CREAM = "#fffbf2";
const SKY = "#8ccbf4";
const BUTTER = "#ffc857";
const BLUSH = "#f3a6a0";

const CANDLES = [122, 151, 180, 209, 238];

export function CakeIllustration({
  lit,
  label,
  age,
}: {
  lit: boolean;
  label: string;
  age: string;
}) {
  return (
    <svg
      viewBox="0 0 360 380"
      role="img"
      aria-label={label}
      data-lit={lit ? "true" : "false"}
      className="h-auto w-full"
    >
      <ellipse className="cake-glow" cx="180" cy="145" rx="118" ry="78" fill={BUTTER} opacity="0.12" />

      <g aria-hidden="true">
        <path
          d="M64 96c1.4 12 6.8 17.4 18.8 18.8C70.8 116.2 65.4 121.6 64 133.6c-1.4-12-6.8-17.4-18.8-18.8C57.2 113.4 62.6 108 64 96Z"
          fill={BUTTER}
          stroke={INK}
          strokeWidth="2"
        />
        <path
          d="M302 132c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z"
          fill={SKY}
          stroke={INK}
          strokeWidth="1.8"
        />
        <path
          d="M298 236c-4-6-12-4-12 2 0 5 12 11 12 11s12-6 12-11c0-6-8-8-12-2Z"
          fill={BLUSH}
          stroke={INK}
          strokeWidth="1.8"
        />
        <path
          d="M58 252c-3-5-10-3-10 1 0 4 10 9 10 9s10-5 10-9c0-4-7-6-10-1Z"
          fill={BUTTER}
          stroke={INK}
          strokeWidth="1.6"
        />
      </g>

      <ellipse cx="180" cy="338" rx="134" ry="23" fill={CREAM} stroke={INK} strokeWidth="3" />
      <ellipse cx="180" cy="333" rx="104" ry="12" fill={INK} opacity="0.07" />

      <g aria-hidden="true">
        {CANDLES.map((x, index) => (
          <g key={x}>
            <rect
              x={x - 4}
              y="124"
              width="8"
              height="54"
              rx="3"
              fill={index % 2 === 0 ? CREAM : BUTTER}
              stroke={INK}
              strokeWidth="2"
            />
            <path
              d={`M${x - 4} 140h8M${x - 4} 154h8M${x - 4} 168h8`}
              stroke={BLUSH}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d={`M${x} 118v6`} stroke={INK} strokeWidth="2" strokeLinecap="round" />

            <g transform={`translate(${x} 120)`}>
              <g className="cake-flame" style={{ animationDelay: `${index * 0.16}s` }}>
                <path
                  d="M0-22c6 7 9 12 9 17a9 9 0 1 1-18 0c0-5 3-10 9-17Z"
                  fill={BUTTER}
                  stroke={INK}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M0-14c3 4 4 6 4 9a4 4 0 1 1-8 0c0-3 1-5 4-9Z"
                  fill={CREAM}
                />
              </g>
            </g>

            <g className="cake-smoke" transform={`translate(${x} 116)`} aria-hidden="true">
              <path
                d="M0 0c-7-8 6-14 0-24s6-16 0-26"
                fill="none"
                stroke={CREAM}
                strokeWidth="2.2"
                strokeLinecap="round"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              />
            </g>
          </g>
        ))}
      </g>

      <g aria-hidden="true">
        <rect x="94" y="176" width="172" height="78" rx="16" fill={SKY} stroke={INK} strokeWidth="3" />
        <path
          d="M94 200c18 15 34-9 54 2s32-11 50 0 30-9 68-2v-30H94Z"
          fill={CREAM}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M112 214c1 9 5 12 13 13m27 5c1 7 4 10 10 11m37-6c1 9 5 12 13 13m26 3c1 7 4 10 10 11"
          fill="none"
          stroke={CREAM}
          strokeWidth="8"
          strokeLinecap="round"
        />

        <rect x="62" y="248" width="236" height="84" rx="18" fill={CREAM} stroke={INK} strokeWidth="3" />
        <path
          d="M62 272c24 18 44-10 68 2s42-12 66 0 40-12 64-2 26-4 38-10v-22H62Z"
          fill={SKY}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M84 286c1 9 5 12 13 13m33 5c1 7 4 10 10 11m43-6c1 9 5 12 13 13m34 3c1 7 4 10 10 11"
          fill="none"
          stroke={SKY}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>

      <text
        x="180"
        y="312"
        textAnchor="middle"
        fill={INK}
        fontFamily="Fraunces, Georgia, serif"
        fontSize="38"
        fontWeight="600"
      >
        {age}
      </text>
      <path
        d="M153 322c8-4 18-4 26 0m12 0c8-4 18-4 26 0"
        fill="none"
        stroke={BLUSH}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <g aria-hidden="true">
        <circle cx="108" cy="304" r="4" fill={BUTTER} stroke={INK} strokeWidth="1.4" />
        <circle cx="126" cy="318" r="3" fill={BLUSH} stroke={INK} strokeWidth="1.2" />
        <circle cx="226" cy="300" r="4.5" fill={SKY} stroke={INK} strokeWidth="1.4" />
        <circle cx="250" cy="316" r="3" fill={BUTTER} stroke={INK} strokeWidth="1.2" />
        <path d="M160 352h40" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      </g>
    </svg>
  );
}
