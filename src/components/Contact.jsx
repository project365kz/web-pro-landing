import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const inputStyle = {
  width: '100%',
  background: 'rgba(15,15,35,0.8)',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: 12,
  padding: '14px 16px',
  color: 'white',
  fontSize: 14,
  outline: 'none',
  transition: 'all 0.3s ease',
}

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `Заявка с Web-Pro: ${form.name}`,
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const onFocus = (e) => {
    e.target.style.borderColor = 'rgba(124,58,237,0.5)'
    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'
    e.target.style.background = 'rgba(20,20,45,0.9)'
  }
  const onBlur = (e) => {
    e.target.style.borderColor = 'rgba(124,58,237,0.2)'
    e.target.style.boxShadow = 'none'
    e.target.style.background = 'rgba(15,15,35,0.8)'
  }

  const CONTACTS = [
    { icon: Mail, label: 'Email', value: 'info@web-pro.kz', href: 'mailto:info@web-pro.kz', color: '#A78BFA' },
    { icon: Phone, label: 'Телефон', value: '+7 (777) 123-45-67', href: 'tel:+77771234567', color: '#34D399' },
    { icon: MapPin, label: 'Адрес', value: 'г. Алматы, Казахстан', href: null, color: '#F59E0B' },
  ]

  return (
    <section id="contact" style={{ padding: '120px 0' }} className="relative">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Контакты"
          title="Давайте"
          highlight="обсудим"
          subtitle="Расскажите о вашем проекте — мы свяжемся в течение часа"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: 28 }}>
          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            style={{
              borderRadius: 20,
              padding: 40,
              background: 'linear-gradient(160deg, rgba(30,30,60,0.8), rgba(15,15,35,0.95))',
              border: '1px solid rgba(124,58,237,0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="max-sm:!grid-cols-1">
              <div>
                <label style={{ display: 'block', fontSize: 13, color: '#94A3B8', marginBottom: 8, fontWeight: 500 }}>Имя</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  required
                  placeholder="Ваше имя"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, color: '#94A3B8', marginBottom: 8, fontWeight: 500 }}>Телефон</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  required
                  placeholder="+7 (___) ___-__-__"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, color: '#94A3B8', marginBottom: 8, fontWeight: 500 }}>Сообщение</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                rows={4}
                placeholder="Опишите ваш проект..."
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'sending' ? (
                <><Loader2 size={18} className="animate-spin" /> Отправляем...</>
              ) : status === 'sent' ? (
                <><CheckCircle2 size={18} /> Отправлено!</>
              ) : (
                <><Send size={18} /> Отправить заявку</>
              )}
            </button>

            {status === 'error' && (
              <p style={{ color: '#F87171', fontSize: 14, textAlign: 'center' }}>
                Ошибка отправки. Попробуйте позвонить нам.
              </p>
            )}
          </form>

          {/* Контакты */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {CONTACTS.map((c) => (
              <div
                key={c.label}
                style={{
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'linear-gradient(160deg, rgba(30,30,60,0.9), rgba(15,15,35,0.95))',
                  border: '1px solid rgba(124,58,237,0.15)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: `${c.color}12`,
                    border: `1px solid ${c.color}25`,
                  }}
                >
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <div style={{ color: '#64748B', fontSize: 12, marginBottom: 2 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ color: 'white', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Время работы */}
            <div
              style={{
                borderRadius: 16,
                padding: '20px 24px',
                background: 'linear-gradient(160deg, rgba(30,30,60,0.7), rgba(15,15,35,0.9))',
                border: '1px solid rgba(124,58,237,0.1)',
              }}
            >
              <h4 style={{ color: 'white', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>Время работы</h4>
              <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.7 }}>
                Пн–Пт: 09:00–18:00<br />
                Сб: 10:00–15:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
