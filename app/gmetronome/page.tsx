import Link from 'next/link';
import { pageMetadata } from '../../lib/site';
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
      <div className="hero-actions"><a className="store-button" href="https://apps.apple.com/app/id1566795992" target="_blank" rel="noreferrer"> &nbsp;Download on the App Store</a><Link className="text-link" href="/gmetronome/support/">Get support <span>→</span></Link></div>
    </div><div className="dial-card" aria-label="GMetronome tempo dial set to 120 beats per minute">
      <div className="dial"><div className="dial-face"><strong>120</strong><span>bpm</span><i>▶</i></div></div>
      <div className="meter"><span>4</span><div className="meter-line" /><span>4</span></div>
    </div></section>
    <section className="feature-section shell"><p className="eyebrow">Built around your practice</p><h2>Everything you need to stay in time.</h2><div className="feature-grid">{features.map(([title, description], index) => <article className="feature-card" key={title}><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="closing shell"><div><p className="eyebrow">From the first exercise to the final take</p><h2>Your rhythm, one beat at a time.</h2></div><p>Set a comfortable tempo, hear the accented downbeat, and build consistency through focused daily practice.</p></section>
  </main><Footer product="gmetronome" /></>;
}
