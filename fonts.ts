import localFont from "next/font/local";

const pixterDisplay = localFont({
  src: [
    {
      path: "public/fonts/pixter-display.ttf",
      weight: "500",
      style: "regular",
    },
  ],
  variable: "--font-pixterDisplay",
});

export { pixterDisplay };