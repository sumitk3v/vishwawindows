import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Servicing & Alignment in Mumbai | Window Maintenance";
const description =
  "Sliding window servicing in Mumbai: alignment, roller height adjustment, track cleaning and lubrication for aluminium and Domal windows. Ideal before the monsoon.";

const sections = [
  {
    h2: "What Window Servicing Includes",
    body: [
      "Track and drain-hole cleaning, roller height and square adjustment, lock alignment, lubrication of moving parts and a check of rubbers and brushes. Your windows slide easily, lock properly and stay sealed.",
    ],
  },
  {
    h2: "Society and Bulk Window Servicing",
    body: [
      "We service all the windows in a flat in one visit, and can plan servicing for whole societies and offices before the monsoon.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How often should sliding windows be serviced?",
    a: "Once a year is ideal, preferably before the monsoon.",
  },
  {
    q: "Do you service all windows in a flat in one visit?",
    a: "Yes. Tell us how many windows and doors you have and we plan the visit.",
  },
] as const;

export const Route = createFileRoute("/window-alignment-maintenance-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-alignment-maintenance-mumbai",
      serviceName: "Window Alignment & Maintenance",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Window Servicing & Alignment in Mumbai",
        intro:
          "Over years of building vibration and everyday use, sliding window panels tilt out of square, causing the top to bind and the bottom to scrape. Our comprehensive servicing realigns the sash, levels the roller height, and restores effortless one-finger sliding.",
        signs: [
          "Visible gap at the top or bottom when the window is pushed shut",
          "Lock latch doesn't line up with the frame keeper slot",
          "Window needs lifting slightly before it can slide",
          "Heavy accumulation of grime, dust and rust in the track channel",
          "Rough vibration and resistance when opening",
        ],
        photoTip:
          "Send a photo showing the gap when the window is nearly closed, and a photo of the bottom track.",
        whatsappMessage:
          "Hi, my sliding windows need alignment and complete servicing in Mumbai. Sending photo.",
        locationKey: "service_alignment_maintenance",
        sections,
        areaKeyword: "Window Servicing",
        faqs,
      }}
    />
  );
}
