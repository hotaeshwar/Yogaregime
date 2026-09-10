import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://yogaregime.com"),
  title: {
    default: "Serena Yoga | Move · Breathe · Be | Certified Yoga & Mindfulness",
    template: "%s | Serena Yoga",
  },
  description:
    "Transform your mind, body, and spirit with certified yoga instructor Serena. Private sessions, group classes, corporate wellness, and online yoga programs tailored for you.",
  keywords: [
    "Yoga Instructor",
    "Mindfulness Coach",
    "Hatha Yoga",
    "Vinyasa Flow",
    "Meditation",
    "Prenatal Yoga",
    "Private Yoga Classes",
    "Serena Yoga",
  ],
  authors: [{ name: "Serena", url: "https://yogaregime.com" }],
  creator: "Serena Yoga",
  openGraph: {
    title: "Serena Yoga | Move · Breathe · Be",
    description:
      "Yoga for a stronger body, a calmer mind and a more mindful life. Discover private and group classes with Serena.",
    url: "https://yogaregime.com",
    siteName: "Serena Yoga",
    images: [
      {
        url: "/images/hero_yoga.jpg",
        width: 1200,
        height: 630,
        alt: "Serena Yoga - Mindful Living & Yoga Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serena Yoga | Move · Breathe · Be",
    description:
      "Yoga for a stronger body, a calmer mind and a more mindful life.",
    images: ["/images/hero_yoga.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#0B2A3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F7F3] text-[#243038] font-sans selection:bg-[#0B2A3A] selection:text-white flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
