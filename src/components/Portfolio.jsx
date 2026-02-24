import { ExternalLink } from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const WORKS = [
  {
    title: 'Кофейня «Aroma»',
    category: 'Лендинг',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    mockup: 'AROMA',
  },
  {
    title: 'Фитнес-клуб «POWER»',
    category: 'Лендинг',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    mockup: 'POWER',
  },
  {
    title: 'IT-компания «NexTech»',
    category: 'Лендинг',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    mockup: 'NEXTECH',
  },
  {
    title: 'Игра «Birthday Quest»',
    category: '2D Игра',
    gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    mockup: 'GAME',
  },
  {
    title: 'Бот-ассистент «SmartBot»',
    category: 'Автоматизация',
    gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
    mockup: 'BOT',
  },
  {
    title: 'Салон красоты «Glow»',
    category: 'Лендинг',
    gradient: 'linear-gradient(135deg, #D946EF, #EC4899)',
    mockup: 'GLOW',
  },
]

function MockupPreview({ text, gradient }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: gradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Браузерные точки */}
      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 5, alignItems: 'center' }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        <div style={{ marginLeft: 12, height: 9, width: 100, background: 'rgba(255,255,255,0.15)', borderRadius: 99 }} />
      </div>

      <span
        className="heading-font"
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '3px',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
        {text}
      </span>

      <div style={{ marginTop: 16, width: '70%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ height: 8, background: 'rgba(255,255,255,0.2)', borderRadius: 4 }} />
        <div style={{ height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, width: '65%', margin: '0 auto' }} />
      </div>

      <div style={{ marginTop: 20, height: 32, width: 96, background: 'rgba(255,255,255,0.25)', borderRadius: 99 }} />

      {/* Декоративные круги */}
      <div style={{ position: 'absolute', bottom: -24, right: -24, width: 96, height: 96, border: '2px solid rgba(255,255,255,0.1)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', top: -16, left: -16, width: 64, height: 64, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }} />
    </div>
  )
}

export default function Portfolio() {
  const [ref, visible] = useReveal()

  return (
    <section id="portfolio" style={{ padding: '120px 0' }} className="relative">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Портфолио"
          title="Наши"
          highlight="работы"
          subtitle="Каждый проект — уникальный дизайн, адаптированный под задачи клиента"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {WORKS.map((work) => (
            <div
              key={work.title}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.5s ease',
                position: 'relative',
              }}
              className="group"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <MockupPreview text={work.mockup} gradient={work.gradient} />
              </div>

              {/* Оверлей */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3) 50%, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 24,
                }}
                className="group-hover:!opacity-100"
              >
                <span style={{ fontSize: 11, color: '#C4B5FD', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>
                  {work.category}
                </span>
                <h3 style={{ color: 'white', fontSize: 18, fontWeight: 600, marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                  {work.title}
                  <ExternalLink size={15} style={{ color: '#94A3B8' }} />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
