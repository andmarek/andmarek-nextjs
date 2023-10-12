import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "moss-green": "#959A6B",
      "raisin-black": "#2D2424",
      "licorice": "#1A515",
      "van-dyke": "#453636",
      "wenge": "#725A5A",
      "cinereous": "#9C8181",
      "chinese-violet": "#756D94",
      "champagne-pink": "#DCC9BC",
      "papaya-whip": "#FFE9C7",
      "plum": "#7B3D79"
    },
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

      }
    },
  },
  plugins: [],
}
export default config
