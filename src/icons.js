// Raw SVG markup for heraldic seal icons and the dragon crest.
// Kept as strings + rendered with v-html so they can be dropped into
// any component without needing a separate .vue file per icon.

export const DragonCrest = `
<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nguyen family dragon crest">
  <defs>
    <linearGradient id="scaleGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6fa877"/>
      <stop offset="1" stop-color="#2f5b3c"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e2c37c"/>
      <stop offset="1" stop-color="#8a6a2e"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="94" fill="#0f2015" stroke="url(#goldGrad)" stroke-width="4"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="#b8944f" stroke-width="1" opacity="0.5"/>
  <path d="M100 34 L112 58 L100 50 L88 58 Z" fill="url(#goldGrad)"/>
  <path d="M60 150 C55 120 65 95 90 82 C82 70 84 55 96 46 C99 60 108 66 118 64
           C126 74 124 88 114 94 C132 98 146 112 148 132
           C138 124 126 122 116 126 C122 134 122 146 114 152
           C108 142 98 138 90 140 C96 148 94 158 86 162
           C82 152 74 148 66 150 Z"
        fill="url(#scaleGrad)" stroke="#1c3b26" stroke-width="2"/>
  <path d="M90 82 C78 86 66 96 60 110" fill="none" stroke="#1c3b26" stroke-width="2" stroke-linecap="round"/>
  <circle cx="99" cy="55" r="2.6" fill="currentColor"/>
  <path d="M96 60 Q100 66 106 61" fill="none" stroke="#0f2015" stroke-width="2" stroke-linecap="round"/>
  <path d="M114 94 C124 92 132 84 132 74" fill="none" stroke="#1c3b26" stroke-width="2" stroke-linecap="round"/>
  <path d="M40 128 C50 116 62 112 74 116 L70 126 C60 124 52 128 46 138 Z" fill="url(#scaleGrad)" stroke="#1c3b26" stroke-width="1.5"/>
  <g fill="#c86a3c">
    <path d="M92 76 L86 66 L98 70 Z"/>
    <path d="M104 68 L112 58 L110 72 Z"/>
    <path d="M60 118 L48 112 L62 108 Z"/>
  </g>
  <path d="M76 176 L100 168 L124 176 L120 196 L100 206 L80 196 Z" fill="#2f5b3c" stroke="url(#goldGrad)" stroke-width="2.5"/>
  <text x="100" y="194" text-anchor="middle" font-family="Cinzel, serif" font-size="17" fill="currentColor" font-weight="700">HTN</text>
</svg>`

export const seals = {
  shield: `<svg viewBox="0 0 48 48"><path d="M24 4 L42 11 V24 C42 35 34 42 24 45 C14 42 6 35 6 24 V11 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M24 14 V34 M16 20 H32" stroke="currentColor" stroke-width="2"/></svg>`,
  scroll: `<svg viewBox="0 0 48 48"><rect x="9" y="12" width="30" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M9 18 H39 M9 24 H39 M9 30 H39" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="15" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="39" cy="33" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  sword: `<svg viewBox="0 0 48 48"><path d="M24 6 V32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M16 30 H32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 32 L24 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M20 8 L24 4 L28 8" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>`,
  gem: `<svg viewBox="0 0 48 48"><path d="M12 18 L24 6 L36 18 L24 42 Z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 18 H36 M18 18 L24 42 M30 18 L24 42" stroke="currentColor" stroke-width="1.4"/></svg>`,
  laurel: `<svg viewBox="0 0 48 48"><path d="M24 6 C18 16 18 32 24 42" fill="none" stroke="currentColor" stroke-width="2"/><path d="M24 6 C30 16 30 32 24 42" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M22 12 L16 10 M22 18 L14 17 M22 24 L14 25 M22 30 L16 32"/><path d="M26 12 L32 10 M26 18 L34 17 M26 24 L34 25 M26 30 L32 32"/></g></svg>`,
  tower: `<svg viewBox="0 0 48 48"><rect x="16" y="18" width="16" height="22" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M14 18 L24 8 L34 18 Z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M22 40 V30 H26 V40" stroke="currentColor" stroke-width="1.8" fill="none"/></svg>`,
}

export const IconStar = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 9 H22 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 H9.5 Z"/></svg>`

export const IconChevron = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9 L12 15 L18 9"/></svg>`
