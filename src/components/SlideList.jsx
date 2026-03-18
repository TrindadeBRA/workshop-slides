export default function SlideList({ slides, current, onSelect, onClose }) {
  return (
    <div className="slide-list-overlay" onClick={onClose}>
      <div className="slide-list" onClick={e => e.stopPropagation()}>
        <h3>📋 Slides do Workshop</h3>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide-list-item ${i === current ? 'active' : ''}`}
            onClick={() => onSelect(i)}
          >
            <span className="slide-list-num">{String(i + 1).padStart(2, '0')}</span>
            <span>{slide.title}</span>
            {slide.badge && <span className={`badge badge-${slide.badge}`}>{slide.badge}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
