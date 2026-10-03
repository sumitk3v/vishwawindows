import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Kitchen Cupboard & Cabinet in Mumbai | Waterproof Kitchen";
const description =
  "Aluminium kitchen cupboards, cabinets, trolleys and shutters made to measure in our Powai workshop and fitted across Mumbai. Waterproof and termite-proof. Send a photo for a price.";

const sections = [
  {
    h2: "Why Choose an Aluminium Kitchen Cupboard?",
    body: [
      "Aluminium does not swell, rot or get termites, so an aluminium kitchen cabinet stays strong even under the sink and near the washing area. It is easy to clean and costs less than a full modular kitchen.",
    ],
  },
  {
    h2: "What We Make",
    body: [
      "Under-platform kitchen cabinets and trolleys.",
      "Wall-mounted kitchen cupboards with ACP, glass or louvre shutters.",
      "Utility and balcony cupboards.",
      "Aluminium wardrobes and storage units.",
    ],
  },
  {
    h2: "Aluminium Kitchen Cupboard Price",
    body: [
      "The price depends on size, shutter type and fittings. Send a photo and rough measurements on WhatsApp for a quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Is aluminium good for kitchen cupboards?",
    a: "Yes. It is waterproof and termite-proof, which makes it ideal for Mumbai kitchens, especially under the sink.",
  },
  {
    q: "Can you make aluminium cupboards in a small kitchen?",
    a: "Yes. Everything is made to measure in our Powai workshop to fit your platform exactly.",
  },
  {
    q: "Do you also make aluminium wardrobes?",
    a: "Yes. We make aluminium wardrobes and storage cupboards too.",
  },
] as const;

export const Route = createFileRoute("/aluminium-kitchen-cupboard-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-kitchen-cupboard-mumbai",
      serviceName: "Aluminium Kitchen Cupboard",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Aluminium Kitchen Cupboards & Cabinets in Mumbai",
        intro:
          "Tired of plywood kitchen cabinets swelling and getting termites under the sink? We make aluminium kitchen cupboards, cabinets and trolleys with ACP or glass shutters, waterproof and built to last in Mumbai's humidity.",
        signs: [
          "Plywood cabinet under the sink swollen or rotting",
          "Termites in the kitchen cupboards",
          "Shutters sagging, hinges loose or drawers stuck",
          "Renovating the kitchen on a budget",
          "Need a utility or balcony cupboard that can take water",
        ],
        photoTip:
          "Send a photo of your kitchen platform and the area for the cupboards, with rough length and height.",
        whatsappMessage:
          "Hi, I need aluminium kitchen cupboards in Mumbai. Sending a photo of my kitchen.",
        locationKey: "service_aluminium_kitchen_cupboard_mumbai",
        sections,
        areaKeyword: "Aluminium Kitchen Cupboard",
        faqs,
      }}
    />
  );
}
