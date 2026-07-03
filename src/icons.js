// Raw SVG markup for heraldic seal icons and the dragon crest.
// Kept as strings + rendered with v-html so they can be dropped into
// any component without needing a separate .vue file per icon.

export const DragonCrest = `
<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vietnamese-inspired medieval green dragon crest">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="38%" r="70%">
      <stop offset="0" stop-color="#1a3322"/>
      <stop offset="0.58" stop-color="#0f2118"/>
      <stop offset="1" stop-color="#08110d"/>
    </radialGradient>

    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f7eab6"/>
      <stop offset="0.28" stop-color="#d7b15f"/>
      <stop offset="0.68" stop-color="#946b2c"/>
      <stop offset="1" stop-color="#563913"/>
    </linearGradient>

    <linearGradient id="dragonGreen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9ccf7f"/>
      <stop offset="0.3" stop-color="#4f944d"/>
      <stop offset="0.65" stop-color="#245a34"/>
      <stop offset="1" stop-color="#123220"/>
    </linearGradient>

    <linearGradient id="dragonBelly" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e2d79c"/>
      <stop offset="0.45" stop-color="#b5a764"/>
      <stop offset="1" stop-color="#5e6b32"/>
    </linearGradient>

    <linearGradient id="hornGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff1d0"/>
      <stop offset="0.6" stop-color="#d3b27b"/>
      <stop offset="1" stop-color="#7b6136"/>
    </linearGradient>

    <radialGradient id="pearlGrad" cx="35%" cy="35%" r="70%">
      <stop offset="0" stop-color="#f9fff6"/>
      <stop offset="0.45" stop-color="#d7f1d0"/>
      <stop offset="1" stop-color="#87aa7e"/>
    </radialGradient>

    <radialGradient id="rubyGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#ff8b8f"/>
      <stop offset="0.3" stop-color="#c72b3e"/>
      <stop offset="1" stop-color="#4a0913"/>
    </radialGradient>

    <filter id="shadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="2" stdDeviation="2.2" flood-color="#000" flood-opacity="0.36"/>
    </filter>
  </defs>

  <!-- Outer crest -->
  <circle cx="100" cy="100" r="94" fill="url(#bgGrad)" stroke="url(#goldGrad)" stroke-width="5"/>
  <circle cx="100" cy="100" r="84" fill="none" stroke="#bb9851" stroke-width="1.4" opacity="0.65"/>
  <circle cx="100" cy="100" r="74" fill="none" stroke="#816229" stroke-width="0.8" opacity="0.38"/>

  <!-- top ornament -->
  <g filter="url(#shadow)">
    <path d="M100 25 L107 38 L100 34 L93 38 Z" fill="url(#goldGrad)" stroke="#573813" stroke-width="1"/>
    <circle cx="100" cy="22" r="3.1" fill="url(#rubyGrad)" stroke="#421018" stroke-width="0.9"/>
  </g>

  <g filter="url(#shadow)">
    <!-- glowing pearl -->
    <circle cx="136" cy="70" r="10.2" fill="url(#pearlGrad)" stroke="url(#goldGrad)" stroke-width="2"/>
    <circle cx="133.2" cy="66.8" r="2.2" fill="#ffffff" opacity="0.7"/>

    <!-- main serpentine body -->
    <path
      d="M58 148
         C42 139 35 120 41 103
         C47 86 61 74 79 70
         C97 66 113 73 120 86
         C126 96 126 108 120 117
         C114 126 104 131 93 131
         C84 131 77 127 76 120
         C75 112 81 107 89 107
         C98 107 103 112 104 119
         C112 115 116 108 116 100
         C116 90 111 82 101 77
         C87 70 69 72 57 83
         C46 93 41 111 46 126
         C50 138 59 145 70 149
         C84 155 97 152 106 145
         C116 137 121 126 124 113
         C128 98 132 84 140 73"
      fill="none"
      stroke="url(#dragonGreen)"
      stroke-width="18"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- belly stripe -->
    <path
      d="M61 144
         C49 136 44 120 49 106
         C54 92 66 82 81 79
         C95 76 107 81 112 91
         C117 100 117 110 112 117
         C107 124 99 127 91 127
         C86 127 82 125 81 121
         C80 117 83 114 88 114
         C94 114 97 116 99 120"
      fill="none"
      stroke="url(#dragonBelly)"
      stroke-width="6.5"
      stroke-linecap="round"
      opacity="0.95"
    />

    <!-- tail tuft -->
    <path
      d="M59 148
         C53 155 47 160 39 164
         C48 165 56 164 63 160
         C61 166 62 173 68 179
         C73 169 74 159 70 149 Z"
      fill="url(#dragonGreen)"
      stroke="#123220"
      stroke-width="1.8"
      stroke-linejoin="round"
    />

    <!-- neck -->
    <path
      d="M121 89
         C126 80 130 70 131 59
         C132 48 128 40 122 35
         C136 34 146 42 149 54
         C152 68 146 84 134 95 Z"
      fill="url(#dragonGreen)"
      stroke="#123220"
      stroke-width="2.2"
      stroke-linejoin="round"
    />

    <!-- head -->
    <path
      d="M118 34
         C120 23 130 16 143 17
         C154 18 162 25 164 35
         C175 37 182 43 184 51
         C175 51 167 54 162 60
         C156 67 147 70 136 69
         C125 68 117 62 114 53
         C111 47 112 39 118 34 Z"
      fill="url(#dragonGreen)"
      stroke="#123220"
      stroke-width="2.4"
      stroke-linejoin="round"
    />

    <!-- snout -->
    <path
      d="M151 35
         C165 35 176 40 184 51
         C174 52 166 55 161 60
         C155 57 151 52 150 45
         C150 41 150 38 151 35 Z"
      fill="#4f8d48"
      stroke="#123220"
      stroke-width="2"
      stroke-linejoin="round"
    />

    <!-- eye -->
    <ellipse cx="141" cy="38" rx="4.2" ry="3" fill="#d8c160" stroke="#3f2309" stroke-width="0.9"/>
    <ellipse cx="142.2" cy="38.1" rx="0.95" ry="2.05" fill="#111"/>
    <circle cx="139.8" cy="36.9" r="0.65" fill="#fff" opacity="0.82"/>

    <!-- nostril and mouth -->
    <circle cx="172.5" cy="47.5" r="1.2" fill="#08110d"/>
    <path d="M148 51 Q159 56 171 51" fill="none" stroke="#08110d" stroke-width="2" stroke-linecap="round"/>
    <path d="M160 55 L164 62 L167 54 Z" fill="#f4e7bf" stroke="#6c582c" stroke-width="0.7"/>

    <!-- whiskers -->
    <path d="M154 51 C170 56 181 67 187 81" fill="none" stroke="url(#goldGrad)" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M150 54 C163 65 169 78 168 92" fill="none" stroke="url(#goldGrad)" stroke-width="1.45" stroke-linecap="round"/>
    <path d="M146 52 C135 60 128 69 124 80" fill="none" stroke="url(#goldGrad)" stroke-width="1.4" stroke-linecap="round"/>

    <!-- horns -->
    <path
      d="M126 28
         C122 18 124 10 132 4
         C132 14 136 22 143 28 Z"
      fill="url(#hornGrad)"
      stroke="#755a2e"
      stroke-width="1.3"
      stroke-linejoin="round"
    />
    <path
      d="M143 27
         C145 15 153 8 164 6
         C158 15 158 23 163 30 Z"
      fill="url(#hornGrad)"
      stroke="#755a2e"
      stroke-width="1.3"
      stroke-linejoin="round"
    />

    <!-- mane -->
    <g fill="#7fb66a" stroke="#173421" stroke-width="1">
      <path d="M119 42 L110 35 L113 48 Z"/>
      <path d="M117 55 L107 49 L111 60 Z"/>
      <path d="M120 67 L111 64 L118 74 Z"/>
      <path d="M127 79 L119 79 L126 87 Z"/>
    </g>

    <!-- crest spines -->
    <g fill="#a7d884" stroke="#173421" stroke-width="1">
      <path d="M66 81 L62 69 L74 79 Z"/>
      <path d="M82 75 L83 61 L92 76 Z"/>
      <path d="M98 76 L104 63 L108 79 Z"/>
      <path d="M114 82 L123 72 L121 87 Z"/>
    </g>

    <!-- front claw -->
    <path
      d="M110 118 C118 123 123 131 124 141"
      fill="none"
      stroke="#275b35"
      stroke-width="6"
      stroke-linecap="round"
    />
    <path
      d="M124 141 L118 149 M124 141 L127 151 M124 141 L133 147"
      fill="none"
      stroke="url(#hornGrad)"
      stroke-width="1.9"
      stroke-linecap="round"
    />

    <!-- rear claw -->
    <path
      d="M73 132 C67 139 65 147 66 156"
      fill="none"
      stroke="#275b35"
      stroke-width="5.5"
      stroke-linecap="round"
    />
    <path
      d="M66 156 L60 162 M66 156 L69 166 M66 156 L74 161"
      fill="none"
      stroke="url(#hornGrad)"
      stroke-width="1.8"
      stroke-linecap="round"
    />

    <!-- subtle scale arcs -->
    <g fill="none" stroke="#d8efae" stroke-width="0.85" opacity="0.34">
      <path d="M58 109 Q64 104 70 109"/>
      <path d="M68 95 Q74 90 80 95"/>
      <path d="M81 86 Q87 81 93 86"/>
      <path d="M95 84 Q101 79 107 84"/>
      <path d="M107 91 Q113 86 119 91"/>
      <path d="M115 104 Q121 99 127 104"/>
    </g>

    <!-- cloud-like medieval flourish -->
    <g fill="none" stroke="#b99a58" stroke-width="1.2" opacity="0.45">
      <path d="M40 64 C47 58 56 59 60 66 C64 60 72 60 76 67"/>
      <path d="M134 122 C141 116 150 117 154 124 C158 118 166 118 170 125"/>
    </g>
  </g>

  <!-- bottom shield -->
  <g filter="url(#shadow)">
    <path
      d="M73 174 L100 165 L127 174 L122 197 L100 209 L78 197 Z"
      fill="#183726"
      stroke="url(#goldGrad)"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <path
      d="M82 179 L100 172 L118 179 L116 193 L100 201 L84 193 Z"
      fill="#234b33"
      stroke="#698748"
      stroke-width="1"
      opacity="0.95"
    />
    <text
      x="100"
      y="194"
      text-anchor="middle"
      font-family="Cinzel, Georgia, serif"
      font-size="17"
      fill="#e8cf88"
      font-weight="700"
      letter-spacing="1.2"
    >HTN</text>
  </g>
</svg>`;

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