type DoodleProps = {
  className?: string;
};

export type PhotoArtVariant = 1 | 2 | 3 | 4 | 5 | 6;

const INK = "#17384c";
const CREAM = "#fffbf2";
const PAPER = "#e9f5ff";
const SKY = "#8ccbf4";
const BUTTER = "#ffc857";
const BLUSH = "#f3a6a0";
const NIGHT = "#102a3a";

export function HeartDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M16 27C10.2 22.6 4.8 18.1 4.8 12.7c0-3.5 2.7-5.9 5.7-5.9 2.3 0 4.3 1.3 5.5 3.3 1.2-2 3.2-3.3 5.5-3.3 3 0 5.7 2.4 5.7 5.9 0 5.4-5.4 9.9-11.2 14.3Z"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M16 2.8c1 8.1 5.1 12.2 13.2 13.2C21.1 17 17 21.1 16 29.2 15 21.1 10.9 17 2.8 16 10.9 15 15 10.9 16 2.8Z"
        fill="currentColor"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowerDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <g stroke={INK} strokeWidth="1.6">
        <ellipse cx="20" cy="9" rx="6" ry="8" fill={CREAM} />
        <ellipse cx="20" cy="31" rx="6" ry="8" fill={CREAM} />
        <ellipse cx="9" cy="20" rx="8" ry="6" fill={CREAM} />
        <ellipse cx="31" cy="20" rx="8" ry="6" fill={CREAM} />
        <ellipse cx="12" cy="12" rx="5.5" ry="7" fill={CREAM} transform="rotate(-45 12 12)" />
        <ellipse cx="28" cy="28" rx="5.5" ry="7" fill={CREAM} transform="rotate(-45 28 28)" />
        <ellipse cx="28" cy="12" rx="5.5" ry="7" fill={CREAM} transform="rotate(45 28 12)" />
        <ellipse cx="12" cy="28" rx="5.5" ry="7" fill={CREAM} transform="rotate(45 12 28)" />
        <circle cx="20" cy="20" r="6.5" fill={BUTTER} />
      </g>
    </svg>
  );
}

export function Squiggle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 11c28-6 56 2 84-2s56-7 84-2 56 8 126-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDownDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true" focusable="false">
      <path
        d="M19 4c-2 12 2 24 1 36m0 0c-5-5-9-8-14-10m14 10c5-5 9-7 14-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MusicNote({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M9 17.5V6.8c0-.5.3-.9.8-1l8-1.7c.6-.1 1.2.4 1.2 1v9.6M9 17.5a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0Zm11-3.8a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type BirdProps = {
  x: number;
  y: number;
  scale?: number;
  tone?: string;
  flip?: boolean;
};

function Bird({ x, y, scale = 1, tone = SKY, flip = false }: BirdProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      <path d="M-40 8 3-64 -55-8Z" fill={tone} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="0" cy="0" rx="42" ry="48" fill={tone} stroke={INK} strokeWidth="3" />
      <ellipse cx="5" cy="17" rx="23" ry="25" fill={CREAM} opacity="0.92" />
      <ellipse cx="-8" cy="4" rx="17" ry="25" fill={CREAM} opacity="0.55" transform="rotate(-22 -8 4)" />
      <path d="M-4-40c1-9 8-12 13-7" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="-11" cy="-17" r="2.8" fill={INK} />
      <circle cx="17" cy="-17" r="2.8" fill={INK} />
      <path d="M0-5 17 1 0 8Z" fill={BUTTER} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="-25" cy="1" r="6" fill={BLUSH} opacity="0.75" />
      <circle cx="28" cy="2" r="6" fill={BLUSH} opacity="0.75" />
      <path d="M-12 46-15 58m15-12 5 12" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

export function BirdPair({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 420 440" className={className} aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="394" height="414" rx="30" fill={CREAM} stroke={INK} strokeWidth="3" />
      <rect x="34" y="34" width="352" height="300" rx="22" fill="#d5ebff" stroke={INK} strokeWidth="2.5" />

      <circle cx="318" cy="92" r="25" fill={BUTTER} stroke={INK} strokeWidth="2.5" />
      <path d="M318 54v-12m0 100v-12m-38-38h-12m100 0h-12" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />

      <path d="M86 88c1 11 6 16 17 17-11 1-16 6-17 17-1-11-6-16-17-17 11-1 16-6 17-17Z" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M340 164c.7 7 4 11 11 12-7 1-10.3 5-11 12-.7-7-4-11-11-12 7-1 10.3-5 11-12Z" fill={BUTTER} stroke={INK} strokeWidth="1.8" />
      <path d="M76 176c.8 7 4 10 11 11-7 1-10 4-11 11-.8-7-4-10-11-11 7-1 10-4 11-11Z" fill={BLUSH} stroke={INK} strokeWidth="1.8" />

      <path d="M60 300c36-12 66 9 102 2 42-8 58 9 93 2 38-8 68 7 105-2" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M82 298c9-11 20-16 30-17-6 12-16 19-30 17Zm224 5c8-12 18-18 30-19-6 13-16 20-30 19Z" fill={SKY} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M112 300c4-14 2-22-4-31m178 33c2-12 8-19 17-24" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />

      <Bird x={160} y={246} scale={0.98} tone={SKY} />
      <Bird x={264} y={239} scale={1.04} tone="#7fbde8" flip />

      <path d="M208 152c-5-8-16-5-16 2 0 7 16 16 16 16s16-9 16-16c0-7-11-10-16-2Z" fill={BUTTER} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M232 122c-3-5-10-3-10 1 0 4 10 9 10 9s10-5 10-9c0-4-7-6-10-1Z" fill={BLUSH} stroke={INK} strokeWidth="2" strokeLinejoin="round" />

      <path d="M170 356c24-7 56-7 80 0" fill="none" stroke={BUTTER} strokeWidth="8" strokeLinecap="round" />
      <text
        x="210"
        y="398"
        textAnchor="middle"
        fill={INK}
        fontFamily="Caveat, cursive"
        fontSize="34"
        fontWeight="600"
      >
        amas + ade
      </text>
    </svg>
  );
}

function CupsScene() {
  return (
    <>
      <circle cx="326" cy="88" r="46" fill={BUTTER} opacity="0.55" />
      <path d="M0 0h400v332c-64-22-132 14-200-2S74 300 0 322Z" fill={PAPER} />
      <path d="M0 334c72-24 132 8 204-6 70-13 130 7 196-8v180H0Z" fill={CREAM} />
      <path d="M0 334c72-24 132 8 204-6 70-13 130 7 196-8" fill="none" stroke={INK} strokeWidth="4" />
      <path d="M72 322h256" stroke={INK} strokeWidth="4" strokeLinecap="round" />

      <g stroke={INK} strokeWidth="3.2" strokeLinejoin="round">
        <rect x="86" y="232" width="92" height="92" rx="16" fill={SKY} />
        <path d="M178 252h16c16 0 16 30 0 30h-16" fill="none" />
        <path d="M104 252c0-14 12-18 12-30m22 30c0-14 12-18 12-30" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M120 286c5 5 12 5 17 0" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="226" y="218" width="96" height="106" rx="16" fill={BUTTER} />
        <path d="M322 244h14c16 0 16 30 0 30h-14" fill="none" />
        <path d="M244 244h60m-60 18h44" fill="none" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M288 282c-4-6-13-4-13 2 0 6 13 13 13 13s13-7 13-13c0-6-9-8-13-2Z" fill={BLUSH} strokeWidth="2" />
      </g>
      <path d="M256 196c0-12 10-14 10-26m18 26c0-12 10-14 10-26" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M60 152c1 11 6 16 17 17-11 1-16 6-17 17-1-11-6-16-17-17 11-1 16-6 17-17Z" fill={CREAM} stroke={INK} strokeWidth="2.2" />
      <path d="M344 384c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" fill={BLUSH} stroke={INK} strokeWidth="2" />
      <circle cx="84" cy="416" r="4" fill={SKY} />
      <circle cx="320" cy="430" r="5" fill={BUTTER} />
    </>
  );
}

function WalkScene() {
  return (
    <>
      <rect width="400" height="500" fill="#d5ebff" />
      <circle cx="310" cy="96" r="40" fill={BUTTER} stroke={INK} strokeWidth="3" />
      <path d="M0 300c48-42 96-44 144-8 46-42 106-38 144 4 42-28 78-26 112-6v210H0Z" fill={CREAM} stroke={INK} strokeWidth="3.4" />
      <path d="M168 500c-6-42 22-70 44-92 18-19 36-38 44-64" fill="none" stroke={PAPER} strokeWidth="46" strokeLinecap="round" />
      <path d="M168 500c-6-42 22-70 44-92 18-19 36-38 44-64" fill="none" stroke={INK} strokeWidth="2.2" strokeDasharray="4 10" strokeLinecap="round" />

      <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
        <path d="M76 292V206m0 24c-18-12-30-2-30 10 16 4 26 0 30-10Zm0 28c18-12 30-2 30 10-16 4-26 0-30-10Z" fill={SKY} />
        <path d="M330 304v-78m0 20c14-10 24-1 24 9-13 3-21 0-24-9Z" fill={BUTTER} />
      </g>
      <path d="M52 356c1 12 6 17 18 18-12 1-17 6-18 18-1-12-6-17-18-18 12-1 17-6 18-18Z" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M298 196c.8 8 4 12 12 13-8 1-11.2 5-12 13-.8-8-4-12-12-13 8-1 11.2-5 12-13Z" fill={BLUSH} stroke={INK} strokeWidth="2" />

      <g>
        <Bird x={186} y={338} scale={0.72} tone={SKY} />
        <Bird x={264} y={312} scale={0.78} tone="#7fbde8" flip />
        <path d="M264 282c-4-6-12-4-12 2 0 5 12 11 12 11s12-6 12-11c0-6-8-8-12-2Z" fill={BUTTER} stroke={INK} strokeWidth="2" />
      </g>
      <circle cx="96" cy="446" r="4" fill={BUTTER} />
      <circle cx="332" cy="426" r="5" fill={BLUSH} />
    </>
  );
}

function CakeScene() {
  return (
    <>
      <rect width="400" height="500" fill={CREAM} />
      <circle cx="76" cy="82" r="44" fill={SKY} opacity="0.45" />
      <path d="M0 380h400v120H0Z" fill={PAPER} />
      <ellipse cx="200" cy="390" rx="150" ry="30" fill={CREAM} stroke={INK} strokeWidth="3.2" />
      <ellipse cx="200" cy="382" rx="126" ry="20" fill={SKY} opacity="0.35" />

      <g stroke={INK} strokeWidth="3" strokeLinejoin="round">
        <rect x="92" y="270" width="216" height="112" rx="20" fill={SKY} />
        <path d="M92 300c22 18 40-12 62 2s38-16 60-2 38-14 58-2 26-4 36-8v-20H92Z" fill={CREAM} />
        <rect x="132" y="208" width="136" height="82" rx="17" fill={BUTTER} />
        <path d="M132 230c16 14 30-8 46 2s28-10 44 0 28-8 46-2v-22H132Z" fill={CREAM} />
        <path d="M166 208v-28m34 28v-28m34 28v-28" strokeWidth="4" strokeLinecap="round" />
        <path d="M166 172c-8-8-2-16 4-15 6 1 6 9 4 15m26 0c-8-8-2-16 4-15 6 1 6 9 4 15m26 0c-8-8-2-16 4-15 6 1 6 9 4 15" fill="none" strokeWidth="2.6" />
        <path d="M155 178c-7-9 0-19 8-18 8 1 8 11 5 18m21 0c-7-9 0-19 8-18 8 1 8 11 5 18m21 0c-7-9 0-19 8-18 8 1 8 11 5 18" fill={BUTTER} />
        <path d="M132 356h136" strokeWidth="2.4" />
      </g>
      <g fill={BLUSH} stroke={INK} strokeWidth="1.8">
        <circle cx="130" cy="326" r="4" />
        <circle cx="176" cy="342" r="4" />
        <circle cx="234" cy="322" r="4" />
        <circle cx="278" cy="344" r="4" />
      </g>

      <path d="M56 190c1 12 6 17 18 18-12 1-17 6-18 18-1-12-6-17-18-18 12-1 17-6 18-18Z" fill={BUTTER} stroke={INK} strokeWidth="2" />
      <path d="M330 156c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" fill={BLUSH} stroke={INK} strokeWidth="2" />
      <path d="M322 230c14 8 28 8 42 0" fill="none" stroke={SKY} strokeWidth="6" strokeLinecap="round" />
    </>
  );
}

function NightScene() {
  return (
    <>
      <rect width="400" height="500" fill={NIGHT} />
      <circle cx="292" cy="124" r="66" fill={BUTTER} />
      <circle cx="264" cy="108" r="58" fill={NIGHT} />
      <g fill={CREAM}>
        <path d="M94 104c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" />
        <circle cx="148" cy="72" r="3" />
        <circle cx="332" cy="226" r="3" />
        <circle cx="64" cy="206" r="2.4" />
        <circle cx="210" cy="132" r="2.4" />
      </g>
      <path d="M0 380c52-26 96-26 144 0 54-32 112-30 164 2 34-20 64-22 92-10v128H0Z" fill="#17384c" stroke={SKY} strokeWidth="2.4" />
      <path d="M0 430c80-16 136 12 210 2s130-14 190-2" fill="none" stroke={SKY} strokeWidth="2" opacity="0.5" />

      <g>
        <Bird x={152} y={376} scale={0.62} tone={SKY} />
        <Bird x={252} y={370} scale={0.66} tone={BUTTER} flip />
      </g>
      <path d="M200 292c-5-8-16-5-16 2 0 7 16 16 16 16s16-9 16-16c0-7-11-10-16-2Z" fill={BLUSH} stroke={CREAM} strokeWidth="2" />
      <path d="M78 352c.8 7 4 10 11 11-7 1-10 4-11 11-.8-7-4-10-11-11 7-1 10-4 11-11Z" fill={BUTTER} stroke={NIGHT} strokeWidth="1.4" />
    </>
  );
}

function BouquetScene() {
  return (
    <>
      <rect width="400" height="500" fill={PAPER} />
      <circle cx="200" cy="210" r="144" fill={CREAM} />
      <path d="M0 410h400v90H0Z" fill={CREAM} />
      <path d="M0 410h400" stroke={INK} strokeWidth="3" />

      <g stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M168 414c-2-40 2-78 20-116m44 116c-2-42-6-78-20-112m-4 112c0-44 4-78 20-108" fill="none" strokeWidth="2.6" />
        <path d="M176 338c-16-4-26-16-28-30 16 1 28 12 28 30Zm36-22c2-16 12-27 26-32 0 16-10 29-26 32Z" fill={SKY} />
        <path d="M148 300c17-12 28-27 31-45 12 14 11 33-3 47-10 10-20 8-28-2Zm108-4c-16-10-25-24-26-41-12 12-13 29-1 42 9 10 19 9 27-1Z" fill={SKY} />
        <path d="M144 392h112l-14 94h-84Z" fill={SKY} />
        <path d="M144 392h112" strokeWidth="4" />
        <path d="M164 410c8 10 8 20 0 30m36-30c8 10 8 20 0 30m36-30c8 10 8 20 0 30" fill="none" strokeWidth="2" opacity="0.5" />
      </g>

      <g stroke={INK} strokeWidth="2.2">
        <ellipse cx="154" cy="242" rx="15" ry="24" fill={CREAM} transform="rotate(-28 154 242)" />
        <ellipse cx="185" cy="220" rx="15" ry="24" fill={CREAM} transform="rotate(18 185 220)" />
        <ellipse cx="218" cy="224" rx="15" ry="24" fill={CREAM} transform="rotate(-8 218 224)" />
        <ellipse cx="246" cy="250" rx="15" ry="24" fill={CREAM} transform="rotate(34 246 250)" />
        <ellipse cx="130" cy="274" rx="15" ry="24" fill={CREAM} transform="rotate(-55 130 274)" />
        <circle cx="185" cy="258" r="17" fill={BUTTER} />
        <circle cx="218" cy="252" r="15" fill={BLUSH} />
        <circle cx="154" cy="266" r="13" fill={SKY} />
        <circle cx="248" cy="282" r="12" fill={BUTTER} />
      </g>
      <path d="M96 142c1 11 6 16 17 17-11 1-16 6-17 17-1-11-6-16-17-17 11-1 16-6 17-17Z" fill={BUTTER} stroke={INK} strokeWidth="2.2" />
      <path d="M320 168c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" fill={BLUSH} stroke={INK} strokeWidth="2" />
      <circle cx="88" cy="350" r="5" fill={BLUSH} />
      <circle cx="324" cy="330" r="4" fill={SKY} />
    </>
  );
}

function BranchScene() {
  return (
    <>
      <rect width="400" height="500" fill={CREAM} />
      <circle cx="312" cy="88" r="38" fill={BUTTER} stroke={INK} strokeWidth="3" />
      <path d="M0 258c64-30 104 12 158-4 58-17 104 20 156 2 34-12 62-10 86-2v246H0Z" fill={PAPER} stroke={INK} strokeWidth="3" />
      <path d="M42 330c52-24 102 10 156 0s110-16 160 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <path d="M70 328c10-16 24-22 38-22-7 17-21 25-38 22Zm236 4c10-17 24-23 39-23-8 17-22 25-39 23Z" fill={SKY} stroke={INK} strokeWidth="2.4" />
      <path d="M112 332c6-20 3-32-4-44m176 46c4-18 11-27 22-34" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <g>
        <Bird x={172} y={274} scale={0.82} tone={SKY} />
        <Bird x={252} y={270} scale={0.88} tone="#7fbde8" flip />
      </g>
      <path d="M210 186c-6-9-18-6-18 2 0 8 18 18 18 18s18-10 18-18c0-8-12-11-18-2Z" fill={BUTTER} stroke={INK} strokeWidth="2.2" />
      <path d="M142 210c-4-6-12-4-12 2 0 5 12 11 12 11s12-6 12-11c0-6-8-8-12-2Z" fill={BLUSH} stroke={INK} strokeWidth="1.8" />
      <path d="M154 108c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14Z" fill={CREAM} stroke={INK} strokeWidth="2" />
      <circle cx="84" cy="170" r="4" fill={SKY} />
      <circle cx="340" cy="218" r="5" fill={BLUSH} />
    </>
  );
}

export function PhotoArt({
  variant,
  className,
}: {
  variant: PhotoArtVariant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 400 500" className={className} aria-hidden="true" focusable="false">
      {variant === 1 && <CupsScene />}
      {variant === 2 && <WalkScene />}
      {variant === 3 && <CakeScene />}
      {variant === 4 && <NightScene />}
      {variant === 5 && <BouquetScene />}
      {variant === 6 && <BranchScene />}
    </svg>
  );
}
