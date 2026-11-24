import Link from 'next/link';
import { apps, pageMetadata } from '../../lib/site';
import { Footer, Header } from '../site-components';

export const metadata = pageMetadata('GMetronome — Find the tempo. Keep the rhythm.', 'A precise, distraction-free metronome for everyday music practice.', '/gmetronome/');
const features = [
  ['Precise by design', 'Native audio timing keeps every beat steady, even when the screen is locked.'],
  ['Shape every measure', 'Choose the time signature, beat unit, and rhythm pattern for the music in front of you.'],
  ['Made for practice', 'A focused interface, tactile tempo control, and light or dark appearance keep distractions away.'],
];

export default function Home() {
  return <><Header product="gmetronome" /><main id="main">
    <section className="hero shell"><div className="hero-copy">
      <p className="eyebrow">A steady pulse for every musician</p>
      <h1>Find the tempo.<br />Keep the rhythm.</h1>
      <p className="lede">GMetronome is a precise, distraction-free metronome for guitar, piano, drums, and every instrument in between.</p>
      <div className="store-buttons" aria-label="Download GMetronome"><a className="store-button" href={apps.gmetronome.appStore} target="_blank" rel="noreferrer"> &nbsp;Download on the App Store</a><a className="store-button play-button" href={apps.gmetronome.googlePlay} target="_blank" rel="noreferrer" aria-label="Get GMetronome on Google Play"><svg className="play-logo" viewBox="0 0 32 36" aria-hidden="true"><path fill="#00d6ff" d="M1.8 1.6A3.5 3.5 0 0 0 1 4v28a3.5 3.5 0 0 0 .8 2.4L18 18 1.8 1.6Z"/><path fill="#00f076" d="m18 18 5.3-5.3L5 2.1a3.6 3.6 0 0 0-3.2-.5L18 18Z"/><path fill="#ffdf00" d="m18 18-16.2 16.4A3.6 3.6 0 0 0 5 34l18.4-10.7L18 18Z"/><path fill="#ff3a44" d="m23.3 12.7-5.3 5.3 5.4 5.3 6.3-3.7c1.7-1 1.7-2.3 0-3.3l-6.4-3.6Z"/></svg><span className="store-label"><small>GET IT ON</small><strong>Google Play</strong></span></a></div>
      <Link className="text-link support-link" href="/gmetronome/support/">Get support <span>→</span></Link>
    </div><div className="dial-card" aria-label="GMetronome tempo dial set to 120 beats per minute">
      <div className="dial"><div className="dial-face"><strong>120</strong><span>bpm</span><i>▶</i></div></div>
      <div className="meter"><span>4</span><div className="meter-line" /><span>4</span></div>
    </div></section>
    <section className="feature-section shell"><p className="eyebrow">Built around your practice</p><h2>Everything you need to stay in time.</h2><div className="feature-grid">{features.map(([title, description], index) => <article className="feature-card" key={title}><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="closing shell"><div><p className="eyebrow">From the first exercise to the final take</p><h2>Your rhythm, one beat at a time.</h2></div><p>Set a comfortable tempo, hear the accented downbeat, and build consistency through focused daily practice.</p></section>
  </main><Footer product="gmetronome" /></>;
}
