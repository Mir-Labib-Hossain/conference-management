import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LH Conference",
  description: "Lemon Hive Conference App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Topbar />
          <Suspense>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
