/* SVG-логотип Web-Pro */
export default function Logo({ size = 40, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Иконка — стилизованная буква W в ромбе */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0" y1="48" x2="48" y2="0">
            <stop offset="0%" stopColor="#6C3AED" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        {/* Фоновый ромб */}
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          fill="url(#logoGrad)"
        />
        {/* Внутренний блик */}
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          fill="url(#logoGrad2)"
          opacity="0.3"
        />
        {/* Буква W */}
        <path
          d="M13 15L17.5 33L24 21L30.5 33L35 15"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Точка-акцент */}
        <circle cx="38" cy="13" r="3" fill="#FBBF24" />
      </svg>

      {/* Текст */}
      <div className="flex items-baseline gap-0.5">
        <span
          className="heading-font text-xl font-bold text-white tracking-tight"
          style={{ fontSize: size * 0.55 }}
        >
          Web
        </span>
        <span
          className="heading-font text-xl font-bold tracking-tight"
          style={{
            fontSize: size * 0.55,
            background: 'linear-gradient(135deg, #8B5CF6, #FBBF24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Pro
        </span>
      </div>
    </div>
  )
}
