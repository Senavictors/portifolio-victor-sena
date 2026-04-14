import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Sena | Backend Developer",
  description:
    "Portfólio de Victor Sena, desenvolvedor backend focado em Laravel, APIs robustas, integrações e arquitetura de sistemas escaláveis.",
  applicationName: "Victor Sena Portfolio",
  keywords: [
    "Victor Sena",
    "Backend Developer",
    "Laravel",
    "PHP",
    "Redis",
    "MySQL",
    "Next.js",
    "Portfólio",
  ],
  openGraph: {
    title: "Victor Sena | Backend Developer",
    description:
      "Portfólio com foco em APIs, integrações, sistemas escaláveis e automação de processos.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Victor Sena | Backend Developer",
    description:
      "Portfólio com foco em APIs, integrações, sistemas escaláveis e automação de processos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
