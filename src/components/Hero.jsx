import { useMemo } from 'react'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import Particles from '@tsparticles/react'

/* Конфигурация орбитальных колец */
const ORBIT_RINGS = [
  {
    radius: 120,
    duration: 22,
    reverse: false,
    tags: [
      { text: 'React', color: '#61DAFB', angle: 30 },
      { text: 'Figma', color: '#F472B6', angle: 210 },
    ],
  },
  {
    radius: 185,
    duration: 32,
    reverse: true,
    tags: [
      { text: 'SEO', color: '#34D399', angle: 0 },
      { text: 'Landing', color: '#A78BFA', angle: 120 },
      { text: 'UX/UI', color: '#FBBF24', angle: 240 },
    ],
  },
  {
    radius: 250,
    duration: 42,
    reverse: false,
    tags: [
      { text: 'Игры', color: '#F59E0B', angle: 60 },
      { text: 'Боты', color: '#34D399', angle: 180 },
      { text: 'Mobile', color: '#38BDF8', angle: 300 },
    ],
  },
]

const STATS = [
  { value: '3 дня', label: 'Средний срок', color: '#A78BFA' },
  { value: '50+', label: 'Проектов', color: '#F59E0B' },
  { value: '100%', label: 'Довольных', color: '#34D399' },
]

/* Крутящаяся орбитальная сфера */
function OrbitVisual() {
  return (
    <div style={{ position: 'relative', width: 540, height: 540 }}>
      {/* Декоративные орбитальные линии */}
      {ORBIT_RINGS.map((ring, i) => (
        <div
          key={`line-${i}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: ring.radius * 2,
            height: ring.radius * 2,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: `1px ${i === 1 ? 'dashed' : 'solid'} rgba(124,58,237,${0.08 + i * 0.03})`,
          }}
        />
      ))}

      {/* Центральная светящаяся сфера */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
          boxShadow:
            '0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(124,58,237,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <span
          className="heading-font"
          style={{ color: 'white', fontSize: 28, fontWeight: 700 }}
        >
          W
        </span>
      </div>

      {/* Внешнее свечение сферы */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Вращающиеся кольца с тегами */}
      {ORBIT_RINGS.map((ring, i) => {
        const dir = ring.reverse ? 'reverse' : 'normal'
        const counterDir = ring.reverse ? 'normal' : 'reverse'
        return (
          <div
            key={`ring-${i}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: ring.radius * 2,
              height: ring.radius * 2,
              marginLeft: -ring.radius,
              marginTop: -ring.radius,
              animation: `spin ${ring.duration}s linear infinite ${dir}`,
            }}
          >
            {ring.tags.map((tag) => {
              const rad = (tag.angle * Math.PI) / 180
              const x = ring.radius + ring.radius * Math.cos(rad)
              const y = ring.radius + ring.radius * Math.sin(rad)
              return (
                <span
                  key={tag.text}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    transform: 'translate(-50%, -50%)',
                    animation: `spin ${ring.duration}s linear infinite ${counterDir}`,
                    background: 'rgba(13,13,30,0.85)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${tag.color}35`,
                    color: tag.color,
                    padding: '6px 16px',
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    boxShadow: `0 0 20px ${tag.color}15`,
                  }}
                >
                  {tag.text}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default function Hero({ particlesReady }) {
  /* Конфигурация частиц */
  const particlesOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        color: { value: ['#ffffff', '#A78BFA', '#7C3AED'] },
        links: {
          color: '#A78BFA',
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          outModes: { default: 'bounce' },
        },
        number: {
          density: { enable: true, area: 1000 },
          value: 60,
        },
        opacity: { value: { min: 0.08, max: 0.25 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'grab' } },
        modes: { grab: { distance: 200, links: { opacity: 0.3 } } },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* === Фоновые блики === */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: 900,
            height: 500,
            filter: 'blur(150px)',
            opacity: 0.4,
            background:
              'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 right-0 rounded-full"
          style={{
            width: 400,
            height: 400,
            filter: 'blur(120px)',
            opacity: 0.2,
            background:
              'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 rounded-full"
          style={{
            width: 350,
            height: 350,
            filter: 'blur(100px)',
            opacity: 0.15,
            background:
              'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Частицы */}
      {particlesReady && (
        <Particles
          id="hero-particles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      {/* === Основной контент — две колонки === */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 24px 80px',
          gap: 40,
        }}
      >
        {/* Левая часть — текст */}
        <div className="text-center lg:text-left">
          {/* Бейдж */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 animate-fade-in-up"
            style={{
              background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.25)',
            }}
          >
            <Sparkles size={15} style={{ color: '#FBBF24' }} />
            <span style={{ fontSize: 14, fontWeight: 500, color: '#CBD5E1' }}>
              Веб-студия полного цикла
            </span>
          </div>

          {/* Заголовок */}
          <h1
            className="heading-font animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: 24,
              animationDelay: '0.1s',
            }}
          >
            <span style={{ color: 'white' }}>Премиальный сайт</span>
            <br />
            <span className="text-gradient">за 3 дня</span>
          </h1>

          {/* Подзаголовок */}
          <p
            className="animate-fade-in-up mx-auto lg:mx-0"
            style={{
              color: '#94A3B8',
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 480,
              animationDelay: '0.2s',
            }}
          >
            Лендинги, 2D&#8209;игры и автоматизация для вашего бизнеса.
            Современный дизайн и внимание к каждой детали.
          </p>

          {/* Кнопки */}
          <div
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up"
            style={{ marginBottom: 48, animationDelay: '0.3s' }}
          >
            <a href="#contact" className="btn-primary animate-pulse-glow">
              Заказать сайт
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              Наши работы
            </a>
          </div>

          {/* Статистика — простые числа */}
          <div
            className="flex items-center justify-center lg:justify-start animate-fade-in-up"
            style={{ gap: 40, animationDelay: '0.4s' }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div
                  className="heading-font"
                  style={{
                    color: s.color,
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: '#64748B', fontSize: 13, marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая часть — орбитальный визуал (только десктоп) */}
        <div
          className="hidden lg:flex"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <OrbitVisual />
        </div>
      </div>

      {/* Стрелка вниз */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-purple-400 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>

      {/* Нижний градиент */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: 160,
          background:
            'linear-gradient(to top, var(--color-dark), transparent)',
        }}
      />
    </section>
  )
}
