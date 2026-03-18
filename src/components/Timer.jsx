import { useState, useEffect } from 'react'

export default function Timer({ startTime }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])

  const h = Math.floor(elapsed / 3600)
  const m = Math.floor((elapsed % 3600) / 60)
  const s = elapsed % 60
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="timer">
      <span className="timer-icon">⏱</span>
      <span>{pad(h)}:{pad(m)}:{pad(s)}</span>
    </div>
  )
}
