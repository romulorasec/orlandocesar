import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orlando Cesar - Corretor Imobiliário | Évora & Alentejo",
  description: "Venda de propriedades rápida e transparente. Processo claro, sem surpresas. Confie em Orlando para vender seu imóvel.",
  keywords: "corretor imobiliário, venda de propriedades, Évora, Alentejo, Portugal",
  authors: [{ name: "Orlando Cesar" }],
  openGraph: {
    title: "Orlando Cesar - Corretor Imobiliário",
    description: "Venda de propriedades rápida e transparente em Évora e Alentejo",
    url: "https://orlandocesar.pt",
    siteName: "Orlando Cesar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${dmSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-medium focus:text-sm focus:font-medium"
        >
          Ir para conteúdo principal
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
