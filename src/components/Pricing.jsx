import { Check, Star, Crown } from 'lucide-react'
import useReveal from './useReveal'
import SectionHeader from './SectionHeader'

const PLANS = [
  {
    name: 'Старт',
    price: '50 000',
    currency: '₸',
    desc: 'Идеальный вариант для быстрого запуска',
    features: [
      'Одностраничный сайт',
      'Адаптивный дизайн',
      'До 5 секций',
      'Форма обратной связи',
      'Базовая SEO-настройка',
      'Срок: 3 дня',
    ],
    popular: false,
    accent: '#A78BFA',
  },
  {
    name: 'Бизнес',
    price: '100 000',
    currency: '₸',
    desc: 'Для тех, кому нужен результат',
    features: [
      'Всё из тарифа «Старт»',
      'Премиальный UI/UX дизайн',
      'До 10 секций',
      'Анимации и эффекты',
      'Подключение аналитики',
      'Интеграция с CRM',
      'Поддержка 30 дней',
    ],
    popular: true,
    accent: '#7C3AED',
  },
  {
    name: 'Премиум',
    price: '200 000',
    currency: '₸',
    desc: 'Максимум возможностей и внимания',
    features: [
      'Всё из тарифа «Бизнес»',
      'Индивидуальный дизайн-концепт',
      'Сложные анимации',
      'Мультиязычность',
      'Интеграция платежей',
      'A/B тестирование',
      'Поддержка 90 дней',
      'Приоритет в очереди',
    ],
    popular: false,
    accent: '#F59E0B',
  },
]

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="pricing" style={{ padding: '120px 0' }} className="relative">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
      >
        <SectionHeader
          badge="Тарифы"
          title="Прозрачные"
          highlight="цены"
          subtitle="Никаких скрытых платежей — вы платите только за то, что выбрали"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'start',
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                position: 'relative',
                borderRadius: 20,
                padding: 36,
                background: plan.popular
                  ? 'linear-gradient(160deg, rgba(124,58,237,0.15) 0%, rgba(20,20,45,0.95) 35%, rgba(13,13,30,0.98) 100%)'
                  : 'linear-gradient(160deg, rgba(30,30,60,0.9), rgba(15,15,35,0.95))',
                border: plan.popular
                  ? '1.5px solid rgba(124,58,237,0.45)'
                  : '1px solid rgba(124,58,237,0.15)',
                boxShadow: plan.popular
                  ? '0 20px 60px rgba(124,58,237,0.15), 0 0 40px rgba(124,58,237,0.05)'
                  : 'none',
                transform: plan.popular ? 'scale(1.03)' : 'none',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = plan.popular ? 'scale(1.05)' : 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 25px 60px ${plan.accent}20`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = plan.popular ? 'scale(1.03)' : 'translateY(0)'
                e.currentTarget.style.boxShadow = plan.popular
                  ? '0 20px 60px rgba(124,58,237,0.15), 0 0 40px rgba(124,58,237,0.05)'
                  : 'none'
              }}
            >
              {/* Популярный бейдж */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '6px 18px',
                    borderRadius: 99,
                    boxShadow: '0 4px 15px rgba(124,58,237,0.4)',
                  }}
                >
                  <Star size={11} fill="currentColor" />
                  Популярный
                </div>
              )}

              {/* Название */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                {plan.popular && <Crown size={18} style={{ color: '#A78BFA' }} />}
                <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 600, color: 'white' }}>
                  {plan.name}
                </h3>
              </div>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>{plan.desc}</p>

              {/* Цена */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 28 }}>
                <span className="heading-font" style={{ fontSize: '2.75rem', fontWeight: 700, color: 'white' }}>
                  {plan.price}
                </span>
                <span style={{ color: '#64748B', fontSize: 18 }}>{plan.currency}</span>
              </div>

              {/* Разделитель */}
              <div
                style={{
                  height: 1,
                  marginBottom: 24,
                  background: `linear-gradient(90deg, ${plan.accent}30, transparent)`,
                }}
              />

              {/* Фичи */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: `${plan.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check size={13} style={{ color: plan.accent }} />
                    </div>
                    <span style={{ color: '#CBD5E1' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Кнопка */}
              <a
                href="#contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  ...(plan.popular
                    ? {
                        background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(124,58,237,0.3)',
                      }
                    : {
                        background: 'rgba(124,58,237,0.08)',
                        border: '1px solid rgba(124,58,237,0.2)',
                        color: '#CBD5E1',
                      }),
                }}
              >
                Выбрать тариф
              </a>
            </div>
          ))}
        </div>

        {/* Доп. услуги */}
        <div
          style={{
            marginTop: 48,
            textAlign: 'center',
            padding: '24px 32px',
            borderRadius: 16,
            maxWidth: 640,
            margin: '48px auto 0',
            background: 'linear-gradient(135deg, rgba(30,30,60,0.6), rgba(15,15,35,0.8))',
            border: '1px solid rgba(124,58,237,0.1)',
          }}
        >
          <p style={{ color: '#94A3B8', fontSize: 14 }}>
            Нужна{' '}
            <span style={{ color: '#A78BFA', fontWeight: 500 }}>2D-игра на день рождения</span>{' '}
            или{' '}
            <span style={{ color: '#A78BFA', fontWeight: 500 }}>автоматизация процессов</span>?
            <br />
            Свяжитесь с нами — рассчитаем стоимость индивидуально.
          </p>
        </div>
      </div>
    </section>
  )
}
