import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Mosquito Net for Sliding Window in Powai, Mumbai | Sliding Window Net";
const description =
  "Mosquito net for aluminium sliding windows & balcony doors in Powai and Mumbai. Pleated, sliding and fixed insect mesh, extra mosquito track fitting and torn mesh replacement.";

const sections = [
  {
    h2: "Mosquito Net Options for Sliding Windows",
    body: [
      "Sliding mosquito net shutter: an extra aluminium shutter with fine insect mesh that slides in its own track, the most common sliding window net in Mumbai.",
      "Pleated mosquito net: a folding mesh that opens and closes like an accordion, ideal for balcony doors and French windows.",
      "Fixed mesh: fitted permanently on windows that you rarely open.",
      "Mesh replacement: new mesh on old torn or rusted mosquito net shutters.",
    ],
  },
  {
    h2: "Mosquito Net Price for Sliding Windows",
    body: [
      "Mosquito net price depends on the window size, whether a new track is needed and the mesh type. Send a photo of the window and its bottom track on WhatsApp for an exact quote.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can you add a mosquito net to a 2-track sliding window?",
    a: "Yes. We can add an extra track for a sliding mosquito net shutter or fit a pleated or fixed mesh instead.",
  },
  {
    q: "What is the price of a mosquito net for a sliding window?",
    a: "It depends on the size, track and mesh type. Send a photo on WhatsApp for an exact price.",
  },
  {
    q: "Do you replace torn mosquito mesh?",
    a: "Yes. We replace torn or rusted mesh on existing aluminium mosquito net shutters.",
  },
] as const;

export const Route = createFileRoute("/mosquito-net-sliding-window-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/mosquito-net-sliding-window-mumbai",
      serviceName: "Mosquito Net For Sliding Windows",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Mosquito Net for Sliding Window in Mumbai",
        intro:
          "Mosquitoes come in every evening the moment you open a window. We fit mosquito mesh to your existing aluminium sliding windows. We can add a third track for a sliding mesh shutter, fit pleated mesh to balcony doors, or replace torn and rusted mesh on your current shutters.",
        signs: [
          "Can't open windows in the evening because of mosquitoes",
          "Existing mesh torn, rusted or coming out of the frame",
          "2-track sliding window with no space for a mesh shutter",
          "Large balcony door that needs a pleated or roll-up mesh",
          "Want insect protection without blocking light and air",
        ],
        photoTip:
          "Send a photo of the full window and a close-up of the bottom track so we can see how many tracks you have.",
        whatsappMessage:
          "Hi, I need a mosquito net for my sliding window in Mumbai. Sending a photo.",
        locationKey: "service_mosquito_net_sliding_window_mumbai",
        sections,
        areaKeyword: "Mosquito Net for Sliding Windows",
        faqs,
      }}
    />
  );
}
