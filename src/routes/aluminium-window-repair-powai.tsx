import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Window Repair in Powai, Mumbai | Sliding & Domal Windows";
const description =
  "Aluminium window repair in Powai & Mumbai: loose joints, leaks, broken fittings, rollers and locks on aluminium sliding and Domal windows. Send a photo for a free estimate.";

const sections = [
  {
    h2: "Aluminium Sliding Window Repair",
    body: [
      "Most aluminium window problems in Mumbai come from worn rollers, loose corner joints, dried-out rubber and broken fittings, not from the aluminium itself. Repairing these parts restores the window for a fraction of the cost of new windows.",
    ],
  },
  {
    h2: "What We Repair",
    body: [
      "Loose or separated corner joints and frame sections.",
      "Rollers, bearings, locks, handles and interlock brushes.",
      "Rain leakage and dust through gaps, using new rubber gaskets and silicone.",
      "Adding an extra mosquito net track to an existing 2-track window.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Is it better to repair or replace aluminium windows?",
    a: "If the frame is straight and not corroded through, repair is usually much cheaper. We tell you honestly from the photo.",
  },
  {
    q: "Do you repair Domal and Jindal aluminium windows?",
    a: "Yes. We repair standard aluminium sections as well as Domal and slim Domal systems.",
  },
] as const;

export const Route = createFileRoute("/aluminium-window-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-window-repair-powai",
      serviceName: "Aluminium Window Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Aluminium Window Repair in Powai & Mumbai",
        intro:
          "Aluminium windows come in many section types and fittings. A photo tells us the section and fitting type, so you don't have to describe it in technical words.",
        signs: [
          "The frame section feels loose or has separated at a joint",
          "The window rattles in the frame",
          "A fitting has come off or is missing",
          "Water or dust comes in around the edges",
          "The panel no longer closes flush",
        ],
        photoTip:
          "One photo of the full window from inside, and one close-up of the damaged section or joint from as near as you can safely get.",
        whatsappMessage:
          "Hi, I have an aluminium window problem in Powai. I am sending a photo of the window and the damaged section. Please help me understand what is needed.",
        locationKey: "service_aluminium_window",
        sections,
        areaKeyword: "Aluminium Window Repair",
        faqs,
      }}
    />
  );
}
