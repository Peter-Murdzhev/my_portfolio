import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TabProvider } from "@/context/NavigationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murdzhev's portfolio",
  description: "Passionate Web developer creating any kind of websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <TabProvider>
          {children}
        </TabProvider>
      </body>
    </html>
  );
}
