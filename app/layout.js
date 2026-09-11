import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://yogaregime.com"),
  title: {
    default: "Yoga Regime | Harpreet Kaur | Yoga Beyond the Asana",
    template: "%s | Yoga Regime",
  },
  description:
    "Explore a deeper approach to Yoga through mindful movement, breath, Bandhas, traditional practices and greater awareness of the body and mind with Harpreet Kaur.",
  keywords: [
    "Harpreet Kaur",
    "Yoga Regime",
    "Yoga Beyond the Asana",
    "Bandhas",
    "Pranayama",
    "Hatha Yoga",
    "Ashtanga Yoga",
    "Mudra",
    "Meditation",
    "Shatkarma",
    "Pre & Post Natal Yoga",
    "Advanced Asana",
  ],
  authors: [{ name: "Harpreet Kaur", url: "https://yogaregime.com" }],
  creator: "Harpreet Kaur",
  openGraph: {
    title: "Yoga Regime | Harpreet Kaur | Yoga Beyond the Asana",
    description:
      "Traditional yoga practices, modern understanding, and intelligent movement. Explore Asana, Pranayama, Bandhas, and Meditation with Harpreet Kaur.",
    url: "https://yogaregime.com",
    siteName: "Yoga Regime",
    images: [
      {
        url: "/images/yoga_img_7.png",
        width: 1200,
        height: 630,
        alt: "Yoga Regime - Harpreet Kaur - Yoga Beyond the Asana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Regime | Harpreet Kaur | Yoga Beyond the Asana",
    description:
      "Traditional yoga practices, modern understanding, and intelligent movement.",
    images: ["/images/yoga_img_7.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/logo1.png", type: "image/png" },
    ],
    shortcut: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
};

export const viewport = {
  themeColor: "#0E2229",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/images/logo1.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo1.png" />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1D2628] font-sans selection:bg-[#0E2229] selection:text-[#FAF8F5] flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
