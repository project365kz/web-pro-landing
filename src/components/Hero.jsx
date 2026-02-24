import { useMemo } from 'react'
import { ArrowRight, Sparkles, Zap, Shield, ChevronDown } from 'lucide-react'
import Particles from '@tsparticles/react'

export default function Hero({ particlesReady }) {
  /* Конфигурация частиц */
  const particlesOptions = useMemo(() => ({
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
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.3 } },
      },
    },
    detectRetina: true,
  }), [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* === ФОНОВЫЕ ЭФФЕКТЫ === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Основной градиентный блик сверху */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)' }}
        />
        {/* Боковой тёплый блик */}
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)' }}
        />
        {/* Левый холодный блик */}
        <div
          className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
        />
        {/* Горизонтальная световая линия */}
        <div
          className="absolute top-[30%] left-0 w-full h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.8), transparent)' }}
        />
      </div>

      {/* tsParticles — анимированные частицы */}
      {particlesReady && (
        <Particles
          id="hero-particles"
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Бейдж */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-10 animate-fade-in-up"
          style={{
            background: 'rgba(124,58,237,0.12)',
            border: '1px solid rgba(124,58,237,0.25)',
          }}
        >
          <Sparkles size={15} className="text-amber-400" />
          <span className="text-sm font-medium text-gray-300">
            Создаём сайты, которые продают
          </span>
        </div>

        {/* Заголовок */}
        <h1
          className="heading-font text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.12s' }}
        >
          <span className="text-white">Ваш идеальный</span>
          <br />
          <span className="text-gradient">сайт за 3 дня</span>
        </h1>

        {/* Подзаголовок */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.24s' }}
        >
          Разрабатываем стильные одностраничные сайты с премиальным дизайном.
          <br className="hidden md:block" />
          Быстро, доступно и с вниманием к каждой детали.
        </p>

        {/* Кнопки */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '0.36s', marginBottom: 56 }}
        >
          <a href="#contact" className="btn-primary animate-pulse-glow">
            Заказать сайт
            <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-secondary">
            Смотреть работы
          </a>
        </div>

        {/* Мини-статистика */}
        <div
          className="flex flex-wrap items-center justify-center animate-fade-in-up"
          style={{ animationDelay: '0.48s', gap: 20 }}
        >
          {[
            { icon: Zap, value: '3 дня', label: 'Средний срок', color: '#A78BFA' },
            { icon: Shield, value: '50+', label: 'Проектов', color: '#F59E0B' },
            { icon: Sparkles, value: '100%', label: 'Довольных клиентов', color: '#34D399' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30,30,60,0.6), rgba(15,15,35,0.8))',
                border: '1px solid rgba(124,58,237,0.12)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
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
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--color-dark)] to-transparent" />
    </section>
  )
}
