/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      "colors": {
            "accent": {
                  "50": "#fefce8",
                  "500": "#eab308",
                  "900": "#713f12"
            },
            "neutral": {
                  "50": "#fafafa",
                  "100": "#f5f5f5",
                  "200": "#e5e5e5",
                  "300": "#d4d4d4",
                  "400": "#a3a3a3",
                  "500": "#737373",
                  "600": "#525252",
                  "700": "#404040",
                  "800": "#262626",
                  "900": "#171717"
            },
            "primary": {
                  "50": "#eff6ff",
                  "100": "#dbeafe",
                  "200": "#bfdbfe",
                  "300": "#93c5fd",
                  "400": "#60a5fa",
                  "500": "#3B82F6",
                  "600": "#2563eb",
                  "700": "#1d4ed8",
                  "800": "#1e40af",
                  "900": "#1e3a8a"
            },
            "secondary": {
                  "50": "#f8fafc",
                  "100": "#f1f5f9",
                  "200": "#e2e8f0",
                  "300": "#cbd5e1",
                  "400": "#94a3b8",
                  "500": "#64748b",
                  "600": "#475569",
                  "700": "#334155",
                  "800": "#1e293b",
                  "900": "#0f172a"
            }
      },
      "animation": {
            "fade-in": "fadeIn 0.5s ease-in-out",
            "slide-up": "slideUp 0.5s ease-out"
      },
      "keyframes": {
            "fadeIn": {
                  "0%": {
                        "opacity": "0"
                  },
                  "100%": {
                        "opacity": "1"
                  }
            },
            "slideUp": {
                  "0%": {
                        "opacity": "0",
                        "transform": "translateY(20px)"
                  },
                  "100%": {
                        "opacity": "1",
                        "transform": "translateY(0)"
                  }
            }
      },
      "fontFamily": {
            "sans": [
                  "Inter",
                  "-apple-system",
                  "BlinkMacSystemFont",
                  "Segoe UI",
                  "system-ui",
                  "sans-serif"
            ],
            "heading": [
                  "Poppins",
                  "Inter",
                  "-apple-system",
                  "sans-serif"
            ]
      }
}
  },
  plugins: [],
}