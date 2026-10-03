import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Door Repair Near Me in Powai, Mumbai | Glass Door Rollers & Track";
const description =
  "Sliding door repair in Powai & Mumbai: heavy, stuck or off-track glass sliding doors, balcony and kitchen sliding doors. Rollers, tracks and locks replaced. Send a photo on WhatsApp.";

const sections = [
  {
    h2: "Glass Sliding Door Repair for Balconies and Kitchens",
    body: [
      "Balcony sliding doors carry heavy glass, so the bottom rollers and track wear out faster than on windows. When the door drags, jumps off the track or needs both hands to move, the frame is almost always fine. Only the rollers, track or lock need attention.",
      "We repair aluminium and uPVC glass sliding doors, kitchen sliding doors, sliding partition doors and wardrobe-style sliding shutters in homes and offices across Mumbai.",
    ],
  },
  {
    h2: "What a Sliding Door Repair Includes",
    body: [
      "Heavy-duty roller and bearing replacement sized for the weight of your glass.",
      "Bottom track cleaning, straightening or a stainless steel track cap where the old track is worn.",
      "Lock, handle and latch replacement so the door closes and locks properly.",
      "Height and alignment adjustment so the door closes without gaps, rattles or rain coming in.",
    ],
  },
  {
    h2: "Sliding Door Repair Cost",
    body: [
      "The cost depends on the roller type, glass weight and whether the track needs work. Send a short video of the door sliding and a close-up of the bottom track, and we tell you the price before we visit.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Do I need a new sliding door if it is very heavy to move?",
    a: "Usually not. A heavy sliding door is almost always caused by crushed rollers or a dirty or bent track. Replacing the rollers fixes most doors in one visit.",
  },
  {
    q: "Can you fix a sliding door that has come off the track?",
    a: "Yes. We lift the door back, check the rollers and track for damage, and replace what is worn so it does not jump off again.",
  },
  {
    q: "Do you repair kitchen and wardrobe sliding doors too?",
    a: "Yes. We repair aluminium and glass sliding doors in kitchens, balconies, bathrooms and offices.",
  },
  {
    q: "Which areas do you cover for sliding door repair?",
    a: "We are based in Powai and cover Hiranandani, Chandivali, Andheri, Vikhroli, Ghatkopar, Bandra, Worli and the rest of Mumbai.",
  },
] as const;

export const Route = createFileRoute("/sliding-door-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/sliding-door-repair-powai",
      serviceName: "Sliding Glass Door Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Door Repair in Powai & Mumbai",
        intro:
          "Sliding doors are heavier than windows, so worn rollers and damaged tracks show up faster. A short video while you push it tells us a lot.",
        signs: [
          "The door needs both hands to move",
          "It has come off the bottom track",
          "It drags on the floor or the track",
          "The lock no longer lines up",
          "There is a gap when the door is closed",
        ],
        photoTip:
          "One photo of the full door, one close-up of the bottom track, and if possible a short video while you slide it open and shut.",
        whatsappMessage:
          "Hi, my sliding door is heavy/off the track. I am in Powai and sending a photo/video of the door and the track.",
        locationKey: "service_sliding_door",
        sections,
        areaKeyword: "Sliding Door Repair",
        faqs,
      }}
    />
  );
}
