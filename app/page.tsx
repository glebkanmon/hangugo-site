import { apps, pageMetadata } from '../lib/site';
import Link from 'next/link';
import { Footer, Header, OtherApps } from './site-components';

export const metadata = pageMetadata('Hangugo — Korean learning, made personal', 'Learn Korean vocabulary with spaced repetition, natural pronunciation, and personalized AI practice.', '/');

const features = [
  ['Remember for longer', 'Spaced repetition brings each word back when it is most useful to review.'],
  ['Practice with purpose', 'AI exercises use vocabulary you have already studied instead of generic prompts.'],
  ['Build real sentences', 'Work through translations, word order, corrections, and focused recognition tasks.'],
];

export default function Home() {
  return <><Header /><main id="main">
    <section className="hero shell"><div className="hero-copy">
      <p className="eyebrow">Korean learning, made personal</p>
      <h1>Learn the words.<br />Use the language.</h1>
      <p className="lede">Hangugo combines a focused Korean dictionary, spaced repetition, natural pronunciation, and AI practice shaped around your progress — on iPhone and Android.</p>
      <div className="store-buttons" aria-label="Hangugo availability"><a className="store-button" href={apps.hangugo.appStore} target="_blank" rel="noreferrer">Download on the App Store</a>{apps.hangugo.googlePlay ? <a className="store-button play-button" href={apps.hangugo.googlePlay} target="_blank" rel="noreferrer">Get it on Google Play</a> : <span className="store-pending">Google Play — coming soon</span>}</div>
      <Link className="text-link support-link" href="/support/">Get support <span>→</span></Link>
    </div><div className="word-card" aria-label="Example Hangugo vocabulary card">
      <div className="word-top"><span className="word">안녕하세요</span><span className="sound">♪</span></div><p className="romanization">annyeonghaseyo</p>
      <div className="meaning"><small>MEANING</small><strong>Hello</strong></div><div className="practice-line"><span>오늘도 한국어를 연습해요.</span><small>Practice Korean today, too.</small></div>
    </div></section>
    <section className="feature-section shell"><p className="eyebrow">A calmer way to make progress</p><h2>Everything in one learning rhythm.</h2><div className="feature-grid">{features.map(([title, description], index) => <article className="feature-card" key={title}><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="closing shell"><div><p className="eyebrow">Built for steady progress</p><h2>Small sessions. Stronger Korean.</h2></div><p>Start with a few words, keep a sustainable review habit, and let every practice session build on what you already know.</p></section>
  <OtherApps product="hangugo" /></main><Footer /></>;
}
