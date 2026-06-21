/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Solid theme tokens
        orbitBg: '#020617',        // DARD BACKGROUND COLOR
        orbitCard: '#151F38',      // DARK CARDS COLOR
        orbitText: '#F8FAFC',      // DARK TEXT COLOR
        orbitExtra: '#38BDF8',     // EXTRA COLOR
        orbitAccent: '#1E3A8A',    // ACCENT COLOR
        orbitPrimary: '#1F4FD8',   // PRIMARY COLOR
      },
      backgroundImage: {
        // Linear gradients mapped directly from your Figma image stops
        'grad-ldhr': 'linear-gradient(180deg, #2563EB 0%, #111827 100%)',
        'grad-sasa': 'linear-gradient(180deg, #0D0043 0%, #E7E2FF 100%)',
        'grad-card': 'linear-gradient(180deg, #5A31FF 0%, #3A2592 100%)',
        'grad-faru': 'linear-gradient(180deg, #05091C 0%, #5A31FF 49%, #05091C 100%)',
        'grad-55':   'linear-gradient(180deg, #0042FF 0%, #05091C 100%)',
        'grad-qw':   'linear-gradient(180deg, #7350FF 0%, rgba(5, 9, 28, 0) 100%)',
      }
    },
  },
  plugins: [],
}