import Logo from './Logo'
import { Heart, ArrowUp } from 'lucide-react'

const NAV = [
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(124,58,237,0.15)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 100%)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 0' }}>
        {/* Верхняя часть */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 40,
            paddingBottom: 40,
          }}
        >
          {/* Лого + описание */}
          <div style={{ maxWidth: 320 }}>
            <div style={{ marginBottom: 16 }}>
              <Logo size={34} />
            </div>
            <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7 }}>
              Создаём стильные одностраничные сайты с премиальным дизайном. Быстро, доступно и красиво.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              Навигация
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    color: '#94A3B8',
                    fontSize: 14,
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#A78BFA')}
                  onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h4
              style={{
                color: 'white',
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              Контакты
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="mailto:info@web-pro.kz"
                style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
              >
                info@web-pro.kz
              </a>
              <a
                href="tel:+77771234567"
                style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
              >
                +7 (777) 123-45-67
              </a>
              <span style={{ color: '#94A3B8', fontSize: 14 }}>г. Алматы, Казахстан</span>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div
          style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)',
          }}
        />

        {/* Нижняя часть */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            padding: '24px 0',
          }}
        >
          <p style={{ color: '#475569', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            Сделано с
            <Heart size={13} style={{ color: '#7C3AED' }} fill="currentColor" />
            Web-Pro © {new Date().getFullYear()}
          </p>

          {/* Кнопка наверх */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: '#64748B',
              fontSize: 13,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
          >
            Наверх
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
