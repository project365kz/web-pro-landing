import { Star, Quote } from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const REVIEWS = [
  {
    name: 'Алия К.',
    role: 'Владелица кофейни',
    text: 'Сделали лендинг за 2 дня! Дизайн превзошёл все ожидания. Количество заказов выросло на 40% уже в первый месяц.',
    avatar: 'АК',
    color: '#F59E0B',
  },
  {
    name: 'Ержан М.',
    role: 'CEO NexTech',
    text: 'Ребята из Web-Pro — настоящие профессионалы. Красивый, быстрый сайт и отличная коммуникация на всех этапах.',
    avatar: 'ЕМ',
    color: '#A78BFA',
  },
  {
    name: 'Дана С.',
    role: 'Маркетолог',
    text: 'Заказали 2D-игру на корпоратив — команда была в восторге! Очень креативный подход и внимание к деталям.',
    avatar: 'ДС',
    color: '#F472B6',
  },
]

const cardStyle = {
  background: 'linear-gradient(160deg, rgba(30,30,60,0.9) 0%, rgba(15,15,35,0.95) 100%)',
  border: '1px solid rgba(124,58,237,0.18)',
  borderRadius: 16,
  padding: 32,
  position: 'relative',
  transition: 'all 0.4s ease',
}

export default function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section style={{ padding: '120px 0' }} className="relative">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Отзывы"
          title="Нам"
          highlight="доверяют"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = `${r.color}35`
                e.currentTarget.style.boxShadow = `0 20px 50px ${r.color}10`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Кавычки */}
              <Quote
                size={40}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: r.color,
                  opacity: 0.07,
                }}
                fill="currentColor"
              />

              {/* Звёзды */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={15} fill="#FBBF24" style={{ color: '#FBBF24' }} />
                ))}
              </div>

              <p style={{ color: '#CBD5E1', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
                «{r.text}»
              </p>

              {/* Разделитель */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }} />

              {/* Автор */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${r.color}, ${r.color}99)`,
                    boxShadow: `0 4px 12px ${r.color}30`,
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>{r.name}</div>
                  <div style={{ color: '#64748B', fontSize: 12 }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
