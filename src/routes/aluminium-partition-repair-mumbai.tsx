import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Partition, Glass Door & Floor Spring Repair in Mumbai";
const description =
  "Repair of aluminium and glass office partitions, glass doors, floor springs, door closers and patch fittings across Mumbai. Fast technician visits. Send a photo on WhatsApp.";

const sections = [
  {
    h2: "Office Partition Repair",
    body: [
      "Loose aluminium sections, rattling glass, sagging doors and broken locks make an office look neglected. We tighten and reinforce partition frames, refit glass with new beading and replace locks, handles and hinges.",
    ],
  },
  {
    h2: "Glass Door, Floor Spring and Door Closer Repair",
    body: [
      "We service and replace floor springs, hydraulic door closers and glass door patch fittings on toughened glass doors in offices, shops and clinics, so the door closes gently instead of slamming.",
    ],
  },
] as const;

const faqs = [
  {
    q: "My glass door slams shut. Can you fix it?",
    a: "Usually the floor spring or door closer has leaked oil or needs adjusting. We repair or replace it.",
  },
  {
    q: "Do you work after office hours?",
    a: "Tell us on WhatsApp. We try to schedule commercial repairs at a time that disturbs work the least.",
  },
] as const;

export const Route = createFileRoute("/aluminium-partition-repair-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-partition-repair-mumbai",
      serviceName: "Aluminium Partition & Shutter Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Aluminium Partition & Glass Door Repair in Mumbai",
        intro:
          "We repair and reinforce commercial and residential aluminium partitions, sliding office cubicles, heavy glass doors, floor springs, and rolling shutters throughout Mumbai.",
        signs: [
          "Partition doors sagging, scraping the floor or failing to latch",
          "Glass panels wobbling inside loose aluminium framing",
          "Heavy sliding partition tracks bent or derailed",
          "Floor spring hydraulic oil leakage or slamming door issue",
          "Loose frame joints and rattling metal sections",
        ],
        photoTip:
          "Send a full picture of the partition or door, plus a close-up of any loose hinges, floor machines, or joints.",
        whatsappMessage:
          "Hi, I need aluminium partition / shutter repair in Mumbai. Sending photo for inspection.",
        locationKey: "service_partition_repair",
        sections,
        areaKeyword: "Partition & Glass Door Repair",
        faqs,
      }}
    />
  );
}
