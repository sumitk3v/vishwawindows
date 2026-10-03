import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Sliding Window Installation in Mumbai | New Sliding Windows";
const description =
  "New aluminium sliding windows, Domal windows and uPVC-style sliding windows made in our Powai workshop and installed across Mumbai. 2-track, 3-track with mosquito net. Send a photo for a price.";

const sections = [
  {
    h2: "Aluminium Sliding Windows",
    body: [
      "Aluminium sliding windows are the most popular window in Mumbai flats because they save space, resist rust and handle the monsoon well. We fabricate 2-track windows, and 3-track windows with a built-in mosquito net track, in our Powai workshop and fit them on site.",
    ],
  },
  {
    h2: "Window Types We Install",
    body: [
      "Standard and heavy aluminium sliding windows.",
      "Domal and slim Domal sliding systems for large openings and high-rises.",
      "Fixed glass and sliding combinations, and hinged (casement) windows.",
      "French windows and balcony sliding doors.",
      "Soundproof double-glass windows for noisy roads.",
    ],
  },
  {
    h2: "Sliding Window Price in Mumbai",
    body: [
      "The sliding window price depends on the section, glass, finish and size, and is usually charged per square foot. Send the opening size and a photo and we share a clear quote before measurement.",
    ],
  },
] as const;

const faqs = [
  {
    q: "What is the price of an aluminium sliding window in Mumbai?",
    a: "It is charged per square foot and depends on the section, glass and finish. Send the rough size on WhatsApp for an exact quote.",
  },
  {
    q: "Should I choose a 2-track or 3-track sliding window?",
    a: "A 3-track window has a dedicated mosquito net track, which most Mumbai homes prefer.",
  },
  {
    q: "Do you make uPVC windows?",
    a: "We specialise in aluminium and Domal windows. Tell us your needs and we will recommend the right system.",
  },
  {
    q: "Can you replace my old windows without breaking the wall?",
    a: "In most cases yes. We remove the old frame and fit the new one with minimal plaster work.",
  },
] as const;

export const Route = createFileRoute("/new-window-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/new-window-installation-mumbai",
      serviceName: "New Window Fabrication & Installation",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "New Aluminium Sliding Windows Made & Installed in Mumbai",
        intro:
          "Renovating your flat, replacing damaged frames, or building a new home? We custom-design, precision-cut, and fabricate high-grade Jindal aluminium, luxury Domal systems, soundproof DGU glass, and custom French balcony windows directly from our Powai workshop.",
        signs: [
          "Complete home renovation requiring modern, sleek aluminium sliding windows",
          "Old wooden or rusted steel window frames that need full replacement",
          "Upgrading to heavy-duty luxury Domal & slim-profile European systems",
          "Enclosing open balconies with floor-to-ceiling sliding glass partitions",
          "Installing high-performance acoustic double-glazed (DGU) soundproof glass windows",
        ],
        photoTip:
          "Send measurements or photos of the opening/wall where you need new windows installed. Mention if you prefer standard 27mm Jindal aluminium, heavy Domal, or soundproof double glass.",
        whatsappMessage:
          "Hi, I need brand new window fabrication & installation in Mumbai. I am sending the details/photos. Please share a quote.",
        locationKey: "service_new_windows",
        sections,
        areaKeyword: "Sliding Window Installation",
        faqs,
      }}
    />
  );
}
