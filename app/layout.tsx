import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/reset.css";
import "@/app/_styles/globals.css";
import Header from "./_components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarot For Lovers",
  description: "TFL WITH MBTI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <Header />
        <main>
          {children}
        </main>  
      </body>
    </html>
  );
}
