import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Domal Window Repair & Installation in Mumbai | Domal Sliding Window";
const description =
  "Domal window repair and new Domal sliding windows in Mumbai: heavy-duty bearings, multipoint locks, tracks and seals for Domal and slim Domal windows and doors.";

const sections = [
  {
    h2: "What Is a Domal Window?",
    body: [
      "A Domal window is a premium aluminium sliding system with heavier, wider profiles and high-capacity bearings, used for large openings in high-rise flats. Slim Domal is a sleeker version with thinner interlocks for bigger glass.",
    ],
  },
  {
    h2: "Domal Window Repair",
    body: [
      "Domal windows need Domal-compatible bearings and locks. Generic rollers fail quickly under their weight. We replace bearings, multipoint locks, guide tracks, brushes and gaskets with matching parts.",
    ],
  },
  {
    h2: "New Domal Windows",
    body: [
      "We also fabricate and install new Domal and slim Domal sliding windows and doors from our Powai workshop.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Why is my Domal sliding door so heavy?",
    a: "Usually the bearings are worn or the track is dirty. Replacing them with Domal-grade bearings restores smooth sliding.",
  },
  {
    q: "Do you install new Domal windows?",
    a: "Yes. Send the opening size and we quote for new Domal windows.",
  },
] as const;

export const Route = createFileRoute("/domal-window-repair-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/domal-window-repair-mumbai",
      serviceName: "Domal & Slim Domal Window Repair",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Domal Window Repair & Installation in Mumbai",
        intro:
          "Domal systems use specialized heavy profiles and high-capacity ball bearings. Standard carpenter repairs often fail because they install generic low-weight rollers. We carry authentic Domal-compatible steel bearings, multi-point locks, and precision guide tracks.",
        signs: [
          "Heavy Domal glass sliding door dragging on the bottom track",
          "Multipoint lock or flush handle stuck and refusing to latch",
          "Jammed sliding sash requiring full body force to move",
          "Interlocking profile misaligned causing draughts and leaks",
          "Screeching metal-on-metal sound during sliding",
        ],
        photoTip:
          "Take a photo of the bottom profile and the lock/handle mechanism. A short video of opening the door is ideal.",
        whatsappMessage:
          "Hi, I have Domal sliding windows/doors in Mumbai that need repair. I am sending a photo of the door and track. Please assist.",
        locationKey: "service_domal",
        sections,
        areaKeyword: "Domal Window Repair",
        faqs,
      }}
    />
  );
}
