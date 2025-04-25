import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skinsight | Understand your skin better with AI",
  description: "Skinsight helps you understand your skin better with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="caramellatte">
      <body
        className={`${ebGaramond.variable} ${workSans.variable} antialiased max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden drawer drawer-end`}
      >
        <input id="right-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          {children}
        </div>
        <Drawer />
      </body>
    </html>
  );
}
