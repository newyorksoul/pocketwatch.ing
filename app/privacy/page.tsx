import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PocketWatch privacy policy explaining how data is stored, used, and shared in the app.",
};

const sections = [
  {
    title: "Information Stored on Your Device",
    body: "PocketWatch stores your selected jurisdiction (NYC or NYS) locally so the app can remember your choice. Search filters are kept in app memory while you use the app; the app does not ask you to create an account.",
  },
  {
    title: "Searches and Public Records",
    body: "When you search, the filters you enter—such as names, job title, agency, year, or salary range—are sent in a request to the applicable Socrata endpoint to find matching records. Payroll records are supplied by public government datasets. Socrata and the relevant data provider receive and process those requests under their own privacy practices and may collect technical request information, such as your IP address.",
  },
  {
    title: "Analytics and Information Shared",
    body: "PocketWatch uses Firebase Analytics (provided by Google) to measure app screens, completed searches, and record openings. These events do not include search filters, payroll record identifiers, names, agencies, or other record details; record-opening events include only the broad jurisdiction. Firebase may also collect standard app, device, and usage information under Google's privacy practices.",
  },
  {
    title: "Advertising",
    body: "PocketWatch may show a full-screen interstitial ad before some record details. Ads are frequency-capped, requested as non-personalized, and are skipped when consent is unavailable, an ad is not ready, or an ad fails. Google Mobile Ads and its partners may process device, diagnostic, and ad-interaction information to provide, secure, and measure advertising. Where required, Google's consent form is shown before ads can be requested. No advertising SDK is loaded on the web version.",
  },
  {
    title: "Crash Reports",
    body: "PocketWatch uses Firebase Crashlytics to diagnose reliability problems. Crashlytics may receive crash diagnostics such as stack traces, app/device metadata, and JavaScript runtime failures. App-reported non-fatal failures use fixed descriptions; PocketWatch does not attach search filters or payroll-record fields to these reports. Google processes crash data under its own privacy practices.",
  },
  {
    title: "Changes",
    body: "We may update this policy to reflect changes to the app or our practices, or for operational, legal, or regulatory reasons. The current version will be available on this screen.",
  },
  {
    title: "Contact Us",
    body: "For questions about this policy or our privacy practices, contact us at hello@pocketwatch.ing.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="pb-16 pt-10 sm:pt-12">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(3,19,26,0.45)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
          PocketWatch
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          This Privacy Policy explains what information PocketWatch handles when
          you use the app, how it is used, and when it is shared.
        </p>

        <div className="mt-8 space-y-7">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
            >
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-300">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
