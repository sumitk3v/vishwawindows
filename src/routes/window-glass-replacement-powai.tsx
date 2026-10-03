import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Glass Replacement in Powai, Mumbai | Toughened & Sliding Glass";
const description =
  "Cracked or broken window glass? We replace sliding window glass, toughened glass, frosted bathroom glass and balcony door glass in Powai & Mumbai. Send a photo for a price.";

const sections = [
  {
    h2: "Glass We Replace",
    body: [
      "Plain and tinted glass for aluminium sliding windows.",
      "Toughened (tuffen) glass for balcony doors, French windows and partitions.",
      "Frosted and patterned glass for bathroom windows and washroom doors.",
      "Acoustic and laminated glass when you want less noise or extra safety.",
    ],
  },
  {
    h2: "How Window Glass Replacement Works",
    body: [
      "Send a photo of the whole window and the broken panel, with the rough size. We confirm the glass type, thickness and price, then cut it to size at our Powai workshop and fit it with new rubber beading, so it is sealed against rain and does not rattle.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How much does window glass replacement cost?",
    a: "It depends on the size, thickness and type of glass. Send a photo with the rough size on WhatsApp and we will quote before visiting.",
  },
  {
    q: "Do you replace toughened glass?",
    a: "Yes. Toughened glass is cut to size before toughening, so we measure first and fit it on a second visit.",
  },
  {
    q: "Can you replace glass in a sliding door?",
    a: "Yes. We replace glass in sliding windows, balcony sliding doors, French windows and bathroom windows.",
  },
] as const;

export const Route = createFileRoute("/window-glass-replacement-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-glass-replacement-powai",
      serviceName: "Window Glass Replacement",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Window Glass Replacement in Powai & Mumbai",
        intro:
          "Glass is replaced to fit the panel and the frame that holds it. A photo of both, along with the crack, tells us what is involved.",
        signs: [
          "The glass is cracked across the panel",
          "A corner or edge is chipped",
          "The panel has shattered",
          "Glass is loose in the frame or the beading has come out",
          "There is a hole or missing piece",
        ],
        photoTip:
          "Keep a safe distance from broken glass. One photo of the whole window and one of the damaged panel is enough. Mention the rough size if you know it.",
        whatsappMessage:
          "Hi, my window glass is cracked/broken. I am in Powai and sending a photo of the panel and the frame.",
        locationKey: "service_glass",
        sections,
        areaKeyword: "Window Glass Replacement",
        faqs,
      }}
    />
  );
}
