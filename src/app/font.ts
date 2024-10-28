import { Karla, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
  variable: "--font-montserrat",
});

export const karla = Karla({
  subsets: ["latin"],
  preload: true,
  variable: "--font-karla",
});
