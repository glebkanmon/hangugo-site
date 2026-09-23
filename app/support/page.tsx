import { pageMetadata } from '../../lib/site';
import Link from 'next/link';
import { LegalPage } from '../site-components';

export const metadata = pageMetadata('Support — Hangugo', 'Help and support for the Hangugo Korean learning app.', '/support/');

export default function Support() {
  return <LegalPage eyebrow="We are here to help" title="Hangugo Support">
    <section><h2>Contact support</h2><p>For technical problems, purchase questions, privacy requests, or feedback, open a support request. Include your device model, operating system version, and a short description of what happened. Do not include passwords or payment details.</p><a className="primary-link" href="mailto:support@hangugo.app">Email support@hangugo.app</a><p>You can also <a href="https://github.com/glebkanmon/hangugo-site/issues/new" target="_blank" rel="noreferrer">create a public support request <span>↗</span></a>. Use email for privacy or deletion requests; do not post personal information publicly.</p></section>
    <section><h2>Purchases and subscriptions</h2><p>Open Hangugo and go to <strong>Settings → Hangugo Premium</strong> to view plans or restore a purchase. Billing, cancellation, and refunds are managed by Apple or Google through the store where the purchase was made.</p></section>
    <section><h2>Restore a purchase</h2><ol><li>Use the same Apple ID or Google Account used for the original purchase.</li><li>Open <strong>Settings → Hangugo Premium</strong>.</li><li>Select <strong>Restore purchases</strong>.</li></ol></section>
    <section><h2>Delete your account and learning data</h2><p>In Hangugo, open <strong>Settings → Account &amp; Sync → Delete account and data</strong>. Confirm your identity when required. This permanently deletes the connected account, synchronized learning progress, and local learning data.</p></section>
    <section><h2>Useful links</h2><p><Link href="/privacy/">Privacy Policy</Link> · <Link href="/terms/">Terms of Use</Link></p></section>
  </LegalPage>;
}
