import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 animate-scale-in">
      {/* Подсказка */}
      <div
        className="hidden sm:flex rounded-2xl rounded-br-sm px-5 py-3 items-center gap-3 max-w-xs"
        style={{
          background: 'rgba(15,15,35,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(124,58,237,0.2)',
        }}
      >
        <p className="text-sm text-gray-300">
          Есть вопрос? <span className="text-white font-medium">Напишите нам!</span>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-500 hover:text-gray-300 transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* Кнопка */}
      <a
        href="#contact"
        className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow"
        style={{
          background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
          boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
        }}
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  )
}
