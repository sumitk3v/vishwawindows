import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Glass Balcony Railing in Mumbai | Toughened Glass Railing & Handrail";
const description =
  "Glass balcony railings, toughened glass handrails, SS glass railings and terrace glass railings made to measure and installed across Mumbai. Send a photo for a price.";

const sections = [
  {
    h2: "Glass Railing Designs for Balconies",
    body: [
      "Toughened glass panels with a stainless steel (SS) top handrail.",
      "Glass with SS or aluminium posts and clamps.",
      "Frameless glass railing in a base channel for a clean, modern look.",
      "Clear, frosted or tinted glass for privacy where needed.",
    ],
  },
  {
    h2: "Safety First: Toughened Glass",
    body: [
      "We use only toughened safety glass of the right thickness for railings, with stainless steel fittings that do not rust in Mumbai's humid, salty air.",
    ],
  },
  {
    h2: "Glass Balcony Railing Price",
    body: [
      "The price is usually per running foot or square foot and depends on glass thickness, fittings and handrail type. Send a photo and rough length for an exact quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Is a glass balcony railing safe?",
    a: "Yes. We use toughened safety glass of the right thickness with strong stainless steel fittings, fixed firmly to the slab or wall.",
  },
  {
    q: "How much does a glass railing cost in Mumbai?",
    a: "It depends on length, glass thickness and fittings. Send a photo with the rough length on WhatsApp for a quote.",
  },
  {
    q: "Do you make terrace and staircase glass railings too?",
    a: "Yes. We install glass railings and handrails on balconies, terraces and staircases.",
  },
] as const;

export const Route = createFileRoute("/glass-balcony-railing-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/glass-balcony-railing-mumbai",
      serviceName: "Glass Balcony Railing",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Glass Balcony Railing & Handrail in Mumbai",
        intro:
          "Replace a heavy, rusted balcony railing with clean toughened glass. We fit glass balcony railings with stainless steel or aluminium handrails and fittings, so your balcony stays safe and the view stays open.",
        signs: [
          "Old MS or iron balcony railing rusted and needing paint every year",
          "Want an open view from a sea-facing or high-floor balcony",
          "Renovating and want a modern glass railing design",
          "Terrace or staircase needs a safe glass handrail",
          "Existing glass railing loose or fittings rusting",
        ],
        photoTip:
          "Send a photo of the balcony edge or staircase with the rough length and height. Tell us if you prefer clear, frosted or tinted glass.",
        whatsappMessage: "Hi, I need a glass balcony railing in Mumbai. Sending a photo.",
        locationKey: "service_glass_balcony_railing_mumbai",
        sections,
        areaKeyword: "Glass Balcony Railing",
        faqs,
      }}
    />
  );
}
