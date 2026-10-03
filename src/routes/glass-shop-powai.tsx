import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Glass Shop Near Me in Powai, Mumbai | Toughened Glass & Window Glass";
const description =
  "Glass shop at IIT Market, Powai: toughened (tuffen) glass, window glass, frosted bathroom glass, mirrors and glass doors, cut to size and fitted across Mumbai. Send a photo for a price.";

const sections = [
  {
    h2: "Toughened Glass in Mumbai",
    body: [
      "Toughened glass (often called tuffen or tafan glass) is heat-treated to be about four to five times stronger than ordinary glass. If it breaks, it breaks into small blunt pieces instead of sharp shards. It is the right choice for glass doors, partitions, shower enclosures, balcony panels and large windows.",
      "Toughened glass cannot be cut after it is made, so we measure on site, order it to the exact size and fit it on a second visit.",
    ],
  },
  {
    h2: "Glass We Supply and Fit",
    body: [
      "Clear, tinted and reflective window glass.",
      "Toughened glass in common thicknesses for doors, partitions and enclosures.",
      "Frosted and patterned glass for bathrooms and privacy.",
      "Laminated and acoustic glass for safety and noise reduction.",
      "Mirrors and glass shelves cut to size.",
    ],
  },
  {
    h2: "Toughened Glass Price",
    body: [
      "Toughened glass is priced per square foot, based on thickness, edge finishing and any holes or cut-outs. Send the size and use on WhatsApp for an exact price.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Where is your glass shop?",
    a: "Our workshop is at Shop S/159/160, IIT Market, near IIT Bombay, Powai, Mumbai 400076. We also visit sites across Mumbai to measure and fit.",
  },
  {
    q: "What is the price of toughened glass?",
    a: "It depends on thickness, size, edge finish and cut-outs. Send the size on WhatsApp for a quote.",
  },
  {
    q: "Do you fit the glass or only sell it?",
    a: "We measure, supply and fit, including the rubber beading, so the glass sits firmly and stays sealed.",
  },
  {
    q: "Can toughened glass be cut to size later?",
    a: "No. Toughened glass must be cut before toughening, which is why we measure on site first.",
  },
] as const;

export const Route = createFileRoute("/glass-shop-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/glass-shop-powai",
      serviceName: "Glass Shop & Toughened Glass Work",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Glass Shop in Powai: Toughened Glass, Window Glass & Fitting",
        intro:
          "Need glass cut and fitted, not just sold? Our workshop at IIT Market, Powai supplies and fits window glass, toughened glass, frosted bathroom glass and glass doors, measured on site so it fits first time.",
        signs: [
          "Broken or cracked window or balcony door glass",
          "Need toughened glass for a door, partition or railing",
          "Want frosted glass for a bathroom window or washroom door",
          "Need a glass top, shelf or mirror cut to size",
          "Old glass rattling or leaking in the frame",
        ],
        photoTip:
          "Send a photo of where the glass goes and the rough size. Tell us if it is for a window, door, partition or table top.",
        whatsappMessage: "Hi, I need glass work in Mumbai. Sending a photo and rough size.",
        locationKey: "service_glass_shop_powai",
        sections,
        areaKeyword: "Glass Work",
        faqs,
      }}
    />
  );
}
