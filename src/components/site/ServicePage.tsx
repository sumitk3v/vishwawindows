import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import {
  Faq,
  Footer,
  Reviews,
  ServiceAreas,
  Services,
  StickyMobileCTA,
} from "@/components/site/Sections";
import { CallButton, WhatsAppButton } from "@/components/site/cta";
import { business, businessPostalAddress } from "@/config/business";

export type ServicePageContent = {
  h1: string;
  title?: string;
  intro: string;
  signs: readonly string[];
  photoTip: string;
  whatsappMessage: string;
  locationKey: string;
  /** Long-form keyword content: each becomes an H2 section. */
  sections?: readonly { h2: string; body: readonly string[] }[];
  /** Service keyword used for per-area H2s, e.g. "Pigeon Net Installation". */
  areaKeyword?: string;
  faqs?: readonly ServiceFaq[];
};

export type ServiceFaq = { q: string; a: string };

const serviceAreaGroups = [
  {
    name: "Powai & Hiranandani",
    text: "Hiranandani Gardens, Lake Homes, IIT Market area and Chandivali, minutes from our workshop.",
  },
  {
    name: "Andheri, Vikhroli & Ghatkopar",
    text: "Lokhandwala, Marol, JB Nagar, Kanjurmarg and Ghatkopar East and West.",
  },
  {
    name: "Bandra, Santacruz & Juhu",
    text: "Sea-facing flats and coastal towers where salt air quickly damages ordinary hardware.",
  },
  {
    name: "Worli, Dadar & South Mumbai",
    text: "High-rise towers in Worli, Lower Parel, Prabhadevi, Colaba and Cuffe Parade.",
  },
  {
    name: "Chembur, Mulund & Bhandup",
    text: "Chembur, Sion, Mulund, Nahur and Bhandup societies.",
  },
  {
    name: "Goregaon & Malad",
    text: "Western suburbs including Goregaon East, Malad and nearby complexes.",
  },
  {
    name: "Kandivali & Borivali",
    text: "Kandivali East and West, Thakur Village, Mahavir Nagar and Borivali societies.",
  },
  {
    name: "Thane",
    text: "Thane West, Ghodbunder Road, Majiwada, Kolshet and Hiranandani Estate high-rises.",
  },
] as const;

export function ServicePage({
  content,
  children,
}: {
  content: ServicePageContent;
  children?: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary px-4 py-12 text-primary-foreground">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              {business.areaLine}
            </p>
            <h1 className="hero-h1 mt-3 text-white">{content.h1}</h1>
            <p className="hero-sub mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/90">
              {content.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                location={content.locationKey}
                message={content.whatsappMessage}
                ariaLabel={`Get free diagnosis for ${content.title || content.h1} on WhatsApp`}
                className="cta-live"
              >
                <span className="flex flex-col items-center leading-tight">
                  <span className="text-sm sm:text-base font-black tracking-tight uppercase text-white font-display">
                    GET MY FREE 15-MIN DIAGNOSIS ➔
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                    Send Photo/Video • 100% Free • No Fix, No Fee
                  </span>
                </span>
              </WhatsAppButton>
              <CallButton
                location={content.locationKey}
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-primary-foreground/60"
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm text-primary-foreground/75 font-medium">
              ✅ No technical knowledge needed. Just show us the problem on WhatsApp.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-h2 text-foreground">
              {content.areaKeyword
                ? `Signs You Need ${content.areaKeyword}`
                : "Signs you may need this repair"}
            </h2>
            <ul className="mt-5 space-y-3">
              {content.signs.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-border bg-card p-4 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-accent/40 bg-accent/10 p-5">
              <h2 className="font-display text-xl font-extrabold">What photo should you send?</h2>
              <p className="mt-2 text-sm text-foreground/80">{content.photoTip}</p>
              <div className="mt-5">
                <WhatsAppButton
                  location={`${content.locationKey}_photo_tip`}
                  message={content.whatsappMessage}
                  ariaLabel={`Get free diagnosis for ${content.title || content.h1} on WhatsApp`}
                  className="cta-live"
                >
                  <span className="flex flex-col items-center leading-tight">
                    <span className="text-sm sm:text-base font-black tracking-tight uppercase text-white font-display">
                      SEND MY PHOTO ON WHATSAPP ➔
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                      Get Instant Technical Opinion
                    </span>
                  </span>
                </WhatsAppButton>
              </div>
            </div>

            {content.sections?.map((s) => (
              <div key={s.h2} className="mt-10">
                <h2 className="section-h2 text-foreground">{s.h2}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-base leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {content.areaKeyword && (
              <div className="mt-10">
                <h2 className="section-h2 text-foreground">{content.areaKeyword} Across Mumbai</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceAreaGroups.map((a) => (
                    <div key={a.name} className="rounded-xl border border-border bg-card p-4">
                      <h3 className="font-bold text-foreground">
                        {content.areaKeyword} in {a.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.faqs && content.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="section-h2 text-foreground">Frequently Asked Questions</h2>
                <div className="mt-5 space-y-4">
                  {content.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-border bg-card p-4">
                      <h3 className="font-bold text-foreground">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {children}
          </div>
        </section>

        <Services />
        <Reviews />
        <ServiceAreas />
        <Faq />

        <section className="bg-navy px-4 py-14 text-primary-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-h2 text-white">GOT A WINDOW PROBLEM? SHOW US. DON'T GUESS.</h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                location={`${content.locationKey}_final`}
                message={content.whatsappMessage}
                ariaLabel={`Get free diagnosis for ${content.title || content.h1} on WhatsApp`}
              />
              <CallButton location={`${content.locationKey}_final`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export function serviceHead({
  title,
  description,
  path,
  serviceName,
  faqs,
}: {
  title: string;
  description: string;
  path: string;
  serviceName: string;
  faqs?: readonly ServiceFaq[];
}) {
  const fullUrl = `${business.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: business.name },
      { property: "og:url", content: fullUrl },
      { property: "og:image", content: `${business.siteUrl}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
    ],
    links: [{ rel: "canonical", href: fullUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          description,
          url: fullUrl,
          areaServed: business.serviceAreas.map((a) => ({
            "@type": "Place",
            name: a === "Thane" ? "Thane" : `${a}, Mumbai`,
          })),
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: business.name,
            url: business.siteUrl,
            telephone: business.phone,
            address: businessPostalAddress,
            hasMap: business.googleBusinessProfileUrl,
            sameAs: [business.googleBusinessProfileUrl],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${business.siteUrl}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: serviceName,
              item: fullUrl,
            },
          ],
        }),
      },
      ...(faqs && faqs.length > 0
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
          ]
        : []),
    ],
  };
}
