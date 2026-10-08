'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/components/LangProvider'
import { t } from '@/lib/i18n'
import { useEffect, useState } from 'react'
import { supabase, Artwork } from '@/lib/supabase'

export default function HomePage() {
  const { lang } = useLang()
  const [artworks, setArtworks] = useState<Artwork[]>([])

  useEffect(() => {
    supabase.from('artworks').select('*').order('display_order').limit(4)
      .then(({ data }) => { if (data) setArtworks(data) })
  }, [])

  const placeholders = [
    { id: '1', label: '青い胡蝶蘭', sub: 'Blue Orchid', src: '/images/orchid.jpg' },
    { id: '2', label: '梅の花', sub: 'Plum Blossom', src: '/images/plum.jpg' },
    { id: '3', label: '蓮の花', sub: 'Lotus', src: '/images/lotus.jpg' },
    { id: '4', label: '大きな牡丹', sub: 'Peony', src: '/images/peony.jpg' },
  ]

  const items = artworks.length > 0
    ? artworks.map(aw => ({ id: aw.id, label: lang === 'ja' ? aw.title_ja : aw.title_en, sub: lang === 'ja' ? aw.motif_ja : aw.motif_en, src: aw.image_url }))
    : placeholders

  return (
    <>
      {/* HERO */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 60px)' }} className="hero-grid">
        <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '0.5px solid var(--border)' }} className="hero-text-mobile">
          <p className="eyebrow" style={{ marginBottom: 20 }}>{t.hero.eyebrow[lang]}</p>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.4, marginBottom: 8, whiteSpace: 'pre-line' }}>{t.hero.h1[lang]}</h1>
          <div className="gold-line" />
          <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.9, marginBottom: 36, maxWidth: 380 }}>{t.hero.sub[lang]}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/gallery" className="btn-dark">{t.hero.cta_gallery[lang]}</Link>
            <Link href="/service" className="btn-outline">{t.hero.cta_service[lang]}</Link>
          </div>
        </div>
        <div style={{ position: 'relative', background: '#1a1714', overflow: 'hidden', minHeight: 260 }} className="hero-img-mobile">
          <Image src="/images/peony.jpg" alt="大きな牡丹" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', background: 'rgba(0,0,0,0.4)', padding: '3px 8px' }}>
            大きな牡丹 · Watercolor / NULLEA
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }} className="section-pad-mobile">
        <p className="section-label">{t.gallery.title[lang]}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }} className="gallery-grid-mobile">
          {items.map((item) => (
            <Link key={item.id} href={`/gallery/${item.id}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', background: '#111', overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                <Image src={item.src} alt={item.label} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 12px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.75))' }}>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.9)' }}>{item.label}</p>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif', letterSpacing: '0.08em' }}>{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <Link href="/gallery" className="btn-outline">{t.gallery.view_all[lang]}</Link>
        </div>
      </section>

      {/* SERVICE PREVIEW */}
      <section style={{ background: 'var(--cream-2)', padding: '64px 48px' }} className="section-pad-mobile">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label">{t.service.title[lang]}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }} className="service-grid-mobile">
            {(['sales', 'order'] as const).map((key) => (
              <div key={key} style={{ background: 'var(--cream)', border: '0.5px solid var(--border)', padding: '28px 24px' }}>
                <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--text)', marginBottom: 4 }}>{t.service[key].name[lang]}</p>
                <div className="gold-line" />
                <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 12, color: 'var(--text-sub)', lineHeight: 1.85 }}>{t.service[key].desc[lang]}</p>
                <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--gold)', marginTop: 16, paddingTop: 12, borderTop: '0.5px solid var(--border)' }}>{t.service[key].price[lang]}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: 'right' }}>
            <Link href="/service" className="btn-outline">{lang === 'ja' ? 'サービス一覧を見る' : 'View all services'}</Link>
          </div>
        </div>
      </section>

      {/* PROFILE TEASER */}
      <section style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }} className="section-pad-mobile">
        <p className="section-label">{t.profile.title[lang]}</p>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }} className="profile-flex-mobile">
          <div style={{ width: 120, flexShrink: 0, position: 'relative', aspectRatio: '3/4', background: '#1a1714' }}>
            <Image src="/images/profile.jpg" alt="ひさのり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 10, color: 'var(--gold)', fontFamily: 'Hiragino Sans, sans-serif', letterSpacing: '0.16em', marginBottom: 6 }}>{t.profile.brand}</p>
            <p style={{ fontSize: 22, fontWeight: 400, marginBottom: 2 }}>{t.profile.name[lang]}</p>
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 16 }}>{t.profile.role[lang].toUpperCase()}</p>
            <div className="gold-line" />
            <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.9 }}>{t.profile.bio[lang].split('\n\n')[0]}</p>
            <div style={{ marginTop: 24 }}>
              <Link href="/profile" className="btn-outline">{lang === 'ja' ? 'プロフィール詳細' : 'Full Profile'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark)', padding: '64px 48px', textAlign: 'center' }} className="section-pad-mobile">
        <p className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: 20 }}>{lang === 'ja' ? 'お問い合わせ' : 'Get in touch'}</p>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: 'var(--cream)', marginBottom: 12 }}>{t.cta.h2[lang]}</h2>
        <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 32, lineHeight: 1.8 }}>{t.cta.sub[lang]}</p>
        <Link href="/contact" style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, letterSpacing: '0.12em', padding: '12px 32px', background: 'var(--gold)', color: 'var(--dark)', textDecoration: 'none', display: 'inline-block' }}>{t.cta.btn[lang]}</Link>
      </section>
    </>
  )
}