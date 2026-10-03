import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Balcony Safety Nets in Mumbai | Child Safety Net, Bird Spikes";
const description =
  "Child and pet safety nets for balconies and windows, terrace and duct nets and anti-bird spikes across Mumbai. Pigeon nets and invisible grills also available. Send a photo for a price.";

const sections = [
  {
    h2: "Child and Pet Safety Nets",
    body: [
      "A strong, UV-stabilised safety net across your balcony or window stops children, pets and objects from falling, without blocking light or breeze. We fix the net on a stainless steel wire frame so it stays tight.",
    ],
  },
  {
    h2: "Balcony Safety Net or Invisible Grill?",
    body: [
      "A safety net is the most affordable option. For a permanent, almost invisible barrier, many families choose a stainless steel invisible grill instead. For birds, a pigeon net is the right choice.",
    ],
  },
] as const;

const faqs = [
  {
    q: "How strong are balcony safety nets?",
    a: "We use heavy-duty UV-stabilised nets fixed to a steel wire frame, strong enough for children and pets leaning on them.",
  },
  {
    q: "Do you also install bird spikes?",
    a: "Yes. Stainless steel bird spikes stop pigeons sitting on ledges, AC units and parapets.",
  },
] as const;

export const Route = createFileRoute("/safety-nets-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/safety-nets-installation-mumbai",
      serviceName: "Balcony Safety Nets & Bird Spikes",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Balcony Safety Nets for Children & Pets in Mumbai",
        intro:
          "Keep your balcony clean, bird-free, and protected without ruining your outside view or blocking fresh airflow. We install UV-stabilized nylon bird nets, stainless steel bird spikes, and smooth pleated sliding insect mesh.",
        signs: [
          "Pigeons nesting on AC outdoor units or balcony corners",
          "Bird droppings ruining window glass and creating hygiene hazards",
          "Torn or rusted old mosquito mesh on sliding window frames",
          "Insects and mosquitoes entering whenever windows are opened",
          "Need child-safe and pet-safe balcony net barriers",
        ],
        photoTip:
          "Send a full photo of your balcony or window opening. If you want mosquito mesh on existing sliding tracks, send a photo of the frame track.",
        whatsappMessage:
          "Hi, I need pigeon net / mosquito mesh installation in Mumbai. Sending photo of my balcony/window area.",
        locationKey: "service_safety_nets",
        sections,
        areaKeyword: "Balcony Safety Net",
        faqs,
      }}
    >
      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <h2 className="font-display text-xl font-extrabold">
          Looking for a specific net or grill?
        </h2>
        <ul className="mt-3 space-y-2 text-sm font-semibold text-primary underline underline-offset-4">
          <li>
            <a href="/pigeon-net-installation-mumbai">Pigeon net installation in Mumbai</a>
          </li>
          <li>
            <a href="/invisible-grills-mumbai">Invisible grills for balconies & windows</a>
          </li>
          <li>
            <a href="/mosquito-net-sliding-window-mumbai">Mosquito net for sliding windows</a>
          </li>
        </ul>
      </div>
    </ServicePage>
  );
}
