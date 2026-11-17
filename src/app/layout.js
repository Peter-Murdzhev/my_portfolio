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
  metadataBase: new URL("https://murdzhev-portfolio-web.vercel.app"),

  title: {
    default: "Petar Murdzhev | Web Developer & Portfolio",
    template: "%s | Petar Murdzhev"
  },

  description:
    "Petar Murdzhev (Петър Мурджев) is a web developer passionate about building modern," +
    " responsive and user-friendly websites and web applications.",

  authors: [
    {
      name: "Petar Murdzhev"
    }
  ],

  creator: "Petar Murdzhev",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Petar Murdzhev",
    title: "Petar Murdzhev | Web Developer",
    description:
      "Explore the portfolio, projects and web development work of Petar Murdzhev (Петър Мурджев).",
    url: "/",
    images: ["/cv_photo1.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  verification: {
    google: "nwcTlwQsUrdPqxDnLlag1nWxqjgFilg8ZBXfSLvo9Uo"
  }
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
