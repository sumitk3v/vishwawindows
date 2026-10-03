import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Modification Mumbai | Kitchen & Bathroom Window With Exhaust Fan";
const description =
  "Kitchen window with exhaust fan, bathroom window with exhaust fan, louvre ventilators, extra mosquito net track and new hardware fitted to existing windows across Mumbai.";

const sections = [
  {
    h2: "Kitchen Window With Exhaust Fan",
    body: [
      "Want an exhaust fan in your kitchen without breaking the wall? We modify the existing kitchen window with a fixed panel and a neat round or square cut-out sized for your exhaust fan, sealed properly so rain does not get in.",
    ],
  },
  {
    h2: "Bathroom Window With Exhaust Fan or Louvres",
    body: [
      "For bathrooms we fit an exhaust fan panel or aluminium louvre ventilator with frosted glass, giving ventilation and privacy together.",
    ],
  },
  {
    h2: "Other Window Upgrades",
    body: [
      "Adding a third track for a mosquito net to an existing 2-track window.",
      "Converting fixed glass into an opening window.",
      "Fitting child-safety stoppers, key locks and new handles.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can you fit an exhaust fan in my existing kitchen window?",
    a: "Yes. We modify the window with a panel and cut-out sized for your fan, without breaking the wall.",
  },
  {
    q: "Can a mosquito net track be added to my old sliding window?",
    a: "Yes, in most aluminium windows we can add a separate mosquito net track.",
  },
] as const;

export const Route = createFileRoute("/custom-window-modification-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/custom-window-modification-mumbai",
      serviceName: "Custom Window Modification",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Window Modification: Exhaust Fan Windows, Mosquito Tracks & Upgrades",
        intro:
          "Want to convert difficult-to-operate old windows, add a dedicated mosquito net channel, or retrofit modern flush handles and multipoint locks? Our custom fabrication and retrofitting team handles it on-site with zero wall damage.",
        signs: [
          "Want to add mosquito mesh track to existing 2-track sliding windows",
          "Need child-safety restrictors or grill modifications",
          "Upgrading outdated slide latches to modern key locks",
          "Converting fixed glass sections into operable ventilators",
          "Custom sizing and hardware replacement for non-standard frames",
        ],
        photoTip:
          "Send a photo of your existing window frame and describe what modification or upgrade you would like to achieve.",
        whatsappMessage:
          "Hi, I want custom window modifications/upgrades in Mumbai. Sending photos of my existing window frame.",
        locationKey: "service_custom_modification",
        sections,
        areaKeyword: "Window Modification",
        faqs,
      }}
    />
  );
}
