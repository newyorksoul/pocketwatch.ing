import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "PocketWatch terms of service covering public data use, government non-affiliation, and service limits.",
};

const sections = [
  {
    title: "Intellectual Property and Public Data",
    body: "PocketWatch and its original software, design, content, features, and functionality are owned by Isle Byte LLC and are protected by applicable intellectual-property laws. Public payroll information currently available in PocketWatch comes from open-data programs published by the City of New York and New York State. Those records remain subject to the source agencies’ terms and may be changed by those agencies.",
  },
  {
    title: "Government Non-Affiliation",
    body: "POCKETWATCH IS AN INDEPENDENT APPLICATION. ISLE BYTE LLC IS NOT AFFILIATED WITH, ENDORSED BY, SPONSORED BY, OR ACTING ON BEHALF OF ANY GOVERNMENT OR GOVERNMENT AGENCY.",
  },
  {
    title: "Informational Use; No Warranty",
    body: "PocketWatch is provided for informational and transparency purposes only. Public records may be delayed, incomplete, or corrected after publication. We do not guarantee the accuracy, completeness, or currency of information shown in the app. The service and its content are provided on an “as available” basis, without warranties to the fullest extent permitted by law. You use the information at your own discretion and risk and are responsible for decisions you make based on it.",
  },
  {
    title: "Prohibited Activities",
    body: "You agree not to use PocketWatch to: violate applicable laws or regulations; infringe intellectual-property or other rights; upload or transmit viruses or other malicious code; collect or track another person’s personal information without consent; interfere with or disrupt the service; or harass, doxx, or target individuals for harm.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, Isle Byte LLC will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of, or inability to use, PocketWatch. Nothing in these terms limits liability where such limitation is prohibited by law.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the State of New York, without regard to its conflict-of-law rules. Any dispute will be brought in a court of competent jurisdiction in New York, subject to applicable law.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time for operational, legal, or regulatory reasons. Updated terms will be posted on this screen. Where required by law, we will provide notice or obtain consent to material changes. Continued use after updated terms take effect constitutes acceptance where permitted by law.",
  },
  {
    title: "Contact Us",
    body: "Questions about these terms may be sent to legal@islebyte.co.",
  },
];

export default function TermsPage() {
  return (
    <main className="pb-16 pt-10 sm:pt-12">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(3,19,26,0.45)] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 uppercase">
          PocketWatch
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          These terms govern your use of the PocketWatch website and mobile
          application, developed by Isle Byte LLC. By downloading, installing,
          or using PocketWatch, you agree to these terms. If you do not agree,
          do not use the service.
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
