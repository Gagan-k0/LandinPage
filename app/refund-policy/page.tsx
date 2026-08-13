import { legalMetadata, LegalPage } from "@/components/legal/LegalPage";

export const metadata = legalMetadata(
  "Refund Policy",
  "FatFox cancellation and refund policy — no lock-in, fair proration, refund timelines and how to request one.",
  "/refund-policy"
);

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cancellation & Refund Policy"
      updated="13 August 2026"
      intro="We believe in no lock-in and fair terms. This policy explains how cancellation and refunds work for paid FatFox subscriptions."
      sections={[
        {
          heading: "1. No lock-in",
          paragraphs: [
            "All FatFox plans are subscription-based with no long-term lock-in. You can cancel at any time, and your access continues until the end of the period you have already paid for.",
          ],
        },
        {
          heading: "2. Refund eligibility",
          paragraphs: ["Refunds are available in these cases:"],
          list: [
            "If you cancel within the first 14 days of your first paid subscription and have used the platform, you can request a full refund of the first month's fee.",
            "If we fail to meet the agreed service-level target (99.9% monthly uptime), service credits apply as described in your order form.",
            "If a feature you paid for is not delivered within a reasonable period, you can request a proportional refund for that component.",
          ],
        },
        {
          heading: "3. When refunds are not available",
          list: [
            "Custom onboarding, migration and staff-training services, once delivered.",
            "Hardware (printers, tablets, cash drawers) purchased with the subscription — these follow the hardware vendor's policy.",
            "Monthly subscription fees for months already used.",
            "Refunds requested more than 30 days after cancellation.",
          ],
        },
        {
          heading: "4. How to request a refund",
          paragraphs: [
            "Email us at the address below with your account/business name and the reason for the request. We respond within one business day and process approved refunds within 5–10 business days to the original payment method.",
          ],
        },
        {
          heading: "5. Data after cancellation",
          paragraphs: [
            "After cancellation, your data remains accessible in read-only mode for 30 days so you can export your reports and records. After that period, your data is deleted from our systems, except where we are required to keep records for accounting or legal compliance.",
          ],
        },
      ]}
    />
  );
}