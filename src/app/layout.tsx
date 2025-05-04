import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIS Healing Solution",
  description: "Natural healing through infopeptide technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-white font-semibold">
                HIS Healing Solution
              </Link>
              <div className="flex space-x-4">
                <Link href="/" className="text-white px-3 py-2 rounded-md">
                  Home
                </Link>
                <Link href="/testimonials" className="text-white px-3 py-2 rounded-md">
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
