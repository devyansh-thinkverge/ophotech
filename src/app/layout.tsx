import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { headers } from "next/headers";
import "./globals.css";
import CookieConsent from "@/components/cookies/CookieConsent";
import { ContactModalRouteController } from "@/components/forms/ContactModalRouteController";
import ConditionalGtm from "@/components/analytics/ConditionalGtm";
import { LenisProvider } from "@/components/ui/lenis-provider";
import ClickSpark from "@/components/ui/click-spark";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const uCityPro = localFont({
  src: [
    {
      path: '../../public/fonts/UCityProWeb-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UCityProWeb-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UCityProWeb-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ucity',
});

export const metadata: Metadata = {
  title: "OphoTech",
  description:
    "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
  verification: {
    google: "5m6QiWoBYT3883hjGFlJqfPu4f9vbmIBaXfwC9JppVk",
  },

  openGraph: {
    title: "OphoTech",
    description:
      "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
    url: "https://ophotech.com",
    siteName: "OphoTech",
    locale: "en_US",
    type: "website",
  },
};

// app/layout.tsx

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Extracting the nonce for CSP compliance
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${uCityPro.variable} ${uCityPro.className} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnects for Voiceflow Infrastructure */}
        <link rel="preconnect" href="https://cdn.voiceflow.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
        <link rel="preconnect" href="https://runtime-api.voiceflow.com" />
        
        {/* FIX: Ensure all preloads match the URLs the Voiceflow widget actually calls.
           We use the CDN URLs here because the widget is hardcoded to fetch them.
        */}
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Semibold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>

      <body className={`${poppins.variable} font-sans antialiased bg-[#0E1010]`}>
        {/* GTM — loads only in production and only after consent */}
        {process.env.NODE_ENV === "production" && (
          <ConditionalGtm gtmId="GTM-KQRTLRFZ" nonce={nonce} />
        )}

        <ClickSpark
          sparkColor="#09C771"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ClickSpark>

        <Suspense fallback={null}>
          <ContactModalRouteController />
        </Suspense>

        <CookieConsent />
      </body>
    </html>
  );
}
