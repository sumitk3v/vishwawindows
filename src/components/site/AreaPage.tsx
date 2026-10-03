import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import {
  Faq,
  Footer,
  Reviews,
  ServiceAreas,
  Services,
  StickyMobileCTA,
  WhyChooseUs,
  WorkGallery,
} from "@/components/site/Sections";
import { CallButton, WhatsAppButton } from "@/components/site/cta";
import { business, businessPostalAddress, serviceCategories } from "@/config/business";
import { CheckCircle2, ShieldCheck, Clock, Wrench, ArrowRight } from "lucide-react";

/** Highest-search services, each given an area-specific H3 on every area page. */
const topAreaServices = [
  {
    name: "Pigeon Net",
    path: "/pigeon-net-installation-mumbai",
    text: (a: string) =>
      `Pigeon net (kabutar jali) and bird net for balconies, windows and AC ledges in ${a}. UV-stabilized, tight-fitted, priced per sq. ft.`,
  },
  {
    name: "Invisible Grill",
    path: "/invisible-grills-mumbai",
    text: (a: string) =>
      `Stainless steel invisible grill and balcony safety grill for flats in ${a}. Child-safe, rust-proof and keeps your view open.`,
  },
  {
    name: "Sliding Window Repair",
    path: "/sliding-window-repair-powai",
    text: (a: string) =>
      `Stuck, heavy or noisy sliding windows in ${a} fixed with new rollers, tracks and locks, usually in one visit.`,
  },
  {
    name: "New Aluminium Sliding Windows",
    path: "/new-window-installation-mumbai",
    text: (a: string) =>
      `2-track and 3-track aluminium and Domal sliding windows made in our Powai workshop and fitted in ${a}.`,
  },
  {
    name: "French Windows",
    path: "/french-windows-mumbai",
    text: (a: string) =>
      `Floor-to-ceiling French windows and sliding folding doors for balconies in ${a}.`,
  },
  {
    name: "Aluminium Bathroom Door",
    path: "/aluminium-door-installation-mumbai",
    text: (a: string) =>
      `Waterproof, termite-proof aluminium bathroom and washroom doors made to measure for homes in ${a}.`,
  },
  {
    name: "Glass Work & Toughened Glass",
    path: "/glass-shop-powai",
    text: (a: string) =>
      `Window glass, toughened glass, shower partitions and glass railings measured and fitted in ${a}.`,
  },
  {
    name: "Mosquito Net for Sliding Window",
    path: "/mosquito-net-sliding-window-mumbai",
    text: (a: string) =>
      `Sliding, pleated and fixed mosquito nets fitted to existing aluminium windows in ${a}.`,
  },
] as const;

const areaServiceLinks = (
  serviceCategories.flatMap((c) => [...c.items]) as ReadonlyArray<{ name: string; path?: string }>
)
  .filter((s): s is { name: string; path: string } => Boolean(s.path))
  .filter((s, i, all) => all.findIndex((x) => x.path === s.path) === i);

export type AreaPageContent = {
  areaName: string;
  slug: string;
  h1: string;
  intro: string;
  popularComplexes?: string[];
  commonIssues: readonly string[];
  whatsappMessage: string;
  locationKey: string;
};

export function AreaPage({
  content,
  children,
}: {
  content: AreaPageContent;
  children?: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary px-4 py-12 sm:py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/30 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Serving {content.areaName}, Mumbai
            </div>
            <h1 className="hero-h1 text-white">{content.h1}</h1>
            <p className="hero-sub mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                location={content.locationKey}
                message={content.whatsappMessage}
                ariaLabel={`Get free window repair diagnosis in ${content.areaName} on WhatsApp`}
                className="cta-live"
              >
                <span className="flex flex-col items-center leading-tight">
                  <span className="text-sm sm:text-base font-black tracking-tight uppercase text-white font-display">
                    GET FREE ESTIMATE IN {content.areaName.toUpperCase()} ➔
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                    Send Photo • 100% Free • No Fix, No Fee
                  </span>
                </span>
              </WhatsAppButton>
              <CallButton
                location={content.locationKey}
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-primary-foreground/60"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> 100% No-Fix-No-Fee Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" /> 45-Min Doorstep Service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-blue-400" /> 6-Month Service Warranty
              </span>
            </div>
          </div>
        </section>

        {/* Services & Problems in this Area */}
        <section className="px-4 py-14 bg-background">
          <div className="mx-auto max-w-4xl">
            <div className="text-center sm:text-left">
              <h2 className="section-h2 text-foreground">
                Common Window & Door Problems We Solve in {content.areaName}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Don't let local carpenters convince you to replace your entire frame for ₹15,000+.
                We restore them to factory-smooth glide for a fraction of the cost.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.commonIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm hover:border-primary/40 transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-snug">{issue}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Quick on-site hardware replacement without breaking walls or civil mess.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Tip Box */}
            <div className="mt-10 rounded-2xl border-2 border-accent/40 bg-accent/10 p-6 sm:p-8 text-center sm:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                How It Works: Show Us The Problem
              </h3>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed max-w-2xl">
                Take a quick 5-second video or photo of your window/door track on your phone and
                send it to our technicians on WhatsApp. We diagnose the issue and give you upfront
                pricing before visiting.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  location={`${content.locationKey}_photo_box`}
                  message={content.whatsappMessage}
                  ariaLabel={`Get free window repair diagnosis in ${content.areaName} on WhatsApp`}
                  className="cta-live"
                >
                  <span className="flex flex-col items-center leading-tight">
                    <span className="text-sm sm:text-base font-black tracking-tight uppercase text-white font-display">
                      SEND MY PHOTO ON WHATSAPP ➔
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                      Instant Diagnosis & Upfront Fixed Price
                    </span>
                  </span>
                </WhatsAppButton>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="section-h2 text-foreground">
                Looking for Window Repair Near Me in {content.areaName}?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                {business.name} is an aluminium and glass workshop at IIT Market, Powai, and our
                technicians visit homes, societies and offices in {content.areaName} every week. We
                repair stuck sliding windows and sliding doors, replace rollers, locks and broken
                glass, and install pigeon nets, invisible grills, mosquito nets, aluminium bathroom
                doors, glass partitions and new aluminium sliding windows.
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                Send a photo or short video on WhatsApp. We tell you what is wrong and what it will
                cost before anyone visits, so you never pay for a wasted trip.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="section-h2 text-foreground">Popular Services in {content.areaName}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {topAreaServices.map((s) => (
                  <a
                    key={s.path}
                    href={s.path}
                    className="rounded-xl border border-border bg-card p-4 hover:border-primary/40"
                  >
                    <h3 className="font-bold text-foreground">
                      {s.name} in {content.areaName}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text(content.areaName)}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="section-h2 text-foreground">Our Services in {content.areaName}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {areaServiceLinks.map((s) => (
                  <li key={s.path}>
                    <a
                      href={s.path}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground hover:border-primary/40"
                    >
                      <span>
                        {s.name} in {content.areaName}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {children}
          </div>
        </section>

        <Services />
        <WhyChooseUs />
        <Reviews />
        <WorkGallery />
        <ServiceAreas />
        <Faq />

        {/* Final CTA */}
        <section className="bg-navy px-4 py-16 text-primary-foreground text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-h2 text-white">
              NEED WINDOW REPAIR IN {content.areaName.toUpperCase()}?
            </h2>
            <p className="mt-3 text-base text-primary-foreground/80">
              Message us right now on WhatsApp. Send a photo and get expert assistance within
              minutes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
              <WhatsAppButton
                location={`${content.locationKey}_bottom_cta`}
                message={content.whatsappMessage}
                ariaLabel={`Get free window repair diagnosis in ${content.areaName} on WhatsApp`}
              />
              <CallButton location={`${content.locationKey}_bottom_cta`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export function areaHead({
  title,
  description,
  path,
  areaName,
}: {
  title: string;
  description: string;
  path: string;
  areaName: string;
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
          name: `Window repair, invisible grills & pigeon nets in ${areaName}`,
          description,
          url: fullUrl,
          areaServed: {
            "@type": "Place",
            name: areaName === "Thane" ? "Thane" : `${areaName}, Mumbai`,
          },
          provider: {
            "@type": "HomeAndConstructionBusiness",
            name: business.name,
            url: business.siteUrl,
            telephone: business.phone,
            priceRange: "₹₹",
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
              name: `${areaName} Window Repair`,
              item: fullUrl,
            },
          ],
        }),
      },
    ],
  };
}
