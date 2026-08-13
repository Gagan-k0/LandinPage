import { legalMetadata, LegalPage } from "@/components/legal/LegalPage";

export const metadata = legalMetadata(
  "Privacy Policy",
  "How FatFox collects, uses and protects your data — cookies, demo requests, analytics and your rights under Indian data protection law.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="13 August 2026"
      intro="This Privacy Policy explains what information FatFox and its builder FoxWel AI collect when you use our website, what we do with it, and the choices you have."
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            "FatFox (the \"Platform\") is an all-in-one restaurant operating system built and operated by FoxWel AI. For the purpose of this policy, \"we\", \"us\" and \"our\" refer to FoxWel AI and the FatFox team.",
            "We act as a data controller for the information collected through this website, and a data processor for information your restaurant and customers submit through the platform itself.",
          ],
        },
        {
          heading: "2. Information we collect",
          paragraphs: ["We only collect the information you choose to give us, and what is technically required to run the website safely:"],
          list: [
            "Contact details you submit through our demo, contact and newsletter forms — name, email, phone number, business name, number of outlets and product interest.",
            "Usage data collected automatically — pages visited, device type, browser, approximate location and referring website, used in aggregate to improve the site.",
            "Consent preferences you set in our cookie banner.",
            "If you contact us by phone, email or WhatsApp, we keep a record of that conversation to help you.",
          ],
        },
        {
          heading: "3. Cookies and consent",
          paragraphs: [
            "Our website uses a small number of cookies. Necessary cookies (which we always set) keep the site working — for example remembering your cookie choice. Analytics and functional cookies are only set if you accept them in our consent banner, which you can customise or reject at any time.",
            "You can change your choice at any time by clearing your browser cookies for this site — the banner will reappear on your next visit.",
          ],
        },
        {
          heading: "4. How we use your information",
          list: [
            "To respond to demo requests, enquiries and support questions.",
            "To onboard your restaurant and provide the FatFox platform you subscribe to.",
            "To send occasional product updates and offers — only if you opted in. Every email includes an unsubscribe link.",
            "To maintain security, prevent fraud and comply with legal obligations.",
          ],
        },
        {
          heading: "5. Sharing your information",
          paragraphs: [
            "We do not sell your personal information. We share it only with:",
          ],
          list: [
            "Service providers who help us run the platform (hosting, email, payment and analytics services), bound by data-processing agreements.",
            "Government or law enforcement authorities where the law requires it.",
            "A successor entity in the event of a merger, acquisition or similar transaction — with the same protections in place.",
          ],
        },
        {
          heading: "6. Data retention",
          paragraphs: [
            "We keep contact details for as long as your enquiry is active, and platform data for as long as your subscription is active plus a short retention period for accounting and legal compliance. Newsletter subscriptions are kept until you unsubscribe.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: ["You can, at any time and free of charge:"],
          list: [
            "Access the personal data we hold about you.",
            "Ask us to correct, update or delete your data.",
            "Withdraw consent for marketing or cookies.",
            "Object to or restrict certain processing, and ask for a copy of your data in a portable format.",
          ],
        },
        {
          heading: "8. Security",
          paragraphs: [
            "We use industry-standard measures — encryption in transit (HTTPS), access controls, and regular reviews of our infrastructure — to protect your information. No method of transmission over the internet is 100% secure, but we work hard to keep your data safe.",
          ],
        },
        {
          heading: "9. Children's privacy",
          paragraphs: [
            "The Platform is intended for business use and is not directed at children under 16. We do not knowingly collect personal data from children.",
          ],
        },
        {
          heading: "10. Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. Material changes will be announced on this page with an updated \"Last updated\" date, and where appropriate, notified to you directly.",
          ],
        },
      ]}
    />
  );
}