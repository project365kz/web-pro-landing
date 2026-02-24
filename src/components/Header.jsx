import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(9,9,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo size={36} />

        {/* Desktop навигация */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#94A3B8',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              className="group"
              onMouseEnter={(e) => (e.target.style.color = 'white')}
              onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA кнопка */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            alignItems: 'center',
            background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
            boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
            padding: '10px 24px',
            borderRadius: 99,
            fontSize: 13,
            fontWeight: 600,
            color: 'white',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'
            e.target.style.boxShadow = '0 6px 25px rgba(124,58,237,0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 4px 20px rgba(124,58,237,0.35)'
          }}
        >
          Обсудить проект
        </a>

        {/* Мобильное меню */}
        <button
          className="md:hidden"
          style={{ color: 'white', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильная панель */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            margin: '12px 16px 0',
            borderRadius: 16,
            padding: 24,
            background: 'rgba(15,15,30,0.95)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: 15,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.3s',
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#CBD5E1')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
              style={{ textAlign: 'center', marginTop: 12, fontSize: 14 }}
              onClick={() => setMobileOpen(false)}
            >
              Обсудить проект
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
