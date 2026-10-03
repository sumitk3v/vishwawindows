import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Soundproof Windows in Mumbai | Noise Cancelling Windows & Glass";
const description =
  "Soundproof windows & noise cancelling windows for Mumbai homes. Upgrade existing sliding windows with acoustic glass and seals to cut traffic noise. Powai-based, all Mumbai.";

const sections = [
  {
    h2: "How Soundproof Windows Work",
    body: [
      "Soundproof windows, also called noise cancelling or noise proof windows, reduce outside noise using thicker laminated or double-glazed (DGU) acoustic glass, an airtight aluminium frame and good rubber seals. Most noise comes through gaps and thin single glass, so sealing and upgrading the glass makes the biggest difference.",
      "For Mumbai flats near highways, metro lines, construction or busy roads, soundproof windows can make bedrooms noticeably quieter.",
    ],
  },
  {
    h2: "Upgrade Existing Windows or Install New",
    body: [
      "Upgrade: we can often fit acoustic glass and new seals into your existing aluminium sliding windows.",
      "New soundproof windows: for the best result we fabricate new aluminium windows with double-glazed acoustic glass in our Powai workshop.",
    ],
  },
  {
    h2: "Soundproof Windows Cost in Mumbai",
    body: [
      "Soundproof window cost is per square foot and depends on the glass type (laminated or double glazed), glass thickness, frame and window size. Send a photo of the window and tell us the noise source and we will recommend the right option with a price.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Do soundproof windows really work?",
    a: "Yes. Laminated or double-glazed acoustic glass with an airtight frame and good seals reduces traffic and street noise significantly.",
  },
  {
    q: "Can you make my existing window soundproof?",
    a: "Often yes, by upgrading to acoustic glass and new seals. If the frame is too weak, a new soundproof window works better.",
  },
  {
    q: "What is the cost of soundproof windows in Mumbai?",
    a: "It is priced per square foot depending on the glass and frame. Send a photo on WhatsApp for a quote.",
  },
] as const;

export const Route = createFileRoute("/soundproof-window-upgrades-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/soundproof-window-upgrades-mumbai",
      serviceName: "Soundproof Window Upgrades",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Soundproof Windows in Mumbai",
        intro:
          "You don't need to rebuild your walls or replace your entire frame. We upgrade your existing sliding and casement windows with double-glazed acoustic glass, acoustic laminates, and precision perimeter rubber seals to cut outside noise by up to 80%.",
        signs: [
          "Traffic horns, construction noise, or metro sounds wake you up",
          "Wind whistling loudly through window gaps during monsoons",
          "AC cooling escaping quickly, resulting in high electricity bills",
          "Single thin 4mm glass vibrating under heavy traffic rumble",
          "Existing sliding window lacking proper rubber acoustic gaskets",
        ],
        photoTip:
          "Send one photo of the entire window and frame, and one close-up of the track and glass thickness. Mention what kind of noise is bothering you.",
        whatsappMessage:
          "Hi, I want to soundproof my sliding windows in Mumbai. I am sending a photo of my window. Please guide me on options and pricing.",
        locationKey: "service_soundproof",
        sections,
        areaKeyword: "Soundproof Windows",
        faqs,
      }}
    />
  );
}
