/* Единый компонент заголовка секции — гарантированное центрирование */
export default function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '72px' }}>
      {/* Бейдж */}
      <span
        style={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#A78BFA',
          padding: '6px 18px',
          marginBottom: '20px',
          background: 'rgba(124,58,237,0.1)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: '9999px',
        }}
      >
        {badge}
      </span>

      {/* Заголовок */}
      <h2
        className="heading-font"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '20px',
          lineHeight: 1.15,
        }}
      >
        {title}{' '}
        <span className="text-gradient">{highlight}</span>
      </h2>

      {/* Декоративная линия */}
      <div
        style={{
          width: '60px',
          height: '3px',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, #7C3AED, #F59E0B)',
          margin: '0 auto 20px',
        }}
      />

      {/* Подпись */}
      {subtitle && (
        <p
          style={{
            color: '#94A3B8',
            maxWidth: '520px',
            margin: '0 auto',
            fontSize: '15px',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
