'use client'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { t } from '@/lib/i18n'

const serviceKeys = ['sales', 'order', 'coordination', 'exhibition'] as const
const icons: Record<string, string> = { sales: '◉', order: '◈', coordination: '◇', exhibition: '◎' }

export default function ServicePage() {
  const { lang } = useLang()
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px' }} className="section-pad-mobile">
      <p className="eyebrow" style={{ marginBottom: 12 }}>Services</p>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{lang === 'ja' ? 'サービス一覧' : 'What we offer'}</h1>
      <div className="gold-line" style={{ marginBottom: 48 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }} className="service-grid-mobile">
        {serviceKeys.map((key) => (
          <div key={key} style={{ border: '0.5px solid var(--border)', padding: '32px 28px', background: 'var(--cream)' }}>
            <div style={{ fontSize: 22, color: 'var(--gold)', marginBottom: 16 }}>{icons[key]}</div>
            <h2 style={{ fontSize: 16, fontWeight: 400, marginBottom: 12 }}>{t.service[key].name[lang]}</h2>
            <div className="gold-line" />
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.85 }}>{t.service[key].desc[lang]}</p>
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--gold)', marginTop: 20, paddingTop: 16, borderTop: '0.5px solid var(--border)' }}>{t.service[key].price[lang]}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <Link href="/contact" className="btn-dark">{lang === 'ja' ? 'お問い合わせ・ご相談はこちら' : 'Contact us'}</Link>
      </div>
    </div>
  )
}
