import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Bathroom Window in Mumbai | Washroom Window With Exhaust Fan & Louvres";
const description =
  "Aluminium bathroom windows, washroom louvre ventilators, frosted bathroom window glass and bathroom windows with exhaust fan, made and fitted across Mumbai.";

const sections = [
  {
    h2: "Types of Bathroom Windows",
    body: [
      "Aluminium louvre ventilators with frosted glass blades you can tilt open.",
      "Small sliding bathroom windows with frosted glass.",
      "Fixed frosted glass with an exhaust fan panel.",
      "Top-hung windows that open outward for ventilation in rain.",
    ],
  },
  {
    h2: "Bathroom Window With Exhaust Fan",
    body: [
      "The easiest way to add an exhaust fan to a bathroom without breaking the wall is to fit it in the window. We make a panel with a neat cut-out for your fan and seal it so rain does not enter.",
    ],
  },
  {
    h2: "Bathroom Window Glass",
    body: [
      "We fit frosted, patterned or film-finished glass so the bathroom stays private but bright, and replace broken louvre blades.",
    ],
  },
] as const;

const faqs = [
  {
    q: "Can you fit an exhaust fan in my bathroom window?",
    a: "Yes. We make a window panel with a cut-out for the fan and seal it properly.",
  },
  {
    q: "Can you replace broken glass louvres?",
    a: "Yes. We replace single blades or the full louvre ventilator with an aluminium one.",
  },
  {
    q: "Do you also make aluminium bathroom doors?",
    a: "Yes. See our aluminium bathroom door service.",
  },
] as const;

export const Route = createFileRoute("/bathroom-window-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/bathroom-window-mumbai",
      serviceName: "Bathroom Window Installation",
      faqs,
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "Bathroom & Washroom Windows in Mumbai",
        intro:
          "Damp, smelly bathroom? Broken louvres or a rusted ventilator? We make and fit aluminium bathroom windows with frosted glass, louvres and exhaust fan panels, giving you ventilation and privacy without leaks.",
        signs: [
          "Glass louvres broken, missing or not closing",
          "Old wooden or iron bathroom window rotting or rusted",
          "Bathroom stays damp and needs an exhaust fan",
          "Clear glass that needs to be frosted for privacy",
          "Water leaking in around the bathroom window",
        ],
        photoTip:
          "Send a photo of the bathroom window from inside, with the rough size. Tell us if you want an exhaust fan fitted in it.",
        whatsappMessage: "Hi, I need a bathroom window / ventilator in Mumbai. Sending a photo.",
        locationKey: "service_bathroom_window_mumbai",
        sections,
        areaKeyword: "Bathroom Window",
        faqs,
      }}
    />
  );
}
