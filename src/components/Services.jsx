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
  },
  {
    icon: Bot,
    title: 'Автоматизация',
    desc: 'Автоматизируем рутину: чат-боты, рассылки, CRM-интеграции, парсинг данных.',
    color: '#34D399',
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card-glow group"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
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
                  background: `${s.color}12`,
                  border: `1px solid ${s.color}30`,
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

              {/* Нижняя линия при ховере */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 28,
                  right: 28,
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${s.color}30, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
