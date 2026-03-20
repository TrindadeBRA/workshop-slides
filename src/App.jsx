import { useState, useEffect, useCallback } from 'react'
import { slides } from './slides'
import * as persistence from './utils/persistence'
import Slide from './components/Slide'
import Timer from './components/Timer'
import Navigation from './components/Navigation'
import SlideList from './components/SlideList'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = persistence.loadState('day1')
    if (saved && saved.currentSlide < slides.length) return saved.currentSlide
    return 0
  })
  const [startTime, setStartTime] = useState(() => {
    const saved = persistence.loadState('day1')
    return saved?.startTime || Date.now()
  })
  const [showList, setShowList] = useState(false)

  const goNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }, [])

  const goTo = useCallback((index) => {
    setCurrentSlide(index)
    setShowList(false)
  }, [])

  useEffect(() => {
    persistence.saveState('day1', { currentSlide, startTime })
  }, [currentSlide, startTime])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      if (e.key === 'Escape') setShowList(false)
      if (e.key === 'l' || e.key === 'L') setShowList(prev => !prev)
      if (e.key === 'r' || e.key === 'R') {
        if (window.confirm('Resetar progresso? Isso voltará ao slide 0 e reiniciará o timer.')) {
          setCurrentSlide(0)
          setStartTime(Date.now())
          persistence.clearState('day1')
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  return (
    <div className="app">
      <div className="top-bar">
        <Timer startTime={startTime} />
        <div className="slide-counter">
          <button className="list-btn" onClick={() => setShowList(!showList)} title="Lista de slides (L)">☰</button>
          <span>{currentSlide + 1} / {slides.length}</span>
        </div>
      </div>

      {showList && <SlideList slides={slides} current={currentSlide} onSelect={goTo} onClose={() => setShowList(false)} />}

      <Slide data={slides[currentSlide]} />

      <Navigation
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={currentSlide > 0}
        hasNext={currentSlide < slides.length - 1}
      />
    </div>
  )
}

export default App
