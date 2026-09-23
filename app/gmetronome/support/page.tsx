import Link from 'next/link';
import { pageMetadata } from '../../../lib/site';
import { LegalPage } from '../../site-components';

export const metadata = pageMetadata('Support — GMetronome', 'Help, troubleshooting, and support for the GMetronome app.', '/gmetronome/support/');

export default function Support() {
  return <LegalPage product="gmetronome" eyebrow="Help when you need it" title="GMetronome Support">
    <section><h2>Contact support</h2><p>If something is not working as expected, send us a support request. Include your device model, iOS or Android version, GMetronome version, and a short description of the problem. Please do not include passwords, payment details, or other sensitive information.</p><a className="primary-link" href="mailto:support@hangugo.app">Email support@hangugo.app</a><p>You can also <a href="https://github.com/glebkanmon/GMetronome_site/issues/new" target="_blank" rel="noreferrer">create a public support request <span>↗</span></a>. Use email for privacy or deletion requests; do not post personal information publicly.</p></section>
    <section><h2>Audio and background playback</h2><p>GMetronome can continue playing while your screen is locked. If you cannot hear the metronome, check the media volume and confirm that audio is not being routed to Bluetooth headphones or another connected device.</p></section>
    <section><h2>Music from other apps</h2><p>GMetronome is designed to mix with music and other audio apps. Start your music first, then open GMetronome and press the center of the tempo dial.</p></section>
    <section><h2>Tempo and rhythm controls</h2><p>Drag around the outer dial to change BPM. Use the two selectors above it to set the time signature. The music-note button opens the rhythm pattern picker.</p></section>
    <section><h2>Privacy</h2><p>Learn how anonymous usage and diagnostic information is handled in our <Link href="/gmetronome/privacy/">Privacy Policy</Link>.</p></section>
  </LegalPage>;
}
