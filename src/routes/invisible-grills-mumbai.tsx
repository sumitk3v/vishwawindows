import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Invisible Grill & Balcony Safety Grill in Powai, Mumbai | SS316";
const description =
  "Invisible grill, balcony grill & balcony safety grill for windows in Powai, Hiranandani, Chandivali & across Mumbai. Stainless steel SS316 cables, child-safe, rust-proof. Send a photo for a per sq. ft. price.";

const sections = [
  {
    h2: "What Is an Invisible Grill?",
    body: [
      "An invisible grill is a set of thin, high-tensile stainless steel cables fixed vertically across a balcony or window at small spacing. It works as a child safety and pet safety barrier while staying almost invisible, so you keep your full view, light and breeze. Invisible grills are now the most popular balcony safety option in Mumbai high-rises.",
      "Unlike heavy MS iron grills, an invisible grill does not rust, does not need painting and does not make your flat look like a cage.",
    ],
  },
  {
    h2: "Invisible Grill for Balcony vs Window",
    body: [
      "Invisible grill for balcony: full-height cables across open balconies and French windows, ideal for families with small children and pets.",
      "Invisible grill for windows: fitted on sliding and casement window openings so windows can stay open safely.",
      "We use SS316 marine-grade stainless steel cable with a nylon coating, which suits Mumbai's humid and coastal air.",
    ],
  },
  {
    h2: "Balcony Grill & Balcony Safety Grill: Old vs Invisible",
    body: [
      "A traditional balcony grill is a heavy iron or MS box grill welded across the balcony. It blocks the view, rusts in Mumbai's humid air and needs painting every few years. A balcony safety grill made of stainless steel invisible cables gives the same child and pet safety but keeps the balcony open and bright, and does not rust.",
      "We install invisible balcony safety grills on new balconies and also replace old iron balcony grills with invisible grills in existing flats.",
    ],
  },
  {
    h2: "Invisible Grill Price per Sq Ft in Mumbai",
    body: [
      "Invisible grill price is charged per square foot and depends on the steel grade, cable thickness and spacing, total area and floor height. Send a photo of your balcony or window on WhatsApp with the approximate width and height and we will share the exact per sq. ft. price before the measurement visit.",
    ],
  },
  {
    h2: "Why Choose Vishwa Windows for Invisible Grills",
    body: [
      "We are a Powai-based aluminium workshop, so the aluminium top and bottom channels are fabricated and fixed properly into your frame or wall. Installation is clean, fast and without civil work.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How much does an invisible grill cost in Mumbai?",
    a: "Invisible grill price is per square foot and depends on the steel grade, cable spacing, area and floor height. Send a photo with the size on WhatsApp for an exact quote.",
  },
  {
    q: "Is an invisible grill strong enough for children?",
    a: "Yes. Each stainless steel cable is high tensile and fixed under tension at close spacing, designed as a child safety barrier for high-rise balconies and windows.",
  },
  {
    q: "Is an invisible grill better than a normal balcony grill?",
    a: "For most high-rise flats, yes. An invisible balcony safety grill gives the same protection as an iron balcony grill without blocking the view, and it does not rust or need painting.",
  },
  {
    q: "Will an invisible grill rust?",
    a: "We use SS316 marine-grade stainless steel, which resists rust in Mumbai's humid and coastal air.",
  },
  {
    q: "Can pigeons get through an invisible grill?",
    a: "An invisible grill is a safety barrier, not a bird barrier. If pigeons are a problem we can add a pigeon net along with the invisible grill.",
  },
  {
    q: "Do you install invisible grills in Powai and Hiranandani?",
    a: "Yes. We are based at IIT Market, Powai and install invisible grills across Hiranandani, Chandivali, Andheri and all of Mumbai.",
  },
] as const;

export const Route = createFileRoute("/invisible-grills-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/invisible-grills-mumbai",
      serviceName: "Invisible Grills",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Invisible Grill for Balcony & Windows in Mumbai",
        intro:
          "Keep your kids and pets safe on a high-rise balcony without boxing yourself in behind an ugly iron grill. Our invisible grills use SS316 marine-grade stainless steel cables with a nylon coating, so you keep your full view and breeze, and the cables don't rust in Mumbai's sea air.",
        signs: [
          "Small children or pets at home in a high-rise flat",
          "Society does not allow, or you don't want, heavy MS iron grills",
          "Old iron grill rusting, staining walls and blocking the view",
          "Open balcony or French window with no safety barrier",
          "Want a safety barrier on windows without losing light and airflow",
        ],
        photoTip:
          "Send a photo of the full balcony or window opening from inside, and tell us the floor number and the approximate width and height. We will share a per sq. ft. estimate before the measurement visit.",
        whatsappMessage:
          "Hi, I need invisible grill installation in Mumbai. Sending a photo of my balcony/window.",
        locationKey: "service_invisible_grills_mumbai",
        sections,
        areaKeyword: "Invisible Grill Installation",
        faqs,
      }}
    />
  );
}
