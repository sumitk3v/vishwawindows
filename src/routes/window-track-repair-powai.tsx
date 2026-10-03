import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Track Repair in Powai, Mumbai | Bent & Worn Tracks";
const description =
  "Bent, worn or blocked sliding window track? We repair aluminium window and glass sliding door tracks in Powai & Mumbai without replacing the frame. Send a photo on WhatsApp.";

const sections = [
  {
    h2: "Common Sliding Track Problems",
    body: [
      "A sliding window or door stops moving smoothly when its bottom track is dented, flattened by worn rollers, cracked, or packed with grit and old grease. The panel then sticks at one point or jumps out of the groove.",
    ],
  },
  {
    h2: "How We Repair Sliding Tracks",
    body: [
      "Deep cleaning and degreasing of the channel and drain holes.",
      "Straightening dents and re-fixing loose track sections.",
      "Fitting a stainless steel track cap over worn aluminium, so the frame does not need replacing.",
      "Fitting new rollers at the same time, so the new track surface lasts.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can a bent sliding window track be repaired?",
    a: "Yes, in most cases. We straighten it or fit a stainless steel track cap over it, so you do not need to replace the frame.",
  },
  {
    q: "Why does my window keep jumping off the track?",
    a: "Usually the track is worn or bent and the rollers are crushed. We fix both together.",
  },
  {
    q: "Do you repair sliding door tracks too?",
    a: "Yes. We repair balcony glass sliding door tracks, kitchen sliding door tracks and partition door tracks.",
  },
] as const;

export const Route = createFileRoute("/window-track-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-track-repair-powai",
      serviceName: "Sliding Window & Door Track Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Window & Door Track Repair in Mumbai",
        intro:
          "A window can stop moving simply because the track is bent, dented or packed with grit. A clear photo of the track usually shows what is going on.",
        signs: [
          "The track looks bent, dented or flattened",
          "The window stops at the same point every time",
          "The track is full of dust, grit or old grease",
          "The panel jumps out of the groove",
          "You can see a crack or split in the track",
        ],
        photoTip:
          "Take the photo along the length of the track at a low angle, so the bend or blockage is visible. Slide the panel to one side first if you can.",
        whatsappMessage:
          "Hi, my window track looks damaged. I am in Powai and sending a photo of the track. Please help me understand what is needed.",
        locationKey: "service_track",
        sections,
        areaKeyword: "Sliding Window Track Repair",
        faqs,
      }}
    />
  );
}
