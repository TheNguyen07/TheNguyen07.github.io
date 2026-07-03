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
  banner: `<svg viewBox="0 0 48 48"><path d="M14 6 V42" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M14 9 L36 15 L14 22 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>`,
}

export const IconStar = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L14.5 9 H22 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 H9.5 Z"/></svg>`

export const IconChevron = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9 L12 15 L18 9"/></svg>`

export const PersonSilhouette = `<svg viewBox="0 0 64 64" fill="currentColor"><circle cx="32" cy="22" r="14"/><path d="M8 58 C8 40 18 32 32 32 C46 32 56 40 56 58 Z"/></svg>`

export const HTNShield = `
<svg viewBox="0 0 48 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HTN shield">
  <defs>
    <linearGradient id="htnShieldGold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e2c37c"/>
      <stop offset="1" stop-color="#8a6a2e"/>
    </linearGradient>
  </defs>
  <path d="M0 8 L24 0 L48 8 L44 28 L24 38 L4 28 Z" fill="#2f5b3c" stroke="url(#htnShieldGold)" stroke-width="2.5"/>
  <text x="24" y="24" text-anchor="middle" font-family="Cinzel, serif" font-size="14" fill="#e2c37c" font-weight="700">HTN</text>
</svg>`

export const KingsCrown = `
<svg
  viewBox="0 0 48 32"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Realistic golden king's crown"
>
  <defs>
    <linearGradient id="kcGold" x1="0" y1="0" x2="0.85" y2="1">
      <stop offset="0" stop-color="#fff4bd"/>
      <stop offset="0.16" stop-color="#e6bd59"/>
      <stop offset="0.38" stop-color="#a96d17"/>
      <stop offset="0.57" stop-color="#f1cf6c"/>
      <stop offset="0.78" stop-color="#b2781d"/>
      <stop offset="1" stop-color="#68400f"/>
    </linearGradient>

    <linearGradient id="kcBandGold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe996"/>
      <stop offset="0.2" stop-color="#c58b28"/>
      <stop offset="0.46" stop-color="#f5d46e"/>
      <stop offset="0.72" stop-color="#a76818"/>
      <stop offset="1" stop-color="#61380c"/>
    </linearGradient>

    <linearGradient id="kcInnerGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5d350b"/>
      <stop offset="0.5" stop-color="#aa741d"/>
      <stop offset="1" stop-color="#3e2207"/>
    </linearGradient>

    <radialGradient id="kcRuby" cx="32%" cy="25%" r="76%">
      <stop offset="0" stop-color="#ff8b8e"/>
      <stop offset="0.2" stop-color="#c62d3a"/>
      <stop offset="0.58" stop-color="#71111c"/>
      <stop offset="1" stop-color="#250308"/>
    </radialGradient>

    <radialGradient id="kcCrystal" cx="30%" cy="24%" r="76%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.34" stop-color="#e7edf0"/>
      <stop offset="0.68" stop-color="#a7b5bd"/>
      <stop offset="1" stop-color="#53646d"/>
    </radialGradient>

    <radialGradient id="kcPearl" cx="30%" cy="25%" r="76%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.48" stop-color="#f1eadc"/>
      <stop offset="1" stop-color="#a79a80"/>
    </radialGradient>

    <filter id="kcShadow" x="-25%" y="-30%" width="150%" height="170%">
      <feDropShadow
        dx="0"
        dy="1"
        stdDeviation="0.65"
        flood-color="#241303"
        flood-opacity="0.42"
      />
    </filter>

    <filter id="kcSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="0.22" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Smaller, centered crown -->
  <g transform="translate(3.35 2.15) scale(0.86)">
    <g filter="url(#kcShadow)">

      <!-- Main crown body -->
      <path
        d="
          M4.4 24
          C5.6 19.6 6.8 15.3 8.3 10.3
          C10 14.7 11.8 17.6 14.3 19.7
          C17.3 14.4 20.5 8.1 24 3.5
          C27.5 8.1 30.7 14.4 33.7 19.7
          C36.2 17.6 38 14.7 39.7 10.3
          C41.2 15.3 42.4 19.6 43.6 24
          Z
        "
        fill="url(#kcGold)"
        stroke="#59340c"
        stroke-width="1"
        stroke-linejoin="round"
      />

      <!-- Recessed crown sections -->
      <path
        d="
          M7.1 22.9
          C8 19.3 8.5 16 8.5 12.9
          C10.1 16.5 12 19.1 14.4 21
          L13.4 22.9 Z
        "
        fill="url(#kcInnerGold)"
        opacity="0.72"
      />

      <path
        d="
          M16.1 23
          C18.5 16.6 21.2 9.7 24 5.4
          C26.8 9.7 29.5 16.6 31.9 23
          Z
        "
        fill="url(#kcInnerGold)"
        opacity="0.4"
      />

      <path
        d="
          M34.6 22.9
          C37 19.1 38.1 16.5 39.5 12.9
          C39.5 16 40 19.3 40.9 22.9
          Z
        "
        fill="url(#kcInnerGold)"
        opacity="0.72"
      />

      <!-- Raised metallic edges -->
      <path
        d="M5.7 23 C6.9 19.1 7.7 14.9 8.3 10.3"
        fill="none"
        stroke="#ffe58b"
        stroke-width="0.68"
        stroke-linecap="round"
        opacity="0.9"
      />

      <path
        d="M14.3 19.7 C17.5 14.1 20.5 8 24 3.5"
        fill="none"
        stroke="#ffeb96"
        stroke-width="0.72"
        stroke-linecap="round"
        opacity="0.9"
      />

      <path
        d="M24 3.5 C27.5 8 30.5 14.1 33.7 19.7"
        fill="none"
        stroke="#8f5c16"
        stroke-width="0.55"
        stroke-linecap="round"
        opacity="0.75"
      />

      <path
        d="M39.7 10.3 C40.3 14.9 41.1 19.1 42.3 23"
        fill="none"
        stroke="#8f5c16"
        stroke-width="0.55"
        stroke-linecap="round"
        opacity="0.75"
      />

      <!-- Central ornament -->
      <path
        d="
          M24 8.6
          C22.8 10.7 21.9 12.7 21.6 14.8
          C22.4 14 23.2 13.6 24 13.6
          C24.8 13.6 25.6 14 26.4 14.8
          C26.1 12.7 25.2 10.7 24 8.6 Z
        "
        fill="url(#kcGold)"
        stroke="#68400f"
        stroke-width="0.42"
      />

      <path
        d="
          M18.2 22
          C20.1 20.9 21.3 19.5 21.9 17.7
          C22.7 18.8 23.3 19.3 24 19.6
          C24.7 19.3 25.3 18.8 26.1 17.7
          C26.7 19.5 27.9 20.9 29.8 22
        "
        fill="none"
        stroke="#e8bd52"
        stroke-width="0.68"
        stroke-linecap="round"
      />

      <!-- Crown band -->
      <path
        d="
          M4.2 22.5
          Q4.2 21.5 5.4 21.5
          H42.6
          Q43.8 21.5 43.8 22.5
          V28.1
          Q43.8 29.4 42.5 29.4
          H5.5
          Q4.2 29.4 4.2 28.1
          Z
        "
        fill="url(#kcBandGold)"
        stroke="#573109"
        stroke-width="1"
      />

      <!-- Band highlights -->
      <path
        d="M5.4 22.8 H42.6"
        stroke="#fff0a4"
        stroke-width="0.62"
        stroke-linecap="round"
        opacity="0.82"
      />

      <path
        d="M5 26.8 H43"
        stroke="#6b3d0d"
        stroke-width="0.62"
        opacity="0.72"
      />

      <path
        d="M5.3 28.3 H42.7"
        stroke="#dda537"
        stroke-width="0.48"
        opacity="0.8"
      />

      <!-- Engraved lower band -->
      <path
        d="
          M6 27.5
          Q7.1 26.5 8.2 27.5
          Q9.3 28.5 10.4 27.5
          Q11.5 26.5 12.6 27.5
          Q13.7 28.5 14.8 27.5
          Q15.9 26.5 17 27.5
          Q18.1 28.5 19.2 27.5
          Q20.3 26.5 21.4 27.5
          Q22.5 28.5 23.6 27.5
          Q24.7 26.5 25.8 27.5
          Q26.9 28.5 28 27.5
          Q29.1 26.5 30.2 27.5
          Q31.3 28.5 32.4 27.5
          Q33.5 26.5 34.6 27.5
          Q35.7 28.5 36.8 27.5
          Q37.9 26.5 39 27.5
          Q40.1 28.5 42 27.5
        "
        fill="none"
        stroke="#70420e"
        stroke-width="0.4"
        opacity="0.82"
      />

      <!-- Central ruby frame -->
      <ellipse
        cx="24"
        cy="20"
        rx="3.75"
        ry="4.4"
        fill="url(#kcGold)"
        stroke="#513009"
        stroke-width="0.68"
      />

      <ellipse
        cx="24"
        cy="20"
        rx="2.82"
        ry="3.52"
        fill="url(#kcRuby)"
        stroke="#3c060d"
        stroke-width="0.56"
        filter="url(#kcSoftGlow)"
      />

      <!-- Ruby facets -->
      <path
        d="M24 16.6 L22.5 19.4 L24 23.4 L25.5 19.4 Z"
        fill="#f8505c"
        opacity="0.2"
      />

      <path
        d="M21.4 19.3 L24 20.4 L26.6 19.3"
        fill="none"
        stroke="#ff9aa0"
        stroke-width="0.3"
        opacity="0.48"
      />

      <ellipse
        cx="23"
        cy="18.2"
        rx="0.55"
        ry="0.85"
        fill="#ffffff"
        opacity="0.48"
        transform="rotate(25 23 18.2)"
      />

      <!-- Side gemstones -->
      <g>
        <ellipse
          cx="11.3"
          cy="20.1"
          rx="2.35"
          ry="2.9"
          fill="url(#kcGold)"
          stroke="#59340c"
          stroke-width="0.58"
        />

        <ellipse
          cx="11.3"
          cy="20.1"
          rx="1.58"
          ry="2.12"
          fill="url(#kcCrystal)"
          stroke="#586971"
          stroke-width="0.4"
        />

        <path
          d="M9.9 20 L11.3 18.2 L12.7 20 L11.3 22.2 Z"
          fill="none"
          stroke="#ffffff"
          stroke-width="0.28"
          opacity="0.58"
        />
      </g>

      <g>
        <ellipse
          cx="36.7"
          cy="20.1"
          rx="2.35"
          ry="2.9"
          fill="url(#kcGold)"
          stroke="#59340c"
          stroke-width="0.58"
        />

        <ellipse
          cx="36.7"
          cy="20.1"
          rx="1.58"
          ry="2.12"
          fill="url(#kcCrystal)"
          stroke="#586971"
          stroke-width="0.4"
        />

        <path
          d="M35.3 20 L36.7 18.2 L38.1 20 L36.7 22.2 Z"
          fill="none"
          stroke="#ffffff"
          stroke-width="0.28"
          opacity="0.58"
        />
      </g>

      <!-- Pearl row -->
      <g
        fill="url(#kcPearl)"
        stroke="#776b55"
        stroke-width="0.24"
      >
        <circle cx="7.1" cy="24.8" r="0.7"/>
        <circle cx="9.5" cy="24.8" r="0.7"/>
        <circle cx="11.9" cy="24.8" r="0.7"/>
        <circle cx="14.3" cy="24.8" r="0.7"/>
        <circle cx="16.7" cy="24.8" r="0.7"/>
        <circle cx="19.1" cy="24.8" r="0.7"/>
        <circle cx="21.5" cy="24.8" r="0.7"/>
        <circle cx="24" cy="24.8" r="0.74"/>
        <circle cx="26.5" cy="24.8" r="0.7"/>
        <circle cx="28.9" cy="24.8" r="0.7"/>
        <circle cx="31.3" cy="24.8" r="0.7"/>
        <circle cx="33.7" cy="24.8" r="0.7"/>
        <circle cx="36.1" cy="24.8" r="0.7"/>
        <circle cx="38.5" cy="24.8" r="0.7"/>
        <circle cx="40.9" cy="24.8" r="0.7"/>
      </g>

      <!-- Top jewels -->
      <circle
        cx="8.3"
        cy="10"
        r="1.75"
        fill="url(#kcPearl)"
        stroke="#65400f"
        stroke-width="0.58"
      />

      <circle
        cx="24"
        cy="3.6"
        r="2.05"
        fill="url(#kcRuby)"
        stroke="#430810"
        stroke-width="0.64"
      />

      <circle
        cx="39.7"
        cy="10"
        r="1.75"
        fill="url(#kcPearl)"
        stroke="#65400f"
        stroke-width="0.58"
      />

      <!-- Reflections -->
      <g fill="#ffffff" opacity="0.58">
        <circle cx="7.75" cy="9.45" r="0.36"/>
        <circle cx="23.3" cy="2.9" r="0.46"/>
        <circle cx="39.15" cy="9.45" r="0.36"/>
      </g>
    </g>
  </g>
</svg>
`;