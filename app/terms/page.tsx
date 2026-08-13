import { legalMetadata, LegalPage } from "@/components/legal/LegalPage";

export const metadata = legalMetadata(
  "Terms of Service",
  "The terms governing use of the FatFox website and the FatFox restaurant management platform — accounts, billing, uptime, fair use and liability.",
  "/terms"
);

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="13 August 2026"
      intro="These Terms of Service (&quot;Terms&quot;) govern your use of the FatFox website and, where applicable, the FatFox restaurant management platform. By using the website or subscribing to the platform, you agree to these Terms."
      sections={[
        {
          heading: "1. About FatFox",
          paragraphs: [
            "FatFox is an all-in-one restaurant operating system — online ordering storefront, cloud POS & admin panel, and delivery partner app — built and operated by FoxWel AI. In these Terms, \"we\", \"us\" and \"our\" mean FoxWel AI and the FatFox team.",
          ],
        },
        {
          heading: "2. The website",
          paragraphs: [
            "The website is provided free of charge for information and lead generation. We work hard to keep it accurate, but the website is provided \"as is\" without warranties of any kind. Product descriptions, screenshots and statistics are illustrative and may change as we ship improvements.",
          ],
        },
        {
          heading: "3. Subscriptions and billing",
          paragraphs: [
            "When you subscribe to the FatFox platform, a separate commercial agreement (proposal or order form) governs your plan, fees and service commitments.",
          ],
          list: [
            "Fees are as set out in your order form or proposal; there are no hidden charges.",
            "You will be billed on the schedule agreed at signup. Invoices are payable within the agreed term.",
            "If you exceed the limits of your plan (for example outlets or orders), we may ask you to upgrade to the next plan.",
            "Storefront commission, if any, is stated on your order form. Orders on your own branded website at 0% commission apply to qualifying plans as described on our pricing page.",
          ],
        },
        {
          heading: "4. Your account and responsibilities",
          list: [
            "You are responsible for keeping your login credentials secure.",
            "You must provide accurate information about your business during onboarding.",
            "You are responsible for the menu content, prices and offers you publish on your storefront.",
            "You must not use the platform for unlawful activity, or to process transactions you know or suspect to be fraudulent.",
          ],
        },
        {
          heading: "5. Service level and uptime",
          paragraphs: [
            "We target 99.9% platform availability measured monthly. Planned maintenance is scheduled at low-traffic hours and announced in advance where practical. If we fail to meet the availability target, credits apply as described in your order form.",
          ],
        },
        {
          heading: "6. Fair use and content",
          paragraphs: [
            "You retain ownership of your content (menus, product images, customer data you collect). You grant us a licence to host and process that content to provide the service to you. We never use your content for purposes unrelated to providing the service without consent.",
          ],
        },
        {
          heading: "7. Cancellation and refunds",
          paragraphs: [
            "You can cancel anytime without lock-in. Our cancellation and refund policy is described on the Refund Policy page, which forms part of these Terms.",
          ],
        },
        {
          heading: "8. Intellectual property",
          paragraphs: [
            "The FatFox software, website design, logos and documentation are owned by FoxWel AI or its licensors. You may not copy, modify, reverse-engineer or resell the platform, or use the FatFox name or logo without written permission.",
          ],
        },
        {
          heading: "9. Limitation of liability",
          paragraphs: [
            "To the maximum extent permitted by law, our total liability arising out of or related to these Terms is limited to the fees you paid us in the twelve months preceding the event giving rise to the claim. We are not liable for indirect, incidental or consequential damages, including lost profits or loss of data, except where such exclusion is prohibited by law.",
          ],
        },
        {
          heading: "10. Changes to these Terms",
          paragraphs: [
            "We may update these Terms as our products evolve. Material changes will be announced with reasonable notice, and continued use of the platform after the change takes effect means you accept the updated Terms.",
          ],
        },
      ]}
    />
  );
}