export default function Navigation({ onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="navigation">
      <button className="nav-btn" onClick={onPrev} disabled={!hasPrev}>← Anterior</button>
      <span className="nav-hint">← → ou Espaço para navegar · L para lista</span>
      <button className="nav-btn" onClick={onNext} disabled={!hasNext}>Próximo →</button>
    </div>
  )
}
