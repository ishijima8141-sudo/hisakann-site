'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LPPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await supabase.from('inquiries').insert([{
      name: form.name,
      email: form.email,
      message: form.message,
    }])
    setSent(true)
    setSending(false)
  }

  return (
    <div style={{
      fontFamily: 'Hiragino Mincho ProN, Georgia, serif',
      background: '#F1EBDD',
      color: '#343D32',
      minHeight: '100vh',
      ['--lp-dark' as string]: '#343D32',
      ['--lp-cream' as string]: '#F1EBDD',
      ['--lp-cream2' as string]: '#EAE2CE',
      ['--lp-gold' as string]: '#AD9663',
      ['--lp-border' as string]: 'rgba(52,61,50,0.18)',
      ['--lp-sub' as string]: 'rgba(52,61,50,0.65)',
      ['--lp-muted' as string]: 'rgba(52,61,50,0.4)',
    }}>

      {/* HERO */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '90vh' }} className="hero-grid">
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 300, background: '#343D32' }} className="hero-img-mobile">
          <Image
            src="/images/kiku.jpg"
            alt="菊"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.15), transparent)'
          }} />
        </div>
        <div style={{
          padding: '80px 56px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: '#343D32',
          borderLeft: '0.5px solid rgba(173,150,99,0.3)'
        }} className="hero-text-mobile">
          <p style={{
            fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
            fontFamily: 'Hiragino Sans, sans-serif', marginBottom: 24
          }}>NULLEA — WATERCOLOR ART</p>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400,
            lineHeight: 1.25, marginBottom: 12, letterSpacing: '0.04em',
            color: '#F1EBDD'
          }}>
            アートの贈り物。
          </h1>
          <div style={{ width: 32, height: 1, background: 'var(--lp-gold)', margin: '16px 0 20px' }} />
          <p style={{
            fontFamily: 'Hiragino Sans, sans-serif', fontSize: 14,
            color: 'rgba(241,235,221,0.75)', lineHeight: 2, marginBottom: 40, maxWidth: 360
          }}>
            縁起の良いアートで日常に彩りを。<br />
            玄関やオフィスに飾るだけで、<br />
            空間の質と運気がそっと高まる一枚を。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280 }}>
            <a
              href="https://m.me/hisanori.ishijima"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 24px', background: '#1877F2', color: '#fff',
                textDecoration: 'none', fontSize: 13, fontFamily: 'Hiragino Sans, sans-serif',
                letterSpacing: '0.08em'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.27 2 11.5c0 2.88 1.35 5.45 3.47 7.18V22l3.17-1.74c.85.23 1.74.36 2.67.36 5.52 0 9.69-4.27 9.69-9.12C21 6.27 17.52 2 12 2zm1.08 12.26l-2.48-2.64-4.83 2.64 5.31-5.64 2.54 2.64 4.77-2.64-5.31 5.64z"/></svg>
              Messengerで気軽に相談する
            </a>
            <a
              href="#contact-form"
              style={{
                display: 'block', textAlign: 'center',
                padding: '14px 24px', border: '0.5px solid rgba(241,235,221,0.3)',
                color: '#F1EBDD', textDecoration: 'none',
                fontSize: 13, fontFamily: 'Hiragino Sans, sans-serif',
                letterSpacing: '0.08em'
              }}
            >
              お問い合わせフォームへ
            </a>
          </div>
        </div>
      </section>

      {/* 3 FEATURES */}
      <section style={{ padding: '80px 48px', maxWidth: 1100, margin: '0 auto' }} className="section-pad-mobile">
        <p style={{
          fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
          fontFamily: 'Hiragino Sans, sans-serif', textAlign: 'center', marginBottom: 48
        }}>FEATURES</p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32
        }}>
          {[
            {
              num: '01',
              title: '運気が上がる\n縁起の良い絵',
              desc: '牡丹・蓮・梅など、古くから縁起が良いとされる草花を透明水彩で丁寧に描いた作品。玄関やリビングに飾ることで、空間に良い気を呼び込みます。',
            },
            {
              num: '02',
              title: '世界にひとつの\nギフトアート',
              desc: '誕生日・結婚・開業祝いなど、特別な節目に添える贈り物として。花束と違い飾り続けられ、贈り主の想いを長く伝えます。',
            },
            {
              num: '03',
              title: '祝い事や思い出を\nカタチに',
              desc: '記念の花・思い出の景色などをオーダーメイドで制作。あなただけの特別な一枚を、透明水彩の柔らかな表現で残します。',
            },
          ].map((f) => (
            <div key={f.num} style={{ borderTop: '0.5px solid var(--lp-border)', paddingTop: 24 }}>
              <p style={{
                fontSize: 11, color: 'var(--lp-gold)', fontFamily: 'Hiragino Sans, sans-serif',
                letterSpacing: '0.16em', marginBottom: 12
              }}>{f.num}</p>
              <h3 style={{
                fontSize: 17, fontWeight: 400, lineHeight: 1.5,
                whiteSpace: 'pre-line', marginBottom: 16
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13,
                color: 'var(--lp-sub)', lineHeight: 1.9
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section style={{ background: 'var(--lp-cream2)', padding: '80px 48px' }} className="section-pad-mobile">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{
            fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
            fontFamily: 'Hiragino Sans, sans-serif', textAlign: 'center', marginBottom: 40
          }}>WORKS</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { src: '/images/peony.jpg', label: '大きな牡丹', price: null, sold: false },
              { src: '/images/lotus.jpg', label: '蓮の花', price: null, sold: true },
              { src: '/images/orchid.jpg', label: '青い胡蝶蘭', price: '¥30,000', sold: false },
              { src: '/images/plum.jpg', label: '紅梅', price: null, sold: true },
            ].map((w) => (
              <div key={w.src} style={{ position: 'relative', aspectRatio: '3/4', background: '#343D32', overflow: 'hidden' }}>
                <Image src={w.src} alt={w.label} fill style={{ objectFit: 'cover' }} />
                {w.sold && (
                  <div style={{
                    position: 'absolute', top: 10, right: 10,
                    background: 'rgba(0,0,0,0.65)', padding: '3px 8px',
                    fontFamily: 'Hiragino Sans, sans-serif', fontSize: 9,
                    color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em'
                  }}>SOLD OUT</div>
                )}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '28px 12px 10px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.6))'
                }}>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'Hiragino Sans, sans-serif' }}>{w.label}</p>
                  {w.price && !w.sold && (
                    <p style={{ fontSize: 11, color: 'var(--lp-gold)', fontFamily: 'Hiragino Sans, sans-serif', marginTop: 2 }}>{w.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/gallery" style={{
              fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, letterSpacing: '0.14em',
              padding: '11px 28px', border: '0.5px solid var(--lp-border)',
              color: '#343D32', textDecoration: 'none', display: 'inline-block'
            }}>作品一覧を見る</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: '80px 48px', maxWidth: 1100, margin: '0 auto' }} className="section-pad-mobile">
        <p style={{
          fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
          fontFamily: 'Hiragino Sans, sans-serif', textAlign: 'center', marginBottom: 48
        }}>PRICING</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {[
            {
              label: '既存作品の販売',
              size: 'F0サイズ（A4程度）〜',
              price: '¥30,000〜',
              note: '額装込み / 送料別',
            },
            {
              label: 'オーダーメイド制作',
              size: 'ご希望のサイズで対応',
              price: '¥50,000〜',
              note: '額装込み / 制作期間1〜2ヶ月',
            },
          ].map((p) => (
            <div key={p.label} style={{
              border: '0.5px solid var(--lp-border)', padding: '32px 28px',
              background: 'var(--lp-cream)'
            }}>
              <p style={{
                fontSize: 10, letterSpacing: '0.14em', color: 'var(--lp-gold)',
                fontFamily: 'Hiragino Sans, sans-serif', marginBottom: 12
              }}>{p.label.toUpperCase()}</p>
              <h3 style={{ fontSize: 16, fontWeight: 400, marginBottom: 4 }}>{p.label}</h3>
              <p style={{
                fontFamily: 'Hiragino Sans, sans-serif', fontSize: 12,
                color: 'var(--lp-sub)', marginBottom: 16
              }}>{p.size}</p>
              <div style={{ height: '0.5px', background: 'var(--lp-border)', margin: '16px 0' }} />
              <p style={{ fontSize: 22, color: '#343D32', marginBottom: 4 }}>{p.price}</p>
              <p style={{
                fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--lp-gold)'
              }}>{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFILE */}
      <section style={{ background: '#343D32', padding: '80px 48px', color: 'var(--lp-cream)' }} className="section-pad-mobile">
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }} className="profile-flex-mobile">
          <div style={{ width: 110, flexShrink: 0, position: 'relative', aspectRatio: '3/4', background: '#2a2520', overflow: 'hidden' }}>
            <Image src="/images/profile.jpg" alt="石嶋久寛" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{
              fontSize: 10, letterSpacing: '0.2em', color: 'var(--lp-gold)',
              fontFamily: 'Hiragino Sans, sans-serif', marginBottom: 8
            }}>ARTIST</p>
            <h2 style={{ fontSize: 22, fontWeight: 400, marginBottom: 4 }}>ひさのり</h2>
            <p style={{
              fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10,
              color: 'rgba(255,255,255,0.4)', letterSpacing: '0.14em', marginBottom: 20
            }}>HISA / WATERCOLOR ARTIST</p>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.15)', marginBottom: 20 }} />
            <p style={{
              fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13,
              color: 'rgba(255,255,255,0.65)', lineHeight: 2
            }}>
              大手建材メーカーでデザイン企画を10年以上担当し、グッドデザイン賞・iFデザイン賞・Red Dotデザイン賞を受賞。傍らで続けてきた水彩画を活かし、縁起の良い草花や人物を透明水彩で描く作家「Hisa」として活動中。贈り物として喜ばれる一枚から、空間を彩るインテリアアートまで手がけています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '80px 48px', textAlign: 'center', maxWidth: 700, margin: '0 auto' }} className="section-pad-mobile">
        <p style={{
          fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
          fontFamily: 'Hiragino Sans, sans-serif', marginBottom: 24
        }}>CONTACT</p>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 400, marginBottom: 16, lineHeight: 1.5 }}>
          まずは気軽にご相談ください。
        </h2>
        <p style={{
          fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13,
          color: 'var(--lp-sub)', lineHeight: 2, marginBottom: 40
        }}>
          贈り先のイメージや、飾る場所のご要望など、<br />
          どんな些細なことでもお気軽にどうぞ。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 340, margin: '0 auto' }}>
          <a
            href="https://m.me/hisanori.ishijima"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '16px 24px', background: '#1877F2', color: '#fff',
              textDecoration: 'none', fontSize: 13, fontFamily: 'Hiragino Sans, sans-serif',
              letterSpacing: '0.08em'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.27 2 11.5c0 2.88 1.35 5.45 3.47 7.18V22l3.17-1.74c.85.23 1.74.36 2.67.36 5.52 0 9.69-4.27 9.69-9.12C21 6.27 17.52 2 12 2zm1.08 12.26l-2.48-2.64-4.83 2.64 5.31-5.64 2.54 2.64 4.77-2.64-5.31 5.64z"/></svg>
            Messengerで気軽に相談する
          </a>
          <p style={{
            fontSize: 11, color: 'var(--lp-muted)', fontFamily: 'Hiragino Sans, sans-serif',
            letterSpacing: '0.1em'
          }}>— または —</p>
          <a
            href="#contact-form"
            style={{
              display: 'block', textAlign: 'center',
              padding: '16px 24px', border: '0.5px solid var(--lp-border)',
              color: '#343D32', textDecoration: 'none',
              fontSize: 13, fontFamily: 'Hiragino Sans, sans-serif',
              letterSpacing: '0.08em'
            }}
          >
            フォームで詳しく問い合わせる ↓
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" style={{ background: 'var(--lp-cream2)', padding: '80px 48px' }} className="section-pad-mobile">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{
            fontSize: 10, letterSpacing: '0.22em', color: 'var(--lp-gold)',
            fontFamily: 'Hiragino Sans, sans-serif', textAlign: 'center', marginBottom: 40
          }}>INQUIRY FORM</p>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p style={{ fontSize: 16, marginBottom: 12 }}>お問い合わせありがとうございます。</p>
              <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--lp-sub)', lineHeight: 2 }}>
                内容を確認のうえ、2〜3営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { id: 'name', label: 'お名前', type: 'text', placeholder: '山田 太郎', required: true },
                { id: 'email', label: 'メールアドレス', type: 'email', placeholder: 'mail@example.com', required: true },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{
                    display: 'block', fontFamily: 'Hiragino Sans, sans-serif',
                    fontSize: 11, color: 'var(--lp-sub)', letterSpacing: '0.1em',
                    marginBottom: 6
                  }}>{field.label}</label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.id as 'name' | 'email']}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 14px', boxSizing: 'border-box',
                      border: '0.5px solid var(--lp-border)', background: 'var(--lp-cream)',
                      fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13,
                      color: '#343D32', outline: 'none'
                    }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{
                  display: 'block', fontFamily: 'Hiragino Sans, sans-serif',
                  fontSize: 11, color: 'var(--lp-sub)', letterSpacing: '0.1em', marginBottom: 6
                }}>お問い合わせ内容</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="贈り先のこと、飾る場所、ご予算など、お気軽にお書きください。"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 14px', boxSizing: 'border-box',
                    border: '0.5px solid var(--lp-border)', background: 'var(--lp-cream)',
                    fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13,
                    color: '#343D32', outline: 'none', resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                style={{
                  padding: '14px 32px', background: '#343D32', color: 'var(--lp-cream)',
                  border: 'none', cursor: sending ? 'not-allowed' : 'pointer',
                  fontFamily: 'Hiragino Sans, sans-serif', fontSize: 12,
                  letterSpacing: '0.14em', opacity: sending ? 0.6 : 1
                }}
              >
                {sending ? '送信中...' : '送信する'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '0.5px solid var(--lp-border)', padding: '24px 48px',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10,
          color: 'var(--lp-muted)', letterSpacing: '0.14em'
        }}>© 2025 NULLEA / Hisa Ishijima</p>
        <div style={{ marginTop: 12, display: 'flex', gap: 20, justifyContent: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--lp-muted)', textDecoration: 'none', letterSpacing: '0.1em' }}>サイトトップへ</Link>
          <Link href="/gallery" style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 10, color: 'var(--lp-muted)', textDecoration: 'none', letterSpacing: '0.1em' }}>作品一覧</Link>
        </div>
      </footer>
    </div>
  )
}
