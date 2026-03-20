import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from '../App'
import { slides } from '../slides'

describe('App.jsx integration — persistence', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  describe('initialization from localStorage', () => {
    it('restores saved slide index on mount', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      const { container } = render(<App />)

      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${slides.length}`)
    })

    it('starts at slide 0 when no saved data exists', () => {
      const { container } = render(<App />)

      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`1 / ${slides.length}`)
    })

    it('corrects invalid slide index (>= total) to 0', () => {
      const invalidState = { currentSlide: 9999, startTime: 1700000000000 }
      localStorage.setItem('workshop-day1', JSON.stringify(invalidState))

      const { container } = render(<App />)

      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`1 / ${slides.length}`)
    })
  })

  describe('reset via R key', () => {
    it('resets to slide 0 and clears localStorage on confirm', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      vi.spyOn(window, 'confirm').mockReturnValue(true)

      const { container } = render(<App />)

      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${slides.length}`)

      fireEvent.keyDown(window, { key: 'R' })

      expect(counter.textContent).toBe(`1 / ${slides.length}`)
      const reSaved = JSON.parse(localStorage.getItem('workshop-day1'))
      expect(reSaved.currentSlide).toBe(0)
    })

    it('does not reset when confirm is cancelled', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      vi.spyOn(window, 'confirm').mockReturnValue(false)

      const { container } = render(<App />)

      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${slides.length}`)

      fireEvent.keyDown(window, { key: 'R' })

      expect(counter.textContent).toBe(`4 / ${slides.length}`)
      expect(localStorage.getItem('workshop-day1')).not.toBeNull()
    })
  })
})
