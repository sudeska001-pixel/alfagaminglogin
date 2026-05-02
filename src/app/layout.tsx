import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neonnexus.alfagaming.com"), // Placeholder URL
  title: "NeonNexus - Next-Gen Cyberpunk Gaming Platform by alfagaming",
  description: "Dive into the future with NeonNexus, the ultimate cyberpunk sci-fi gaming platform by alfagaming. Experience advanced AI gaming and next-level immersion.",
  keywords: "alfagaming, cyberpunk gaming, sci-fi gaming, next-gen gaming platform, ai gaming, neon nexus",
  authors: [{ name: "alfagaming" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NeonNexus - Next-Gen Cyberpunk Gaming Platform by alfagaming",
    description: "Dive into the future with NeonNexus, the ultimate cyberpunk sci-fi gaming platform by alfagaming. Experience advanced AI gaming and next-level immersion.",
    url: "https://neonnexus.alfagaming.com",
    siteName: "NeonNexus by alfagaming",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeonNexus - Next-Gen Cyberpunk Gaming Platform by alfagaming",
    description: "Dive into the future with NeonNexus by alfagaming. Experience advanced AI gaming.",
    images: ["/og-image.jpg"], // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "NeonNexus by alfagaming",
    "description": "The ultimate cyberpunk sci-fi gaming platform featuring advanced AI integration.",
    "genre": ["Cyberpunk", "Sci-Fi", "Action", "RPG"],
    "publisher": {
      "@type": "Organization",
      "name": "alfagaming"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Gamers"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-cyber-bg text-cyber-text font-sans bg-grid selection:bg-neon-magenta selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
