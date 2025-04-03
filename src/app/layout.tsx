import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIMMAA Cinta Larga",
  description: "AIMAAM - ASSOCIAÇÃO INDÍGENA CINTA LARGA",
  keywords: ["Cinta Larga", "Povos Indígenas", "AIMAAM", "Associação Indígena"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "AIMAAM Cinta Larga",
    description: "AIMAAM - ASSOCIAÇÃO INDÍGENA CINTA LARGA",
    siteName: "AIMAAM Cinta Larga",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; 
             script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://www.google.com; 
             style-src 'self' 'unsafe-inline'; 
             img-src 'self' data:; 
             frame-src 'self' https://www.google.com https://maps.googleapis.com;"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="antialiased">
        <main className="min-h-screen" aria-live="polite">
          {children}
        </main>
      </body>
    </html>
  );
}
