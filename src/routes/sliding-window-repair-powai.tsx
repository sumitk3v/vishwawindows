import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Repair in Powai, Mumbai | Near Me Doorstep Service";
const description =
  "Sliding window repair near you in Powai & Mumbai: stuck or jammed windows, rollers, tracks and locks fixed at your doorstep. Send a photo on WhatsApp for a quote.";

const sections = [
  {
    h2: "Aluminium Sliding Window Repair at Your Doorstep",
    body: [
      "If your sliding window is stuck, jammed, hard to push or making a grinding noise, the frame is almost always fine. The problem is usually crushed rollers, a dirty or bent track, a broken lock or worn rubber. We repair aluminium sliding windows and sliding glass doors at your home, usually in under an hour, without breaking walls or replacing the whole window.",
      "We are a sliding window repair workshop at IIT Market, Powai, serving Hiranandani, Chandivali, Andheri, Vikhroli, Ghatkopar and all of Mumbai.",
    ],
  },
  {
    h2: "Common Sliding Window Repairs",
    body: [
      "Sliding window roller and wheel replacement for stuck or heavy windows.",
      "Track cleaning, straightening and alignment so windows glide smoothly.",
      "Sliding window lock, latch and handle replacement.",
      "Broken glass replacement and rubber gasket replacement to stop leakage.",
      "Domal and heavy balcony sliding door repair.",
    ],
  },
  {
    h2: "Sliding Window Repair Cost",
    body: [
      "Sliding window repair cost depends on the window size, the type of roller or lock needed and how many windows need work. Send a short video of the problem on WhatsApp and we will give you a fixed price before visiting.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How much does sliding window repair cost in Mumbai?",
    a: "It depends on the window size and the parts needed, such as rollers, locks or gaskets. Send a short video on WhatsApp for a fixed price before we visit.",
  },
  {
    q: "Do I need to replace the whole window if it is stuck?",
    a: "Usually not. Most stuck sliding windows only need new rollers and a cleaned or aligned track.",
  },
  {
    q: "Do you repair sliding windows near me in Powai?",
    a: "Yes. We are based in Powai and do doorstep sliding window repair across Powai, Hiranandani, Chandivali and all of Mumbai.",
  },
  {
    q: "How long does a sliding window repair take?",
    a: "Most roller, track and lock repairs are finished in under an hour per window.",
  },
] as const;

export const Route = createFileRoute("/sliding-window-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/sliding-window-repair-powai",
      serviceName: "Sliding Window Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Sliding Window Repair in Powai & Mumbai",
        intro:
          "Most sliding windows that stop moving smoothly have a problem in the rollers, the track or the alignment. Show us a photo and we will help you understand what is likely wrong.",
        signs: [
          "The window needs too much force to slide",
          "It moves part of the way and then jams",
          "It makes a grinding or scraping sound",
          "The panel sits unevenly in the frame",
          "It slips off the track when you push it",
        ],
        photoTip:
          "One photo of the whole window, and one close-up of the bottom track where the panel sits. A short video while you slide it helps even more.",
        whatsappMessage:
          "Hi, my sliding window in Powai is not sliding properly. I am sending a photo/video of the window and the track. Please help me understand the problem.",
        locationKey: "service_sliding_window",
        sections,
        areaKeyword: "Sliding Window Repair",
        faqs,
      }}
    />
  );
}
