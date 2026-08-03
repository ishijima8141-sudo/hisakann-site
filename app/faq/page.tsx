'use client'
import { useLang } from '@/components/LangProvider'
import { t } from '@/lib/i18n'
import Link from 'next/link'

export default function FaqPage() {
  const { lang } = useLang()
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 48px' }} className="section-pad-mobile">
      <p className="eyebrow" style={{ marginBottom: 12 }}>FAQ</p>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{t.faq.title[lang]}</h1>
      <div className="gold-line" style={{ marginBottom: 48 }} />
      {t.faq.items.map((section, si) => (
        <div key={si} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 24 }}>{section.category[lang]}</p>
          {section.qa.map((item, qi) => (
            <div key={qi} style={{ marginBottom: 0, paddingBottom: 24, paddingTop: 24, borderTop: '0.5px solid var(--border)' }}>
              <p style={{ fontWeight: 400, fontSize: 14, color: 'var(--text)', marginBottom: 10 }}>Q. {item.q[lang]}</p>
              <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.85 }}>A. {item.a[lang]}</p>
            </div>
          ))}
          <div style={{ borderTop: '0.5px solid var(--border)' }} />
        </div>
      ))}
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <Link href="/contact" className="btn-dark">{lang === 'ja' ? 'さらに詳しく相談する' : 'Get in touch'}</Link>
      </div>
    </div>
  )
}
