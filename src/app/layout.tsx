import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import FloatingParticles from '@/components/FloatingParticles';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Andrew — Web Developer",
  description: "Construyo sitios web que convierten. Formularios conectados, animaciones limpias y performance optimizada.",
  openGraph: {
    title: "Andrew — Web Developer",
    description: "Construyo sitios web que convierten. Formularios conectados, animaciones limpias y performance optimizada.",
    url: "https://andrewweb.vercel.app",
    siteName: "Andrew — Web Developer",
    images: [
      {
        url: "https://andrewweb.vercel.app/andrew.jpg",
        width: 1200,
        height: 630,
        alt: "Andrew - Desarrollador Web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew — Web Developer",
    description: "Construyo sitios web que convierten. Formularios conectados, animaciones limpias y performance optimizada.",
    images: ["https://andrewweb.vercel.app/andrew.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <FloatingParticles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
