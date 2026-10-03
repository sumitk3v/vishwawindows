import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Faq,
  FinalCTA,
  Footer,
  HowItWorks,
  NoNeedToKnow,
  Offer,
  ProblemSelector,
  Reviews,
  ServiceAreas,
  Services,
  StickyMobileCTA,
  WhyChooseUs,
  WorkGallery,
  UsVsThem,
  Disqualifiers,
  Benefits,
  FoundersStory,
  RealWorkGallery,
} from "@/components/site/Sections";
import { faqs } from "@/config/business";
import { business, businessPostalAddress } from "@/config/business";
import heroVideo from "@/assets/videos/hero-sliding-window-pigeon-net-installation-mumbai.mp4";
import heroPoster from "@/assets/images/hero-sliding-window-pigeon-net-installation-mumbai.jpg";

const title = "Window Repair Near Me in Powai, Mumbai | Sliding Windows, Pigeon Nets";
const description =
  "Sliding window repair, new aluminium sliding windows, pigeon nets, invisible grills, toughened glass, bathroom doors & partitions from our IIT Market, Powai workshop. Free WhatsApp estimate.";
const liveUrl = business.siteUrl;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: business.name },
      { property: "og:url", content: liveUrl },
      { property: "og:image", content: `${liveUrl}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
    ],
    links: [
      { rel: "canonical", href: `${liveUrl}/` },
      { rel: "preload", as: "image", href: heroPoster, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: business.name,
          image: `${liveUrl}${heroPoster}`,
          description,
          url: liveUrl,
          telephone: business.phone,
          priceRange: "₹₹",
          areaServed: business.serviceAreas.map((a) => ({
            "@type": "Place",
            name: a === "Thane" ? "Thane" : `${a}, Mumbai`,
          })),
          address: businessPostalAddress,
          hasMap: business.googleBusinessProfileUrl,
          sameAs: [
            business.googleBusinessProfileUrl,
            "https://www.facebook.com/vishwawindows",
            "https://www.instagram.com/vishwawindows",
          ],
          ...(business.hours ? { openingHours: business.hours } : {}),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Phase 1: Hook, Agitation & The Epiphany */}
        <Hero />
        <ProblemSelector />
        <FoundersStory />
        <UsVsThem />

        {/* Phase 2: The Godfather Offer & Solution */}
        <Offer />
        <Benefits />
        <HowItWorks />
        <NoNeedToKnow />

        {/* Phase 3: Avalanche of Proof */}
        <RealWorkGallery />
        <Reviews />
        <WorkGallery />

        {/* Phase 4: Logical Justification & Takeaway */}
        <Services />
        <WhyChooseUs />
        <Disqualifiers />

        {/* Phase 5: Closing */}
        <ServiceAreas />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
