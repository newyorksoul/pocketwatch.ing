import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pocketwatch.ing"),
  title: {
    default: "PocketWatch Salary Tracker App",
    template: "%s | PocketWatch Salary Tracker App",
  },
  description:
    "PocketWatch is a salary tracker app for NYC and NYS public payroll data. Search salaries, compare roles, and review transparent compensation records on iOS and Android.",
  applicationName: "PocketWatch Salary Tracker App",
  keywords: [
    "PocketWatch",
    "salary tracker",
    "salary app",
    "NYC payroll",
    "NYS payroll",
    "public pay transparency",
  ],
  openGraph: {
    title: "PocketWatch Salary Tracker App",
    description:
      "Track pay, compare salaries, and review public payroll data across NYC and NYS.",
    url: "https://pocketwatch.ing",
    siteName: "PocketWatch",
    type: "website",
    images: [
      {
        url: "/timepiece.svg",
        width: 1200,
        height: 630,
        alt: "PocketWatch Salary Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketWatch Salary Tracker App",
    description:
      "Track pay, compare salaries, and review public payroll data across NYC and NYS.",
    images: ["/timepiece.svg"],
  },
  icons: {
    icon: "/timepiece.svg",
    apple: "/timepiece.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050b12] text-slate-100">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(66,255,255,0.14),_transparent_38%),linear-gradient(180deg,#050b12_0%,#0b1220_100%)]">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050b12]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="flex items-center gap-3 text-sm font-semibold text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/40">
                  <img
                    src="/timepiece.svg"
                    alt="PocketWatch logo"
                    className="h-6 w-6"
                  />
                </span>
                PocketWatch
              </Link>

              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get the app
              </Link>
            </div>
          </header>

          <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
            {children}
          </div>

          <footer className="border-t border-white/10 bg-[#050b12]">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div className="flex items-center gap-3">
                <img
                  src="/timepiece.svg"
                  alt="PocketWatch"
                  className="h-5 w-5"
                />
                <span>© 2026 Isle Byte LLC</span>
              </div>
              <nav className="flex flex-wrap items-center gap-4">
                <Link href="/" className="hover:text-cyan-300">
                  Home
                </Link>
                <Link href="/download" className="hover:text-cyan-300">
                  Download
                </Link>
                <Link href="/privacy" className="hover:text-cyan-300">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-cyan-300">
                  Terms
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
