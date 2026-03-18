import { useState, useEffect, useCallback } from 'react'
import { slidesByDay, dayLabels } from './slides'
import * as persistence from './utils/persistence'
import Slide from './components/Slide'
import Timer from './components/Timer'
import Navigation from './components/Navigation'
import SlideList from './components/SlideList'
import DaySelector from './components/DaySelector'
import './App.css'

function App() {
  const [currentDay, setCurrentDay] = useState(() => persistence.loadSelectedDay())
  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = persistence.loadState(currentDay)
    const totalSlides = slidesByDay[currentDay]?.length || 0
    if (saved && saved.currentSlide < totalSlides) return saved.currentSlide
    return 0
  })
  const [startTime, setStartTime] = useState(() => {
    const saved = persistence.loadState(currentDay)
    return saved?.startTime || Date.now()
  })
  const [showList, setShowList] = useState(false)

  const slides = slidesByDay[currentDay] || []

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

  const handleDayChange = useCallback((newDay) => {
    // Save current day's state before switching
    persistence.saveState(currentDay, { currentSlide, startTime })

    // Save selected day
    persistence.saveSelectedDay(newDay)

    // Load new day's state
    const saved = persistence.loadState(newDay)
    const totalSlides = slidesByDay[newDay]?.length || 0

    // Update all state
    setCurrentDay(newDay)

    if (saved) {
      // Validate slide index against new day's total slides
      setCurrentSlide(saved.currentSlide < totalSlides ? saved.currentSlide : 0)
      setStartTime(saved.startTime)
    } else {
      // No saved data for the new day — start fresh
      setCurrentSlide(0)
      setStartTime(Date.now())
    }
  }, [currentDay, currentSlide, startTime])

  useEffect(() => {
    persistence.saveState(currentDay, { currentSlide, startTime })
  }, [currentSlide, startTime, currentDay])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      if (e.key === 'Escape') setShowList(false)
      if (e.key === 'l' || e.key === 'L') setShowList(prev => !prev)
      if (e.key === 'r' || e.key === 'R') {
        if (window.confirm('Resetar progresso do dia atual? Isso voltará ao slide 0 e reiniciará o timer.')) {
          setCurrentSlide(0)
          setStartTime(Date.now())
          persistence.clearState(currentDay)
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, currentDay])

  return (
    <div className="app">
      <div className="top-bar">
        <DaySelector currentDay={currentDay} onDayChange={handleDayChange} />
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
