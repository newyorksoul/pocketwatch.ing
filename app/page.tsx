import Image from "next/image";
import Link from "next/link";
import { DownloadButtons } from "@/components/download-buttons";

const features = [
  {
    title: "Search public payroll data",
    description:
      "Find compensation records across NYC and NYS with filters for name, title, agency, year, and salary range.",
  },
  {
    title: "Review salary transparency",
    description:
      "See how pay compares within agencies and roles with fast, readable results from public government datasets.",
  },
  {
    title: "Track what matters",
    description:
      "Keep your salary research organized and easy to revisit on the go with a mobile-first experience built for quick checks.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-cyan-200 uppercase">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              PocketWatch Salary Tracker App
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Track pay, compare salaries, and understand public payroll data faster.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                PocketWatch helps you search public salary records from New York City and New York State so you can spot trends, review compensation data, and make smarter career decisions.
              </p>
            </div>

            <div className="space-y-4">
              <DownloadButtons />
              <p className="text-sm text-slate-400">
                Available for iPhone and Android users. App Store link is live; Google Play is placeholder until publication.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                NYC + NYS data
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Salary filters
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Mobile-first experience
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -left-8 top-16 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-2 shadow-[0_30px_90px_rgba(3,19,26,0.8)] ring-1 ring-cyan-400/15">
              <Image
                src="/iphone-preview.png"
                alt="PocketWatch app preview"
                width={1200}
                height={2200}
                priority
                className="w-full rounded-[1.65rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
            Why PocketWatch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Built to make public payroll data easier to explore.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(3,19,26,0.35)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/30">
                <span className="text-lg text-cyan-300">•</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-8 shadow-[0_20px_60px_rgba(3,19,26,0.35)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
              Built for research
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Get the app for fast salary checks on the go.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              PocketWatch is designed for quick lookups of public compensation data, with a smooth mobile experience for both iOS and Android users.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1720] p-5">
            <p className="text-sm font-medium text-slate-300">
              Download the app and compare how pay trends stack up for public-sector roles.
            </p>
            <div className="mt-5">
              <DownloadButtons />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-300">
              <span>App Store</span>
              <span className="text-cyan-300">Live</span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-300">
              <span>Google Play</span>
              <span className="text-slate-400">Coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
