import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Lock Repair & Replacement in Powai, Mumbai";
const description =
  "Sliding window lock or handle broken? We replace sliding window locks, latches, handles and glass door locks for aluminium and Domal windows in Powai & Mumbai.";

const sections = [
  {
    h2: "Sliding Window Lock Replacement",
    body: [
      "A sliding window lock that does not catch is a safety risk, especially on lower floors and for families with children. We replace sliding window locks, latches, star locks, concealed locks and handles on aluminium and Domal sliding windows and glass doors.",
      "We match the lock to your frame section so it fits the existing holes. You do not need to buy parts yourself.",
    ],
  },
  {
    h2: "Window Safety Locks and Stoppers",
    body: [
      "On request we fit child-safety stoppers that let a window open only a few inches, and key-operated locks for ground-floor and terrace windows.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can you replace just the lock, not the whole window?",
    a: "Yes. We replace the lock, latch or handle and keep your existing window and frame.",
  },
  {
    q: "Do you fit child-safety window stoppers?",
    a: "Yes. We fit stoppers and restrictors that limit how far a sliding window opens.",
  },
  {
    q: "My Domal door multipoint lock is stuck. Can you fix it?",
    a: "Yes. Send a close-up photo of the lock and handle and we will confirm the replacement part.",
  },
] as const;

export const Route = createFileRoute("/window-lock-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-lock-repair-powai",
      serviceName: "Sliding Window Lock & Latch Replacement",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Window Lock & Handle Repair in Mumbai",
        intro:
          "Locks and handles come in many shapes. A close-up photo lets us match the right type instead of guessing over a phone call.",
        signs: [
          "The latch does not catch when you close the window",
          "The lock turns but nothing holds",
          "The handle is loose, cracked or has come off",
          "A screw hole has widened and will not hold",
          "The window can be pushed open even when locked",
        ],
        photoTip:
          "One close-up of the lock or handle from the front, and one from the side showing how it is fixed to the frame.",
        whatsappMessage:
          "Hi, my window lock/handle is not working. I am in Powai and sending a close-up photo of the lock and handle.",
        locationKey: "service_lock",
        sections,
        areaKeyword: "Window Lock Repair",
        faqs,
      }}
    />
  );
}
