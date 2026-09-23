import { pageMetadata } from '../../lib/site';
import Link from 'next/link';
import { LegalPage } from '../site-components';

export const metadata = pageMetadata('Terms of Use — Hangugo', 'Terms governing use of the Hangugo Korean learning app.', '/terms/');

export default function Terms() {
  return <LegalPage eyebrow="Terms for using Hangugo" title="Terms of Use" updated="August 27, 2026">
    <section><p>These Terms of Use govern your use of Hangugo, operated by Gleb Monetchikov. By using Hangugo, you agree to these terms.</p></section>
    <section><h2>The learning service</h2><p>Hangugo provides vocabulary study, spaced repetition, pronunciation playback, progress tracking, and AI-assisted practice. Educational and AI-generated content may contain mistakes and should not be treated as professional translation, certification, or guaranteed language instruction.</p></section>
    <section><h2>Accounts</h2><p>You are responsible for access to your device and connected Apple or Google account. You must not misuse the service, interfere with its operation, attempt unauthorized access, or use automated means to exhaust or circumvent usage limits.</p></section>
    <section><h2>Subscriptions</h2><p>Some features require Hangugo Premium. Prices and billing periods are displayed before purchase. Subscriptions renew automatically unless cancelled through your Apple ID or Google Play account within the period specified by the applicable store. Deleting Hangugo or your Hangugo account does not automatically cancel a store subscription.</p></section>
    <section><h2>Acceptable use of AI practice</h2><p>Do not submit unlawful, harmful, infringing, or sensitive personal content. AI availability and response time are not guaranteed. Usage limits may apply based on account and subscription status.</p></section>
    <section><h2>Intellectual property</h2><p>Hangugo, its interface, original text, branding, and software are owned by Gleb Monetchikov or used under licence. You may use the app for personal, non-commercial learning. Korean words and general linguistic facts are not claimed as exclusive property.</p></section>
    <section><h2>Availability and changes</h2><p>We may improve, modify, suspend, or discontinue features. We aim to keep learning data available but cannot guarantee uninterrupted access or that every locally stored item can be recovered.</p></section>
    <section><h2>Disclaimer and liability</h2><p>To the extent permitted by law, Hangugo is provided “as is” without warranties of uninterrupted operation, error-free AI output, or fitness for a particular learning goal. Nothing in these terms excludes rights or liability that cannot legally be excluded.</p></section>
    <section><h2>Termination</h2><p>You may stop using Hangugo at any time and delete your account in the app. We may restrict access when reasonably necessary to protect users, enforce these terms, or comply with law.</p></section>
    <section><h2>Apple terms</h2><p>For downloads from Apple’s App Store, Apple’s Licensed Application End User License Agreement applies in addition to these terms. If these terms conflict with mandatory store terms, the applicable store terms control.</p></section>
    <section><h2>Contact</h2><p>Questions about these terms can be submitted through the <Link href="/support/">Hangugo Support page</Link>.</p></section>
  </LegalPage>;
}
