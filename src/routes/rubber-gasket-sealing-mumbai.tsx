import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Leakage Repair in Mumbai | Rubber Gasket & Silicone Sealing";
const description =
  "Window leaking in the rain? We replace window rubber gaskets and brushes and reseal with silicone to stop window water leakage, dust and wind noise across Mumbai.";

const sections = [
  {
    h2: "Why Windows Leak in the Monsoon",
    body: [
      "Windows leak when the rubber gasket around the glass dries out, the interlock brushes wear down, drain holes get blocked or the silicone around the frame cracks. Heavy Mumbai rain then pushes water inside along the sill.",
    ],
  },
  {
    h2: "How We Stop Window Leakage",
    body: [
      "Replacing the EPDM rubber gasket and beading around the glass.",
      "New wool-pile brushes on the interlock and sides.",
      "Clearing the track drain holes so water flows out.",
      "Removing old silicone and resealing the frame with weatherproof silicone.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can window leakage be fixed without replacing the window?",
    a: "Yes. In most cases new gaskets, brushes and silicone stop the leak completely.",
  },
  {
    q: "When should I do window waterproofing?",
    a: "Ideally before the monsoon, but we fix leaks in the rainy season too.",
  },
] as const;

export const Route = createFileRoute("/rubber-gasket-sealing-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/rubber-gasket-sealing-mumbai",
      serviceName: "Rubber, Gasket & Silicone Sealing",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Window Leakage Repair & Rubber Gasket Replacement in Mumbai",
        intro:
          "Over time, sun exposure and Mumbai weather dry out rubber gaskets and shrink weatherpile brushes. We replace degraded EPDM rubber beadings and apply commercial-grade silicone weatherproofing to keep your home 100% leak-proof and dust-free.",
        signs: [
          "Rainwater seeping along window sills or bottom tracks during heavy monsoons",
          "Black dust and pollution constantly settling inside window frames",
          "Loud wind howling or whistling through window crevices",
          "Glass rattling inside the aluminium frame when wind blows",
          "Cracked, brittle, or missing rubber seal beadings",
        ],
        photoTip:
          "Send a photo showing the edge where the glass meets the frame, or where water/dust enters during rain.",
        whatsappMessage:
          "Hi, I have window water seepage/dust sealing issues in Mumbai. Sending photos for gasket and silicone sealing.",
        locationKey: "service_gasket_sealing",
        sections,
        areaKeyword: "Window Leakage Repair",
        faqs,
      }}
    />
  );
}
