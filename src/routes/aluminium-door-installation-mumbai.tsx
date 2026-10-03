import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Bathroom Door & Washroom Door in Powai, Mumbai";
const description =
  "Aluminium bathroom doors, washroom doors, aluminium sliding doors and balcony doors made and fitted in Powai & across Mumbai. Waterproof and termite-proof. Send a photo for a price.";

const sections = [
  {
    h2: "Aluminium Bathroom Door: Why It Beats Wood and PVC",
    body: [
      "Wooden bathroom doors swell, rot and attract termites in Mumbai's humidity, and cheap PVC doors crack and sag. An aluminium washroom door is waterproof, does not rust or rot, and stays straight for years.",
      "We make each bathroom door to measure in our Powai workshop, with ACP, frosted glass or louvre panels and a powder-coated or anodised finish.",
    ],
  },
  {
    h2: "Aluminium Doors We Make",
    body: [
      "Aluminium bathroom and washroom doors (swing or sliding).",
      "Sliding doors for washrooms, kitchens and utility areas.",
      "Aluminium glass doors for balconies and terraces.",
      "Doors for shops, offices and clinics.",
    ],
  },
  {
    h2: "Bathroom Door Price",
    body: [
      "The price depends on size, panel type (ACP, frosted glass or louvres), finish and lock. Send a photo of the door opening with rough width and height and we share a quote on WhatsApp.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Is an aluminium door good for a bathroom?",
    a: "Yes. Aluminium does not swell, rot or get termites, so it is one of the best materials for bathroom and washroom doors in Mumbai.",
  },
  {
    q: "Can you replace my old wooden bathroom door with aluminium?",
    a: "Yes. We remove the old door and fit a new aluminium door and frame, usually without breaking the wall.",
  },
  {
    q: "Do you make sliding doors for washrooms?",
    a: "Yes. A sliding washroom door saves space in small bathrooms. Send a photo of the opening and we will advise.",
  },
  {
    q: "How long does it take?",
    a: "Measurement, fabrication at our workshop and fitting usually take a few days.",
  },
] as const;

export const Route = createFileRoute("/aluminium-door-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-door-installation-mumbai",
      serviceName: "Aluminium Doors & Bathroom Doors",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Aluminium Bathroom Doors & Washroom Doors in Mumbai",
        intro:
          "Wooden bathroom doors swell, rot and get termites in Mumbai's humidity. We fabricate aluminium bathroom doors, sliding glass balcony doors and swing doors in our Powai workshop, with powder-coated or anodized finishes, ACP or frosted glass panels, and proper locks and hinges.",
        signs: [
          "Wooden bathroom door swollen, rotting or eaten by termites",
          "Old balcony door heavy, rusted or letting in rain",
          "Want a sliding glass door for a balcony or kitchen",
          "Need a waterproof door for a utility area or terrace",
          "Existing aluminium door hinges, closer or lock failing",
        ],
        photoTip:
          "Send a photo of the door opening and the current door, along with the rough width and height. Tell us whether you want a sliding or swing door.",
        whatsappMessage:
          "Hi, I need an aluminium door / bathroom door in Mumbai. Sending a photo of the opening.",
        locationKey: "service_aluminium_door_installation_mumbai",
        sections,
        areaKeyword: "Aluminium Bathroom Door",
        faqs,
      }}
    />
  );
}
