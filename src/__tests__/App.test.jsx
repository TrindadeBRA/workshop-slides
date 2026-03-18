import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, cleanup, fireEvent, within } from '@testing-library/react'
import App from '../App'
import { slidesByDay } from '../slides'

describe('App.jsx integration — persistence', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  // Validates: Requirements 1.2, 1.3
  describe('initialization from localStorage', () => {
    it('restores saved slide index on mount', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      const { container } = render(<App />)

      const total = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${total}`)
    })

    it('starts at slide 0 when no saved data exists', () => {
      const { container } = render(<App />)

      const total = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`1 / ${total}`)
    })

    it('corrects invalid slide index (>= total) to 0', () => {
      const invalidState = { currentSlide: 9999, startTime: 1700000000000 }
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify(invalidState))

      const { container } = render(<App />)

      const total = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`1 / ${total}`)
    })
  })

  // Validates: Requirements 3.3, 3.4
  describe('switching days', () => {
    it('preserves previous day state and loads new day state', () => {
      const day1State = { currentSlide: 2, startTime: 1700000000000 }
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify(day1State))

      const day2State = { currentSlide: 1, startTime: 1700000001000 }
      localStorage.setItem('workshop-day2', JSON.stringify(day2State))

      const { container } = render(<App />)

      const totalDay1 = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`3 / ${totalDay1}`)

      // Switch to day2
      const daySelector = container.querySelector('.day-selector')
      const day2Btn = within(daySelector).getByText('Dia 2')
      fireEvent.click(day2Btn)

      const totalDay2 = slidesByDay.day2.length
      expect(counter.textContent).toBe(`2 / ${totalDay2}`)

      // Day1 state should be preserved in localStorage
      const savedDay1 = JSON.parse(localStorage.getItem('workshop-day1'))
      expect(savedDay1.currentSlide).toBe(2)
    })

    it('starts fresh when switching to a day with no saved data', () => {
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify({ currentSlide: 5, startTime: 1700000000000 }))

      const { container } = render(<App />)

      // Switch to day2
      const daySelector = container.querySelector('.day-selector')
      const day2Btn = within(daySelector).getByText('Dia 2')
      fireEvent.click(day2Btn)

      const totalDay2 = slidesByDay.day2.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`1 / ${totalDay2}`)
    })
  })

  // Validates: Requirements 4.1, 4.2
  describe('reset via R key', () => {
    it('resets to slide 0 and clears localStorage on confirm', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      vi.spyOn(window, 'confirm').mockReturnValue(true)

      const { container } = render(<App />)

      const total = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${total}`)

      // Press R to reset
      fireEvent.keyDown(window, { key: 'R' })

      expect(counter.textContent).toBe(`1 / ${total}`)
      // clearState removes the old data, but the useEffect re-persists the new
      // reset state (slide 0 + fresh startTime). Verify the slide was reset to 0.
      const reSaved = JSON.parse(localStorage.getItem('workshop-day1'))
      expect(reSaved.currentSlide).toBe(0)
    })

    it('does not reset when confirm is cancelled', () => {
      const savedState = { currentSlide: 3, startTime: 1700000000000 }
      localStorage.setItem('workshop-selected-day', 'day1')
      localStorage.setItem('workshop-day1', JSON.stringify(savedState))

      vi.spyOn(window, 'confirm').mockReturnValue(false)

      const { container } = render(<App />)

      const total = slidesByDay.day1.length
      const counter = container.querySelector('.slide-counter span:last-child')
      expect(counter.textContent).toBe(`4 / ${total}`)

      // Press R — user cancels
      fireEvent.keyDown(window, { key: 'R' })

      expect(counter.textContent).toBe(`4 / ${total}`)
      expect(localStorage.getItem('workshop-day1')).not.toBeNull()
    })
  })
})
