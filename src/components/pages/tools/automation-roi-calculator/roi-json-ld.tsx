import { JsonLd } from "@/components/site/json-ld";
import { faqPageJsonLd, webApplicationJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";
import { faq } from "@/components/pages/tools/automation-roi-calculator/content";

const path = "/tools/automation-roi-calculator";
const name = "Automation ROI calculator";

export const RoiJsonLd = () => (
  <JsonLd
    data={[
      webApplicationJsonLd({
        name,
        description: pageMetadata.roiCalculator.description,
        path,
      }),
      faqPageJsonLd(faq.items, {
        name: faq.heading,
        description: pageMetadata.roiCalculator.description,
        path,
      }),
    ]}
  />
);
