import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Shower Glass Partition & Bathroom Glass Partition in Mumbai";
const description =
  "Shower glass partitions, bathroom glass separators and glass shower doors in toughened glass, made to measure and fitted across Mumbai. Send a photo of your bathroom for a price.";

const sections = [
  {
    h2: "Types of Shower Glass Partitions",
    body: [
      "Fixed glass panel (walk-in) separators.",
      "Hinged glass shower doors.",
      "Sliding glass shower doors for small bathrooms.",
      "Clear, frosted or patterned toughened glass.",
    ],
  },
  {
    h2: "Safety First: Toughened Glass Only",
    body: [
      "All bathroom glass partitions we fit use toughened safety glass with stainless steel hinges, clamps and profiles that do not rust in humid bathrooms.",
    ],
  },
  {
    h2: "Bathroom Glass Partition Price",
    body: [
      "Price depends on the glass area and thickness, the type of door and the fittings. Send a photo and rough size for an exact quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How long does a shower partition take?",
    a: "We measure first, the toughened glass is made to size, and fitting usually takes a few hours.",
  },
  {
    q: "Is a glass shower partition safe?",
    a: "Yes. We only use toughened safety glass, which breaks into small blunt pieces if it ever breaks.",
  },
  {
    q: "Do you make office glass partitions too?",
    a: "Yes. See our aluminium and glass office partition service.",
  },
] as const;

export const Route = createFileRoute("/glass-partition-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/glass-partition-mumbai",
      serviceName: "Bathroom & Shower Glass Partition",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Shower & Bathroom Glass Partitions in Mumbai",
        intro:
          "Keep the wet area wet and the rest of the bathroom dry. We fit toughened glass shower partitions, bathroom separators and glass shower doors with stainless steel fittings, measured to your bathroom.",
        signs: [
          "Water splashes over the whole bathroom floor",
          "Old shower curtain that stays wet and grows mould",
          "Want a modern glass shower area in a renovation",
          "Need a sliding glass shower door for a small bathroom",
          "Existing shower glass loose or fittings rusting",
        ],
        photoTip:
          "Send a photo of the bathroom showing where the shower is, with the rough width and height of the area to cover.",
        whatsappMessage:
          "Hi, I need a shower / bathroom glass partition in Mumbai. Sending a photo.",
        locationKey: "service_glass_partition_mumbai",
        sections,
        areaKeyword: "Bathroom Glass Partition",
        faqs,
      }}
    />
  );
}
