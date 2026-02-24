import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const STEPS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Обсуждение',
    desc: 'Узнаём ваши цели, анализируем нишу и конкурентов. Формируем ТЗ.',
    color: '#A78BFA',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Дизайн',
    desc: 'Создаём уникальный макет с фокусом на конверсию и UX.',
    color: '#F472B6',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Разработка',
    desc: 'Верстаем на современных технологиях. Адаптивность и анимации.',
    color: '#38BDF8',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Запуск',
    desc: 'Размещаем на хостинге, подключаем домен, SSL и аналитику.',
    color: '#FBBF24',
  },
]

const cardStyle = {
  background: 'linear-gradient(160deg, rgba(30,30,60,0.9) 0%, rgba(15,15,35,0.95) 100%)',
  border: '1px solid rgba(124,58,237,0.18)',
  borderRadius: '16px',
  padding: '36px 28px',
  textAlign: 'center',
  position: 'relative',
  transition: 'all 0.4s ease',
}

export default function Process() {
  const [ref, visible] = useReveal()

  return (
    <section id="process" style={{ padding: '120px 0' }} className="relative overflow-hidden">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Как мы работаем"
          title="От идеи до"
          highlight="результата"
          subtitle="Прозрачный процесс из 4 этапов — вы всегда знаете, что происходит"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 24 }}
        >
          {STEPS.map((s, i) => (
            <div
              key={s.step}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = `${s.color}40`
                e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}10`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Номер шага */}
              <span
                className="heading-font"
                style={{
                  display: 'block',
                  fontSize: '4.5rem',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: `${s.color}0A`,
                  marginBottom: '-40px',
                }}
              >
                {s.step}
              </span>

              {/* Иконка */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  background: `${s.color}15`,
                  border: `1px solid ${s.color}30`,
                  position: 'relative',
                  zIndex: 1,
                  transition: 'transform 0.3s ease',
                }}
              >
                <s.icon size={25} style={{ color: s.color }} />
              </div>

              <h3
                className="heading-font"
                style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}
              >
                {s.title}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>

              {/* Коннектор-точка */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10px',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: `${s.color}20`,
                    border: `2px solid ${s.color}40`,
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
