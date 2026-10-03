import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Partition & Glass Partition for Office in Mumbai | Cabins";
const description =
  "Aluminium partitions, glass partitions for offices, cabins, shop and clinic partitions and sliding partition doors in Powai, Andheri, BKC & across Mumbai. Made to measure.";

const sections = [
  {
    h2: "Office Glass Partitions and Cabins",
    body: [
      "An aluminium partition with toughened glass divides an office into cabins and meeting rooms without brickwork, and keeps the space bright. We build full-height glass partitions, half-glass and half-panel partitions, and frosted or film-finished cabins for privacy.",
    ],
  },
  {
    h2: "Partitions for Shops, Clinics and Homes",
    body: [
      "Shop counters and display partitions, clinic and consultation room partitions, and room dividers at home. We also fit sliding partition doors and swing glass doors within the partition.",
    ],
  },
  {
    h2: "Aluminium Partition Price",
    body: [
      "Partitions are priced per square foot, depending on glass type, panel type and section. Send a photo or sketch with rough sizes and we share a quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How long does an office partition take to install?",
    a: "Small cabins are usually fitted in one to two days after fabrication, with minimal disruption to your work.",
  },
  {
    q: "Can I get frosted glass for privacy?",
    a: "Yes. We use frosted glass or frosted film, fully or in bands.",
  },
  {
    q: "Do you repair old partitions too?",
    a: "Yes. See our aluminium partition repair service for loose frames, floor springs and doors.",
  },
] as const;

export const Route = createFileRoute("/aluminium-partition-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-partition-installation-mumbai",
      serviceName: "Aluminium & Glass Partitions",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Aluminium & Glass Partitions for Offices, Shops & Homes in Mumbai",
        intro:
          "We fabricate and install aluminium partitions with toughened glass, frosted film or ACP/board panels, including office cabins, conference rooms, shop counters and home room dividers. Everything is made to measure in our Powai workshop and fitted with minimal disruption to your work.",
        signs: [
          "New office needs cabins or a conference room",
          "Want to split a large room without civil brickwork",
          "Shop or clinic needs a glass partition or counter",
          "Old partition loose, damaged or looking outdated",
          "Need a sliding or swing glass door in a partition",
        ],
        photoTip:
          "Send a photo or rough sketch of the space with approximate length and height, and tell us whether you want clear glass, frosted glass or solid panels.",
        whatsappMessage:
          "Hi, I need an aluminium / glass partition in Mumbai. Sending photo of the space.",
        locationKey: "service_aluminium_partition_installation_mumbai",
        sections,
        areaKeyword: "Aluminium Partition",
        faqs,
      }}
    />
  );
}
