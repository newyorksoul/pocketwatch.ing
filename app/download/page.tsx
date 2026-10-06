import type { Metadata } from "next";
import Link from "next/link";
import { DownloadButtons } from "@/components/download-buttons";

export const metadata: Metadata = {
  title: "Download PocketWatch",
  description:
    "Download PocketWatch on iOS or Android to search NYC and NYS public payroll records on the go.",
};

function QRPlaceholder({ label }: { label: string }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-5 gap-1 rounded-2xl border border-white/10 bg-white p-3 shadow-inner shadow-slate-300/20">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={`${label}-${index}`}
            className={
              index % 2 === 0 || index % 3 === 0
                ? "h-3 w-3 rounded-sm bg-slate-900"
                : "h-3 w-3 rounded-sm bg-white"
            }
          />
        ))}
      </div>
      <p className="text-center text-xs uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <main className="pb-16 pt-10 sm:pt-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(3,19,26,0.45)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
              Download
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Get PocketWatch on iPhone or Android.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              PocketWatch is a salary tracker for public payroll transparency across New York City and New York State. Download the app from the App Store or use the Google Play link when the Android release is live.
            </p>

            <DownloadButtons />

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5">
                iOS App Store
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5">
                Android Play Store
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5">
                NYC + NYS data
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0b1720] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                App Store QR
              </p>
              <QRPlaceholder label="iOS" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b1720] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Google Play QR
              </p>
              <QRPlaceholder label="Android" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-white/10 bg-[#08131b] p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-cyan-300">1. Choose your platform</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Use the iOS App Store button on iPhone or iPad, or the Google Play button on Android.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-300">2. Install the app</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Tap the app, review the permissions, and open it to begin searching public payroll records.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-300">3. Start searching</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Filter by name, title, agency, year, salary, and jurisdiction to explore public payroll data.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-200"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
