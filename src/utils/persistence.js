const SELECTED_DAY_KEY = 'workshop-selected-day'
const STATE_KEY_PREFIX = 'workshop-'
const DEFAULT_DAY = 'day1'

/**
 * Carrega o dia selecionado do localStorage.
 * Retorna DEFAULT_DAY se não houver dado salvo ou em caso de erro.
 * @returns {string}
 */
export function loadSelectedDay() {
  try {
    const value = localStorage.getItem(SELECTED_DAY_KEY)
    return value || DEFAULT_DAY
  } catch {
    return DEFAULT_DAY
  }
}

/**
 * Salva o dia selecionado no localStorage.
 * Ignora erros silenciosamente.
 * @param {string} day
 */
export function saveSelectedDay(day) {
  try {
    localStorage.setItem(SELECTED_DAY_KEY, day)
  } catch {
    // silently ignore
  }
}

/**
 * Carrega o Session_State de um dia do localStorage.
 * Retorna null se não houver dado, JSON inválido ou erro.
 * @param {string} day
 * @returns {{ currentSlide: number, startTime: number } | null}
 */
export function loadState(day) {
  try {
    const raw = localStorage.getItem(STATE_KEY_PREFIX + day)
    if (raw === null) return null
    const parsed = JSON.parse(raw)
    return parsed
  } catch {
    return null
  }
}

/**
 * Salva o Session_State de um dia no localStorage.
 * Ignora erros silenciosamente.
 * @param {string} day
 * @param {{ currentSlide: number, startTime: number }} state
 */
export function saveState(day, state) {
  try {
    localStorage.setItem(STATE_KEY_PREFIX + day, JSON.stringify(state))
  } catch {
    // silently ignore
  }
}

/**
 * Remove o Session_State de um dia do localStorage.
 * Ignora erros silenciosamente.
 * @param {string} day
 */
export function clearState(day) {
  try {
    localStorage.removeItem(STATE_KEY_PREFIX + day)
  } catch {
    // silently ignore
  }
}
