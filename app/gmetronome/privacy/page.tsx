import Link from 'next/link';
import { pageMetadata } from '../../../lib/site';
import { LegalPage } from '../../site-components';

export const metadata = pageMetadata('Privacy Policy — GMetronome', 'How GMetronome handles analytics and diagnostic information.', '/gmetronome/privacy/');

export default function Privacy() {
  return <LegalPage product="gmetronome" eyebrow="Clear and straightforward" title="Privacy Policy" updated="September 1, 2026">
    <section><p>This Privacy Policy explains how GMetronome, operated by Gleb Monetchikov (“GMetronome”, “we”, “us”), handles information when you use the GMetronome mobile application or this website.</p></section>
    <section><h2>Information we process</h2><p>GMetronome does not require an account and does not ask you to provide your name, email address, contacts, precise location, or payment information. We use Firebase Analytics and Firebase Crashlytics, services provided by Google, to process limited app usage and diagnostic information. This may include app interactions, app and operating-system versions, device type, pseudonymous device or installation identifiers, crash reports, stack traces, and technical performance information.</p></section>
    <section><h2>How we use information</h2><p>We use this information to understand which features are useful, monitor app stability, diagnose crashes, correct errors, and improve GMetronome. We do not sell personal information, display third-party advertising, or use collected information to build advertising profiles.</p></section>
    <section><h2>Metronome audio and settings</h2><p>Tempo, time signature, rhythm pattern, and appearance selections are handled on your device. GMetronome does not record microphone audio and does not upload the music playing on your device.</p></section>
    <section><h2>Service provider</h2><p>Firebase Analytics and Firebase Crashlytics are operated by Google and may process information on our behalf in accordance with Google’s terms and privacy practices. Information may be processed in countries other than your own and retained according to our Firebase configuration and applicable legal requirements.</p></section>
    <section><h2>Your choices</h2><p>You can stop future collection by uninstalling GMetronome. Device-level privacy controls may provide additional choices. Depending on your location, you may also have rights concerning information associated with your device or installation.</p></section>
    <section><h2>Children</h2><p>GMetronome is a general-audience music utility and is not designed to collect personal information from children. We do not knowingly collect information directly identifying a child.</p></section>
    <section><h2>Security</h2><p>We use reasonable safeguards appropriate to the limited information processed. No electronic transmission or storage system can be guaranteed to be completely secure.</p></section>
    <section><h2>Changes</h2><p>We may update this policy when GMetronome or its supporting services change. The effective date above identifies the current version.</p></section>
    <section><h2>Contact</h2><p>For privacy questions, use the contact method on the <Link href="/gmetronome/support/">GMetronome Support page</Link>. Do not include sensitive personal information in a public support request.</p></section>
  </LegalPage>;
}
