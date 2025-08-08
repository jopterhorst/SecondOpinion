import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { musicalStructuredData, organizationStructuredData } from '@/lib/structuredData'
import { ThemeProvider } from '@/contexts/ThemeContext'

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "Second Opinion | Upstream Kerstmusical 2025",
  description: "Ervaar de transformerende kerstmusical Second Opinion door Upstream - een verhaal van hoop, verlossing en tweede kansen. 13-14, 19-21 & 23-24 december 2025.",
  keywords: ["kerstmusical", "Second Opinion", "Upstream", "Kerst 2025", "evangelisatie", "theater", "kerk", "musical"],
  authors: [{ name: "Upstream" }],
  openGraph: {
    title: "Second Opinion | Upstream Kerstmusical 2025",
    description: "Ervaar de transformerende kerstmusical Second Opinion door Upstream - een verhaal van hoop, verlossing en tweede kansen.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Opinion | Upstream Kerstmusical 2025",
    description: "Ervaar de transformerende kerstmusical Second Opinion door Upstream - een verhaal van hoop, verlossing en tweede kansen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicalStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${beVietnam.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
