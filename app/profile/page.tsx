'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { t } from '@/lib/i18n'

export default function ProfilePage() {
  const { lang } = useLang()
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 48px' }} className="section-pad-mobile">
      <p className="eyebrow" style={{ marginBottom: 12 }}>Artist</p>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{t.profile.title[lang]}</h1>
      <div className="gold-line" style={{ marginBottom: 48 }} />
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }} className="profile-flex-mobile">
        <div style={{ flexShrink: 0 }}>
          <div style={{ width: 200, aspectRatio: '3/4', position: 'relative', background: '#1a1714', overflow: 'hidden' }}>
            <Image src="/images/profile.jpg" alt="ひさのり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
            {t.profile.tags.map(tag => (
              <span key={tag} style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9, color: 'var(--text-muted)', border: '0.5px solid var(--border-strong)', padding: '3px 8px' }}>{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <a href="https://www.instagram.com/hisa_makehimher/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', textDecoration: 'none' }}>↗ @hisa_makehimher</a>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontSize: 10, color: 'var(--gold)', fontFamily: 'Hiragino Sans, sans-serif', letterSpacing: '0.16em', marginBottom: 6 }}>{t.profile.brand}</p>
          <p style={{ fontSize: 26, fontWeight: 400, marginBottom: 2 }}>{t.profile.name[lang]}</p>
          <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--gold)', letterSpacing: '0.14em', marginBottom: 24 }}>{t.profile.role[lang].toUpperCase()}</p>
          {t.profile.bio[lang].split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 14, color: 'var(--text-sub)', lineHeight: 1.9, marginBottom: 20 }}>{para}</p>
          ))}
          <div style={{ marginTop: 32, borderTop: '0.5px solid var(--border)', paddingTop: 28 }}>
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9, letterSpacing: '0.16em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 20 }}>{lang === 'ja' ? '活動履歴' : 'Career'}</p>
            {[
              { year: '2014〜', ja: '某大手建材メーカーにてプロダクトプランニングに従事', en: 'Joined major building materials manufacturer in product planning' },
              { year: '〜2023', ja: 'デジタルイラスト（アニメ・ゲームキャラクター）を制作', en: 'Created digital illustrations (anime/game characters)' },
              { year: '2023〜', ja: '透明水彩に転向。植物・風水モチーフをメインに制作開始', en: 'Shifted to transparent watercolor. Began focusing on botanical and feng shui motifs' },
              { year: '2025', ja: '個展開催。NULLEAとしてインテリアアートコーディネート事業を開始', en: 'Solo exhibition held. Launched NULLEA and interior art coordination business' },
            ].map((item) => (
              <div key={item.year} style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                <span style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--gold)', minWidth: 60, paddingTop: 2 }}>{item.year}</span>
                <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.7 }}>{item[lang]}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn-dark">{lang === 'ja' ? 'お問い合わせ・ご相談' : 'Get in touch'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
