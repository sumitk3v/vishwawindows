import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "French Windows in Powai, Mumbai | Sliding Folding Doors & Balcony Glass";
const description =
  "Aluminium French windows, sliding folding doors and balcony glass enclosures custom made in our Powai workshop and installed across Mumbai. Send a photo of your opening for a price.";

const sections = [
  {
    h2: "What Is a French Window?",
    body: [
      "A French window is a tall, full-height glass window that opens like a door, usually from floor to ceiling, onto a balcony or deck. In Mumbai flats, aluminium French windows are the most popular choice because they bring in maximum light and view while standing up to humidity and monsoon rain.",
      "We make aluminium French windows in sliding and openable styles, with clear, toughened or acoustic glass and powder-coated or anodized frames in white, black, brown or silver.",
    ],
  },
  {
    h2: "Sliding Folding Doors",
    body: [
      "A sliding folding door (also called a foldable sliding door or slide and fold door) has glass panels that fold back to one side, opening the full width of a balcony or room. It is ideal when you want the balcony to feel like part of the living room.",
    ],
  },
  {
    h2: "Balcony Glass Enclosure",
    body: [
      "A balcony glass enclosure closes an open balcony with aluminium sliding or French glass panels. It keeps out rain, dust, noise and pigeons and turns the balcony into usable space all year.",
    ],
  },
  {
    h2: "French Window Price in Mumbai",
    body: [
      "French window price is charged per square foot and depends on the aluminium section, glass type and thickness, hardware and the size of the opening. Send a photo with the approximate width and height on WhatsApp for an exact quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "What is the price of an aluminium French window in Mumbai?",
    a: "French windows are priced per square foot depending on the aluminium section, glass type and hardware. Send a photo and size on WhatsApp for an exact quote.",
  },
  {
    q: "Are aluminium French windows good for Mumbai weather?",
    a: "Yes. Aluminium does not rot or swell like wood, and with proper rubber gaskets and sealing it handles monsoon rain and humidity well.",
  },
  {
    q: "Can you convert my old window into a French window?",
    a: "Yes. We can replace a small window or balcony opening with a full-height aluminium French window, depending on your society's rules and the structure.",
  },
  {
    q: "What is the difference between a French window and a sliding folding door?",
    a: "A French window has large glass panels that slide or open like a door. A sliding folding door has panels that fold to one side to open the full width.",
  },
] as const;

export const Route = createFileRoute("/french-windows-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/french-windows-mumbai",
      serviceName: "French Windows & Sliding Folding Doors",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "French Windows & Sliding Folding Doors in Mumbai",
        intro:
          "Turn a small window or an open balcony into full-height glass with floor-to-ceiling aluminium French windows, space-saving sliding folding doors, or a sealed balcony glass enclosure that keeps out rain, dust and pigeons. Everything is measured and fabricated in our Powai workshop with powder-coated or anodized finishes.",
        signs: [
          "Want a floor-to-ceiling French window instead of a small old window",
          "Open balcony getting rain, dust and pigeons inside",
          "Need a sliding folding door that opens the full width of a balcony or room",
          "Old wooden or iron French window rotting or rusting",
          "Want more light and a view without losing safety",
        ],
        photoTip:
          "Send a photo of the full opening from inside and outside, with the rough width and height and the floor number. Tell us whether you want French windows, a sliding folding door or a full balcony enclosure.",
        whatsappMessage:
          "Hi, I want French windows / a sliding folding door / balcony glass enclosure in Mumbai. Sending a photo of the opening.",
        locationKey: "service_french_windows_mumbai",
        sections,
        areaKeyword: "French Windows",
        faqs,
      }}
    />
  );
}
