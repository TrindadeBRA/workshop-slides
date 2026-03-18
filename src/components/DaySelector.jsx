import { dayLabels } from '../slides'

export default function DaySelector({ currentDay, onDayChange }) {
  return (
    <div className="day-selector">
      {Object.entries(dayLabels).map(([dayKey, label]) => (
        <button
          key={dayKey}
          className={`day-btn${currentDay === dayKey ? ' active' : ''}`}
          onClick={() => onDayChange(dayKey)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
