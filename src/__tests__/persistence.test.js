import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  loadSelectedDay,
  saveSelectedDay,
  loadState,
  saveState,
  clearState,
} from '../utils/persistence.js'

describe('persistence.js', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  // --- loadSelectedDay ---
  // Validates: Requirements 5.1, 5.3
  describe('loadSelectedDay', () => {
    it('returns "day1" when no data is stored', () => {
      expect(loadSelectedDay()).toBe('day1')
    })

    it('returns the stored day', () => {
      localStorage.setItem('workshop-selected-day', 'day2')
      expect(loadSelectedDay()).toBe('day2')
    })

    it('returns "day1" when localStorage throws', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('access denied')
      })
      expect(loadSelectedDay()).toBe('day1')
      vi.restoreAllMocks()
    })
  })

  // --- saveState / loadState round-trip ---
  // Validates: Requirements 3.1, 3.2
  describe('saveState and loadState round-trip', () => {
    it('saves and loads state correctly for a given day', () => {
      const state = { currentSlide: 3, startTime: 1700000000000 }
      saveState('day1', state)
      expect(loadState('day1')).toEqual(state)
    })

    it('keeps states isolated between days', () => {
      const state1 = { currentSlide: 2, startTime: 1000 }
      const state2 = { currentSlide: 5, startTime: 2000 }
      saveState('day1', state1)
      saveState('day2', state2)
      expect(loadState('day1')).toEqual(state1)
      expect(loadState('day2')).toEqual(state2)
    })
  })

  // --- loadState with no data ---
  // Validates: Requirements 5.1
  describe('loadState', () => {
    it('returns null when no data exists for the day', () => {
      expect(loadState('day1')).toBeNull()
    })
  })

  // --- Invalid JSON handling ---
  // Validates: Requirements 5.3
  describe('invalid JSON handling', () => {
    it('returns null when stored value is not valid JSON', () => {
      localStorage.setItem('workshop-day1', '{not-valid-json')
      expect(loadState('day1')).toBeNull()
    })

    it('returns null when stored value is a plain string', () => {
      localStorage.setItem('workshop-day1', 'hello')
      expect(loadState('day1')).toBeNull()
    })
  })

  // --- Silent error handling when localStorage throws ---
  // Validates: Requirements 5.1, 5.2
  describe('silent error handling', () => {
    it('loadState returns null when localStorage.getItem throws', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('quota exceeded')
      })
      expect(loadState('day1')).toBeNull()
      vi.restoreAllMocks()
    })

    it('saveState does not throw when localStorage.setItem throws', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('quota exceeded')
      })
      expect(() => saveState('day1', { currentSlide: 0, startTime: 1000 })).not.toThrow()
      vi.restoreAllMocks()
    })

    it('saveSelectedDay does not throw when localStorage.setItem throws', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('access denied')
      })
      expect(() => saveSelectedDay('day2')).not.toThrow()
      vi.restoreAllMocks()
    })

    it('clearState does not throw when localStorage.removeItem throws', () => {
      vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('access denied')
      })
      expect(() => clearState('day1')).not.toThrow()
      vi.restoreAllMocks()
    })
  })

  // --- clearState ---
  // Validates: Requirements 3.5
  describe('clearState', () => {
    it('removes data for the specified day', () => {
      saveState('day1', { currentSlide: 2, startTime: 1000 })
      saveState('day2', { currentSlide: 4, startTime: 2000 })
      clearState('day1')
      expect(loadState('day1')).toBeNull()
      expect(loadState('day2')).toEqual({ currentSlide: 4, startTime: 2000 })
    })
  })
})
