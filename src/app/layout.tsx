import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/aos/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Olá! Sou Islaiane Ribeiro, uma desenvolvedora front-end apaixonada por criar interfaces de usuário intuitivas e responsivas. Explore meu portfólio e conheça meus projetos mais recentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <ThemeProvider>
          <AOSInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
