import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Pigeon Net (Kabutar Jali) for Balcony in Powai, Mumbai | Bird Net";
const description =
  "Pigeon net (kabutar jali) for balcony & windows, bird net and anti-bird netting installed in Powai, Hiranandani, Chandivali & all Mumbai. UV-stabilized nylon. Send a photo for a per sq. ft. price.";

const sections = [
  {
    h2: "What Is a Pigeon Net for Balcony?",
    body: [
      "A pigeon net (also called a bird net, anti-bird net or kabutar jali) is a strong, UV-stabilized nylon or HDPE mesh fixed across a balcony, window, duct or AC ledge so pigeons cannot enter, sit or nest. Fitted tight on a stainless steel wire frame, a good pigeon net for balcony is almost invisible from inside and does not block light or breeze.",
      "In Mumbai high-rises, pigeons nest behind AC outdoor units, in utility balconies and inside building ducts. Their droppings stain floors and clothes and carry health risks. A properly installed pigeon net is the simplest permanent fix.",
    ],
  },
  {
    h2: "Types of Pigeon Nets We Install",
    body: [
      "Balcony pigeon nets: full-coverage nylon or HDPE bird net for open and utility balconies.",
      "Pigeon net for windows: fitted on window openings and grill areas so you can keep windows open without birds coming in.",
      "Duct and shaft nets: anti-bird netting for building ducts, AC ledges and service shafts.",
      "Transparent and invisible bird nets: near-invisible mesh for sea-facing or view-facing balconies.",
    ],
  },
  {
    h2: "Pigeon Net Price in Mumbai",
    body: [
      "Pigeon net price is calculated per square foot and depends on the net material (nylon or HDPE), mesh size, the frame and fixing needed, and the floor height. Send a photo of your balcony or window on WhatsApp with the rough size and we will tell you the exact per sq. ft. price before visiting. No hidden charges.",
    ],
  },
  {
    h2: "Why Choose Vishwa Windows for Pigeon Nets",
    body: [
      "We are an aluminium and window workshop based at IIT Market, Powai, so we fix nets to window and balcony frames properly instead of just tying them to grills. We use UV-stabilized nets, stainless steel hooks and wire, and finish most balconies the same day.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How much does pigeon net installation cost in Mumbai?",
    a: "Pigeon net price is charged per square foot and depends on the net material, mesh size and floor height. Send a photo with the rough size on WhatsApp and we share an exact quote before visiting.",
  },
  {
    q: "How long does a pigeon net last?",
    a: "A good UV-stabilized nylon or HDPE pigeon net usually lasts several years in Mumbai weather. We use UV-treated nets and stainless steel fittings so they do not rot or rust quickly.",
  },
  {
    q: "Will the pigeon net block light or the view?",
    a: "No. We use fine, tight nets in black, white or transparent so the balcony stays bright and the view stays clear.",
  },
  {
    q: "Do you install pigeon nets in Powai and nearby areas?",
    a: "Yes. We are based in Powai and install pigeon nets across Hiranandani, Chandivali, Andheri, Vikhroli, Ghatkopar and all of Mumbai.",
  },
  {
    q: "What is kabutar jali?",
    a: "Kabutar jali is the common Hindi name for a pigeon net. It is the same UV-stabilized nylon or HDPE net we install on balconies, windows and ducts to keep pigeons out.",
  },
  {
    q: "Is a pigeon net safe for birds?",
    a: "Yes. A pigeon net only stops birds from entering. It does not trap or harm them.",
  },
] as const;

export const Route = createFileRoute("/pigeon-net-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/pigeon-net-installation-mumbai",
      serviceName: "Pigeon Net Installation",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Pigeon Net Installation for Balcony & Windows in Mumbai",
        intro:
          "Pigeons nesting behind your AC unit, droppings on the balcony every morning, feathers coming in through the window? We fit tight, UV-stabilized nylon and HDPE pigeon nets on hooks and a stainless steel wire frame, so they stay taut through the monsoon and don't block your view.",
        signs: [
          "Pigeons nesting on the AC outdoor unit or balcony ledge",
          "Bird droppings on balcony floor, clothes and window glass",
          "Pigeons entering through open windows or utility areas",
          "Building duct or shaft full of nests and feathers",
          "Old bird net torn, sagging or come loose after the monsoon",
        ],
        photoTip:
          "Send a photo of the balcony, window or duct opening where pigeons enter, and mention the floor number. Include the AC unit area if pigeons are nesting there.",
        whatsappMessage:
          "Hi, I need pigeon net installation in Mumbai. Sending a photo of my balcony/window.",
        locationKey: "service_pigeon_net_installation_mumbai",
        sections,
        areaKeyword: "Pigeon Net Installation",
        faqs,
      }}
    />
  );
}
