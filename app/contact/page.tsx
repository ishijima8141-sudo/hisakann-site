'use client'
import { useState } from 'react'
import { useLang } from '@/components/LangProvider'
import { t } from '@/lib/i18n'
import { supabase } from '@/lib/supabase'

type FormState = { name: string; email: string; type: 'purchase' | 'order' | 'coordination' | 'other'; message: string }

export default function ContactPage() {
  const { lang } = useLang()
  const [form, setForm] = useState<FormState>({ name: '', email: '', type: 'purchase', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true); setError('')
    const { error: err } = await supabase.from('inquiries').insert([form])
    setSending(false)
    if (err) setError(lang === 'ja' ? '送信に失敗しました。時間をおいて再度お試しください。' : 'Failed to send. Please try again later.')
    else setSent(true)
  }

  const inputStyle = { width: '100%', padding: '10px 14px', fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text)', background: '#fff', border: '0.5px solid var(--border-strong)', outline: 'none' }
  const labelStyle = { fontFamily: 'Hiragino Sans, sans-serif', fontSize: 11, color: 'var(--text-sub)', display: 'block', marginBottom: 6, letterSpacing: '0.04em' }

  if (sent) return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '80px 48px', textAlign: 'center' }}>
      <div style={{ fontSize: 28, color: 'var(--gold)', marginBottom: 20 }}>◈</div>
      <h2 style={{ fontSize: 20, fontWeight: 400, marginBottom: 12 }}>{lang === 'ja' ? 'お問い合わせありがとうございます' : 'Thank you for your inquiry'}</h2>
      <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.8 }}>{t.contact.success[lang]}</p>
    </div>
  )

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 48px' }} className="section-pad-mobile">
      <p className="eyebrow" style={{ marginBottom: 12 }}>Contact</p>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{t.contact.title[lang]}</h1>
      <div className="gold-line" />
      <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.85, marginBottom: 40 }}>{t.contact.subtitle[lang]}</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div><label style={labelStyle}>{t.contact.name[lang]} *</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} placeholder={lang === 'ja' ? '山田 太郎' : 'John Doe'} /></div>
        <div><label style={labelStyle}>{t.contact.email[lang]} *</label><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="example@email.com" /></div>
        <div>
          <label style={labelStyle}>{t.contact.type[lang]} *</label>
          <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value as FormState['type'] })} style={{ ...inputStyle, cursor: 'pointer' }}>
            {(['purchase', 'order', 'coordination', 'other'] as const).map(key => (
              <option key={key} value={key}>{t.contact.types[key][lang]}</option>
            ))}
          </select>
        </div>
        <div><label style={labelStyle}>{t.contact.message[lang]} *</label><textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} placeholder={lang === 'ja' ? 'ご希望のモチーフ・サイズ・ご予算などをお知らせください。' : 'Please share the motif, size, budget, or any other details.'} /></div>
        {error && <p style={{ fontFamily: 'Hiragino Sans, sans-serif', fontSize: 12, color: '#c0392b' }}>{error}</p>}
        <button type="submit" className="btn-dark" disabled={sending} style={{ alignSelf: 'flex-start' }}>
          {sending ? (lang === 'ja' ? '送信中...' : 'Sending...') : t.contact.submit[lang]}
        </button>
      </form>
    </div>
  )
}
