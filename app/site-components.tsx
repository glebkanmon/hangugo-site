import Link from 'next/link';
import { apps, type Product } from '../lib/site';

function Brand({ product }: { product: Product }) {
  const app = apps[product];
  return <Link className="brand" href={app.href}><span className="brand-mark" aria-hidden="true">{app.mark}</span><span>{app.name}</span></Link>;
}
export function Header({ product = 'hangugo' }: { product?: Product }) {
  const app = apps[product];
  return <header className="site-header"><a className="skip-link" href="#main">Skip to content</a><div className="shell nav"><Brand product={product} /><nav aria-label={`${app.name} navigation`}><Link href={`${app.href}support/`}>Support</Link><Link href={`${app.href}privacy/`}>Privacy</Link></nav></div></header>;
}
export function Footer({ product = 'hangugo' }: { product?: Product }) {
  const app = apps[product];
  return <footer><div className="shell footer-grid"><div className="footer-brand"><Brand product={product} /><p>{app.description}</p></div><div className="footer-sections"><nav aria-label={`${app.name} links`}><strong>{app.name}</strong><Link href={`${app.href}support/`}>Support</Link><Link href={`${app.href}privacy/`}>Privacy Policy</Link>{product === 'hangugo' ? <Link href="/terms/">Terms of Use</Link> : <a href={app.appStore} target="_blank" rel="noreferrer">App Store</a>}</nav><nav aria-label="Other apps"><strong>Other apps</strong>{Object.entries(apps).filter(([key]) => key !== product).map(([key, other]) => <Link key={key} href={other.href}>{other.name}</Link>)}</nav>{product === 'hangugo' && <nav aria-label="Additional legal information"><strong>Legal</strong><Link href="/classroom-bot/privacy/">Classroom Bot Privacy</Link></nav>}</div><p className="copyright">© 2026 Gleb Monetchikov. All rights reserved.</p></div></footer>;
}
export function LegalPage({ eyebrow, title, updated, children, product = 'hangugo' }: { eyebrow: string; title: string; updated?: string; children: React.ReactNode; product?: Product }) {
  return <><Header product={product} /><main id="main" className="legal shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{updated && <p className="updated">Effective {updated}</p>}<div className="legal-body">{children}</div></main><Footer product={product} /></>;
}
export function OtherApps({ product }: { product: Product }) {
  return <section className="other-apps shell" aria-labelledby="other-apps-title"><h2 id="other-apps-title">Other apps</h2>{Object.entries(apps).filter(([key]) => key !== product).map(([key, app]) => <article className="other-app-card" key={key}><div><h3>{app.name}</h3><p>{app.description}</p></div><Link className="text-link" href={app.href}>View {app.name} <span aria-hidden="true">→</span></Link></article>)}</section>;
}
