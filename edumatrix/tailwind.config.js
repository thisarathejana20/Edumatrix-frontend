export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4F46E5",
          hover: "#4338CA",
          light: "#EEF2FF",
        },
        app: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          border: "#E2E8F0",
        },
        text: {
          title: "#0F172A",
          body: "#334155",
          muted: "#64748B",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
