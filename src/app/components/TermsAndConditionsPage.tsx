import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { PageBreadcrumb } from './PageBreadcrumb';
import { pageH1OnDark, legalH2 } from '../styles/typography';

const s = { color: '#8a9aaa', fontSize: '15px', lineHeight: 1.8, marginBottom: '12px' } as const;
const h2 = legalH2;
const li = { marginBottom: '6px' } as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <h2 style={h2}>{title}</h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={s}>{children}</p>;
}

export function TermsAndConditionsPage({ page }: { page: 'privacy' | 'terms' }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
      <SharedNav />

      <div style={{ flex: 1, maxWidth: '800px', margin: '0 auto', padding: '64px 24px 80px' }}>

        {page === 'privacy' && (
        <div id="privacy">
          <PageBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
          <p style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Legal</p>
          <h1 style={{ ...pageH1OnDark, fontSize: '36px', marginBottom: '8px' }}>Privacy Policy</h1>
          <p style={{ color: '#1ac8b0', fontSize: '14px', fontStyle: 'italic', marginBottom: '6px' }}>How StableDPP collects, uses, safeguards, and shares information</p>
          <p style={{ color: '#7a8a98', fontSize: '13px', marginBottom: '40px' }}>Effective date: 09 June 2026 · Last updated: 09 June 2026</p>
          <P>This Privacy Policy explains how StableDPP ("we", "us", "our") handles information when you visit our website, create an account, or use our digital product passport services (the "Platform"). By using the Platform, you agree to the practices described here.</P>

          <Section title="1. Who We Are">
            <P>StableDPP is a product offering of AIWTHC, a startup technology company. We provide a software platform that lets brands and manufacturers issue verifiable digital product passports for their goods, recording selected product information on a blockchain so it can be independently checked. We are committed to handling information responsibly and being clear about what we do with it.</P>
          </Section>

          <Section title="2. Information We Collect">
            <P>We gather only what we need to operate the Platform and improve your experience.</P>
            <h2 style={{ ...h2, fontSize: '15px', marginTop: '16px' }}>2.1 Details You Provide</h2>
            <P>When you register, request a demonstration, subscribe to updates, or contact us, you may share your name, work email address, company name, job role, and any message you send. If you become a paying subscriber, billing details are processed by our payment partners on our behalf.</P>
            <h2 style={{ ...h2, fontSize: '15px', marginTop: '16px' }}>2.2 Product Information You Upload</h2>
            <P>To create a digital product passport, you submit data about your goods — for example material composition, sourcing origin, certifications, and sustainability attributes. You decide which fields are published publicly on a passport and which remain private within your account.</P>
            <h2 style={{ ...h2, fontSize: '15px', marginTop: '16px' }}>2.3 Information Gathered Automatically</h2>
            <P>Like most websites, we record technical signals when you browse — such as device type, browser, approximate location derived from your network address, pages viewed, and time spent on them. This is collected through cookies and similar technologies, as described in section 8.</P>
            <h2 style={{ ...h2, fontSize: '15px', marginTop: '16px' }}>2.4 Blockchain Records</h2>
            <P>When a passport is finalised, a cryptographic summary of the selected product data is written to a blockchain. Because of how blockchain technology works, entries recorded there are permanent and cannot be edited or erased afterwards. We never write personal contact details, login credentials, or payment information to the blockchain — only the product attributes you have chosen to anchor.</P>
          </Section>

          <Section title="3. How We Use Information">
            <P>We rely on the information described above for the following purposes:</P>
            <ul style={{ color: '#8a9aaa', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={li}>To create, manage, and display the digital product passports you generate.</li>
              <li style={li}>To set up and maintain your account and authenticate your access.</li>
              <li style={li}>To respond to enquiries, demo requests, and support messages.</li>
              <li style={li}>To send service updates, and — where you have opted in — occasional product news.</li>
              <li style={li}>To keep the Platform secure, detect misuse, and prevent fraudulent activity.</li>
              <li style={li}>To understand how the Platform is used so we can refine and strengthen it.</li>
              <li style={li}>To meet legal obligations that apply to our business.</li>
            </ul>
            <P>We do not sell your information, and we do not display third-party advertising on the Platform.</P>
          </Section>

          <Section title="4. How We Share Information">
            <P>We disclose information only in limited situations:</P>
            <ul style={{ color: '#8a9aaa', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={li}>Service partners: trusted vendors who help us run the Platform — for example cloud hosting, email delivery, and payment processing — acting strictly on our instructions.</li>
              <li style={li}>Blockchain network: the product attributes you choose to anchor become publicly visible on the blockchain, by design, so anyone can verify them.</li>
              <li style={li}>Legal grounds: where disclosure is required by law, regulation, or a valid request from an authority.</li>
              <li style={li}>Business transfers: If our company is involved in a merger, acquisition, or asset sale, your information may be transferred to the successor entity, subject to protections consistent with this Privacy Policy.</li>
            </ul>
            <P>We never grant partners the right to use your information for their own independent purposes.</P>
          </Section>

          <Section title="5. How We Protect Information">
            <P>We apply technical and organisational safeguards proportionate to the sensitivity of the data we hold. These include encryption of data while stored and in transit, role-based access limits so staff only see what their work requires, and routine review of our security practices. While no online system can be guaranteed entirely impenetrable, we work continuously to reduce risk and respond promptly to any incident.</P>
          </Section>

          <Section title="6. How Long We Keep Information">
            <P>We retain account and contact details for as long as your account stays active and for a reasonable period afterwards, so we can meet legal, accounting, and operational needs. When information is no longer required, we delete or anonymise it. Note that entries already written to the blockchain remain there permanently and lie outside our ability to remove them, as explained in section 2.4.</P>
          </Section>

          <Section title="7. Your Choices and Rights">
            <P>Depending on where you reside, applicable privacy laws may provide you with rights over your personal information, including the right to access, correct, delete, or object to certain uses of information under our control. To exercise these rights, please contact us using the details in Section 11. Please note that data permanently recorded on a blockchain is outside our control and cannot be altered or deleted due to the immutable nature of blockchain technology.</P>
          </Section>

          <Section title="8. Cookies and Similar Technologies">
            <P>We use cookies and comparable tools to keep you signed in, remember your preferences, and measure how visitors engage with our website. You can manage or refuse cookies through your browser settings; doing so may limit some features. Where required, we ask for your consent before placing non-essential cookies.</P>
          </Section>

          <Section title="9. International Handling of Information">
            <P>Your information may be processed, stored, or accessed in jurisdictions outside your country of residence. Where such transfers occur, we implement appropriate technical, organisational, and contractual safeguards designed to protect your information consistent with this Privacy Policy and applicable law.</P>
          </Section>

          <Section title="10. Updates to This Policy">
            <P>We may update this Privacy Policy from time to time. When we make changes, we will revise the "Last Updated" date above. If we make material changes, we will provide notice through the Platform, by email, or through other reasonable means before such changes take effect. Your continued use of the Platform after the effective date constitutes your acknowledgment of the revised policy.</P>
          </Section>

          <Section title="11. Contact Us">
            <P>If you have questions about this Privacy Policy or how your information is handled, reach us at:</P>
            <P>Email: <span style={{ color: '#1ac8b0' }}>info@stabledpp.com</span><br />Subject line: Privacy Enquiry</P>
          </Section>
        </div>
        )}

        {page === 'terms' && (
        <div id="terms">
          <PageBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Terms & Conditions" },
            ]}
          />
          <p style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Legal</p>
          <h1 style={{ ...pageH1OnDark, fontSize: '36px', marginBottom: '8px' }}>Terms &amp; Conditions</h1>
          <p style={{ color: '#1ac8b0', fontSize: '14px', fontStyle: 'italic', marginBottom: '6px' }}>The agreement governing your use of the StableDPP Platform</p>
          <p style={{ color: '#7a8a98', fontSize: '13px', marginBottom: '40px' }}>Effective date: 09 June 2026 · Last updated: 09 June 2026</p>
          <P>These Terms and Conditions ("Terms") form a binding agreement between you and StableDPP ("we", "us", "our") and govern your access to and use of our website and digital product passport services (the "Platform"). By creating an account or otherwise using the Platform, you confirm that you accept these Terms.</P>

          <Section title="1. Acceptance of These Terms">
            <P>By accessing or using the Platform, you agree to be bound by these Terms and Conditions. Your use of the Platform is also subject to our Privacy Policy. If you are using the Platform on behalf of an organisation, you represent that you are authorised to bind that organisation to these Terms. If you do not agree to these Terms, you must not access or use the Platform.</P>
          </Section>

          <Section title="2. Who May Use the Platform">
            <P>The Platform is intended for businesses and professionals. You must be capable of entering a legally binding agreement and must use the Platform only for lawful commercial purposes. You are responsible for ensuring that everyone you authorise to use your account also follows these Terms.</P>
          </Section>

          <Section title="3. Accounts and Security">
            <P>To use most features you must register an account and supply accurate, current details. You are responsible for keeping your login credentials confidential and for all activity that occurs under your account. Tell us promptly if you suspect any unauthorised access. We may suspend or close accounts that appear to be compromised or misused.</P>
          </Section>

          <Section title="4. Our Services">
            <P>The Platform enables you to collect, manage, and publish product information, including the creation of digital product passports and related records. You are solely responsible for the accuracy, completeness, legality, and ownership of all information and product claims submitted through the Platform. We do not independently verify, certify, or guarantee the accuracy of any information you provide.</P>
            <P>Certain information you choose to publish may become publicly accessible. Selected product attributes recorded on a blockchain may become permanently visible and may not be capable of modification, withdrawal, or deletion.</P>
            <P>The Platform is provided as a technology service and does not constitute legal, regulatory, certification, or compliance advice.</P>
          </Section>

          <Section title="5. Your Content and Responsibilities">
            <P>You retain ownership of any product data, documents, images, and other content you submit ("Your Content"). By submitting Your Content, you grant us a non-exclusive, worldwide, royalty-free licence to host, store, process, and display it solely to operate and provide the Platform.</P>
            <P>You must not:</P>
            <ul style={{ color: '#8a9aaa', fontSize: '15px', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={li}>Submit false, misleading, or unlawful content;</li>
              <li style={li}>Infringe the rights of any third party;</li>
              <li style={li}>Introduce malicious code or interfere with the operation of the Platform;</li>
              <li style={li}>Copy, reverse engineer, or misuse the Platform except as permitted by law.</li>
            </ul>
            <P>We may remove content or suspend access if we reasonably believe these Terms have been violated.</P>
          </Section>

          <Section title="6. Blockchain Records and Their Permanence">
            <P>The Platform may record selected product attributes on a blockchain. You acknowledge that blockchain records are immutable by nature and, once recorded, may not be modified, withdrawn, or deleted by you or by us. You are responsible for ensuring that any information submitted for blockchain recording is accurate and appropriate for publication.</P>
          </Section>

          <Section title="7. Subscriptions, Fees, and Payment">
            <P>Some features are offered free of charge while others require a paid subscription. Where fees apply, they are shown before you subscribe and are payable in advance for the billing period you select. Fees exclude applicable taxes, which are added where required. Paid plans renew automatically unless cancelled before the renewal date. Except where the law requires otherwise, payments already made are non-refundable.</P>
          </Section>

          <Section title="8. Intellectual Property">
            <P>The Platform, including its software, design, text, graphics, and underlying technology, belongs to us or our licensors and is protected by intellectual property laws. These Terms grant you a limited, non-exclusive, non-transferable right to use the Platform for your internal business purposes only. All rights not expressly granted are reserved.</P>
          </Section>

          <Section title="9. Third-Party Services">
            <P>The Platform may rely on or link to services operated by others — for example blockchain networks, hosting providers, and payment processors. We do not control these services and are not responsible for their performance, availability, or terms. Your use of any third-party service is governed by that provider's own agreement.</P>
          </Section>

          <Section title="10. Service Availability">
            <P>We work to keep the Platform available and dependable, but it is provided on an "as is" and "as available" basis. We may carry out maintenance, update features, or modify functionality, and we will aim to limit disruption where we reasonably can. We do not promise uninterrupted or error-free operation.</P>
          </Section>

          <Section title="11. Disclaimers">
            <P>To the fullest extent permitted by law, we disclaim all warranties not expressly stated in these Terms, whether express or implied, including any implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Platform will meet every requirement you may have.</P>
          </Section>

          <Section title="12. Limitation of Liability">
            <P>To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, business opportunities, or goodwill arising out of or relating to your use of, or inability to use, the Platform.</P>
            <P>Our total liability arising out of or relating to the Platform shall not exceed the amount paid by you for use of the Platform during the twelve (12) months immediately preceding the event giving rise to the claim.</P>
            <P>Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law.</P>
          </Section>

          <Section title="13. Indemnity">
            <P>You agree to indemnify and hold us harmless from claims, losses, and expenses (including reasonable legal costs) arising out of Your Content, your use of the Platform, or your breach of these Terms or of any law.</P>
          </Section>

          <Section title="14. Suspension and Termination">
            <P>You may stop using the Platform and close your account at any time. We may suspend or terminate your access if you breach these Terms or if we reasonably believe such action is necessary to protect the Platform or its users. Upon termination, your right to use the Platform will cease immediately. Records permanently recorded on a blockchain will not be affected by suspension or termination.</P>
          </Section>

          <Section title="15. Changes to These Terms">
            <P>As our Platform develops, we may update these Terms. When changes are material, we will revise the date above and, where appropriate, notify you. By continuing to use the Platform after an update takes effect, you accept the revised Terms.</P>
          </Section>

          <Section title="16. Governing Law">
            <P>These Terms are governed by the laws of the jurisdiction in which StableDPP is established, without regard to conflict-of-law principles. Any dispute arising from or relating to the Platform will be subject to the exclusive jurisdiction of the competent courts of that location.</P>
          </Section>

          <Section title="17. General">
            <P>These Terms, together with the Privacy Policy, form the entire agreement between you and us regarding the Platform and supersede any prior understanding. If any provision is found unenforceable, the remaining provisions stay in force. You may not transfer your rights under these Terms without our consent; we may assign ours as part of a business transfer.</P>
          </Section>

          <Section title="18. Contact Us">
            <P>For any questions about these Terms, please contact:</P>
            <P>Email: <span style={{ color: '#1ac8b0' }}>info@stabledpp.com</span><br />Subject line: Terms Enquiry</P>
          </Section>
        </div>
        )}

      </div>

      <SharedFooter />
    </div>
  );
}
