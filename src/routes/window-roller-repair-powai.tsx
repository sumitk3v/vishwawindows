import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Roller & Bearing Replacement in Powai, Mumbai";
const description =
  "Sliding window dragging or noisy? We replace sliding window rollers, wheels and bearings for aluminium and Domal windows and glass doors in Powai & Mumbai. Same-day repair.";

const sections = [
  {
    h2: "Why Sliding Window Rollers Wear Out",
    body: [
      "Every aluminium sliding window rides on small rollers or bearings at the bottom of each panel. Dust, sea air and the weight of the glass slowly crush or rust them. The window then drags, tilts, screeches or jumps out of the track.",
      "Replacing the rollers or bearings is the cheapest way to make an old window slide with one finger again, without replacing the frame.",
    ],
  },
  {
    h2: "Rollers and Bearings We Fit",
    body: [
      "Nylon and steel ball-bearing rollers for standard 2-track and 3-track aluminium sliding windows.",
      "Heavy-duty bearings for Domal and slim Domal windows and large balcony glass doors.",
      "Rust-resistant stainless steel bearings for sea-facing flats in Bandra, Juhu, Worli and South Mumbai.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How do I know if my window rollers need replacing?",
    a: "If the window drags, leans to one side, makes a grinding noise or lifts out of the track easily, the rollers are usually worn.",
  },
  {
    q: "How long does roller replacement take?",
    a: "Most windows are done in under an hour per panel, on the same visit.",
  },
  {
    q: "Do you have rollers for Domal windows?",
    a: "Yes. We carry Domal-compatible heavy-duty bearings as well as standard sliding window rollers.",
  },
] as const;

export const Route = createFileRoute("/window-roller-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-roller-repair-powai",
      serviceName: "Sliding Window Roller & Wheels Replacement",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Window Roller & Bearing Replacement in Mumbai",
        intro:
          "The small wheels under a sliding panel wear out with time and dust. When they do, the window drags, tilts or makes noise. A photo helps us see the type of roller used.",
        signs: [
          "The window scrapes along the track",
          "It feels heavy at one end only",
          "You hear a clicking or grinding noise",
          "The panel leans instead of standing straight",
          "It lifts out of the track easily",
        ],
        photoTip:
          "A close-up of the bottom edge of the sliding panel and the track underneath. If a roller is visible or has fallen out, photograph it too.",
        whatsappMessage:
          "Hi, my window is dragging and I think the rollers are worn. I am in Powai and sending a photo of the panel and track.",
        locationKey: "service_roller",
        sections,
        areaKeyword: "Sliding Window Roller Replacement",
        faqs,
      }}
    />
  );
}
