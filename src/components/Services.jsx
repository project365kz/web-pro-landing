import {
  Globe,
  Palette,
  Smartphone,
  Gamepad2,
  Bot,
  Rocket,
} from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const SERVICES = [
  {
    icon: Globe,
    title: 'Лендинги',
    desc: 'Продающие одностраничные сайты с конверсией до 12%. Идеально для запуска продукта или услуги.',
    color: '#A78BFA',
  },
  {
    icon: Palette,
    title: 'UI/UX Дизайн',
    desc: 'Премиальный дизайн, который выделит вас среди конкурентов. Каждый пиксель на своём месте.',
    color: '#F472B6',
  },
  {
    icon: Smartphone,
    title: 'Адаптивность',
    desc: 'Безупречное отображение на любом устройстве — от смартфона до широкоформатного монитора.',
    color: '#38BDF8',
  },
  {
    icon: Gamepad2,
    title: '2D Игры',
    desc: 'Создадим уникальную 2D-игру на день рождения или корпоратив. Незабываемый подарок!',
    color: '#FBBF24',
    featured: true,
    badge: 'Хит',
  },
  {
    icon: Bot,
    title: 'Автоматизация',
    desc: 'Автоматизируем рутину: чат-боты, рассылки, CRM-интеграции, парсинг данных.',
    color: '#34D399',
    featured: true,
    badge: 'Новинка',
  },
  {
    icon: Rocket,
    title: 'Запуск и SEO',
    desc: 'Разместим сайт, настроим домен, SSL и базовую SEO-оптимизацию для поисковых систем.',
    color: '#818CF8',
  },
]

/* Стиль карточки */
const cardStyle = {
  background: 'linear-gradient(160deg, rgba(30,30,60,0.9) 0%, rgba(15,15,35,0.95) 100%)',
  border: '1px solid rgba(124,58,237,0.18)',
  borderRadius: '16px',
  padding: '32px',
  transition: 'all 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
}

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section id="services" style={{ padding: '120px 0' }} className="relative">
      {/* Фоновый блик */}
      <div
        className="absolute top-20 right-0 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          filter: 'blur(150px)',
          opacity: 0.2,
          background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)',
        }}
      />

      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Наши услуги"
          title="Всё, что нужно для"
          highlight="вашего бизнеса"
          subtitle="От идеи до запуска — мы берём на себя весь процесс разработки"
        />

        {/* Сетка карточек */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 24 }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-glow group"
              style={{
                ...cardStyle,
                ...(s.featured
                  ? {
                      border: `1.5px solid ${s.color}45`,
                      boxShadow: `0 0 30px ${s.color}12, 0 10px 40px ${s.color}08`,
                      background: `linear-gradient(160deg, ${s.color}10 0%, rgba(15,15,35,0.95) 40%)`,
                    }
                  : {}),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = s.featured ? `${s.color}60` : 'rgba(124,58,237,0.35)'
                e.currentTarget.style.boxShadow = s.featured
                  ? `0 20px 60px ${s.color}20, 0 0 40px ${s.color}10`
                  : '0 20px 60px rgba(124,58,237,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = s.featured ? `${s.color}45` : 'rgba(124,58,237,0.18)'
                e.currentTarget.style.boxShadow = s.featured
                  ? `0 0 30px ${s.color}12, 0 10px 40px ${s.color}08`
                  : 'none'
              }}
            >
              {/* Бейдж для featured */}
              {s.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: `linear-gradient(135deg, ${s.color}, ${s.color}CC)`,
                    color: s.color === '#FBBF24' ? '#1a1a2e' : 'white',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 99,
                    letterSpacing: 0.5,
                    boxShadow: `0 2px 10px ${s.color}40`,
                  }}
                >
                  {s.badge}
                </div>
              )}

              {/* Иконка */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  background: s.featured ? `${s.color}18` : `${s.color}12`,
                  border: `1px solid ${s.featured ? `${s.color}40` : `${s.color}30`}`,
                  transition: 'transform 0.3s ease',
                }}
              >
                <s.icon size={25} style={{ color: s.color }} />
              </div>

              <h3
                className="heading-font"
                style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '10px' }}
              >
                {s.title}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.7 }}>
                {s.desc}
              </p>

              {/* Нижняя линия */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 28,
                  right: 28,
                  height: s.featured ? 2 : 1,
                  background: `linear-gradient(90deg, transparent, ${s.color}${s.featured ? '50' : '30'}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
