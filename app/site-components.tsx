import Link from 'next/link';

export function Header() {
  return <header className="site-header"><div className="shell nav"><Link className="brand" href="/"><span className="brand-mark">ㅎ</span><span>Hangugo</span></Link><nav aria-label="Main navigation"><Link href="/support/">Support</Link><Link href="/privacy/">Privacy</Link></nav></div></header>;
}

export function Footer() {
  return <footer><div className="shell footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-mark">ㅎ</span><span>Hangugo</span></Link><p>Thoughtful Korean practice for everyday progress.</p></div><nav aria-label="Legal navigation"><Link href="/support/">Support</Link><Link href="/privacy/">Privacy Policy</Link><Link href="/terms/">Terms of Use</Link></nav><p className="copyright">© 2026 Gleb Monetchikov. All rights reserved.</p></div></footer>;
}

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated?: string; children: React.ReactNode }) {
  return <><Header /><main className="legal shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{updated && <p className="updated">Effective {updated}</p>}<div className="legal-body">{children}</div></main><Footer /></>;
}
