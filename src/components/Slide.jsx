export default function Slide({ data }) {
  return (
    <div className="slide">
      {data.badge && (
        <span className={`badge badge-${data.badge}`} style={{ marginBottom: 8, display: 'inline-block' }}>
          {data.badgeLabel || data.badge}
        </span>
      )}
      {data.content.map((block, i) => (
        <div key={i} className="slide-block">
          {renderBlock(block)}
        </div>
      ))}
    </div>
  )
}

function renderBlock(block) {
  switch (block.type) {
    case 'h1': return <h1>{block.text}</h1>
    case 'h2': return <h2>{block.text}</h2>
    case 'h3': return <h3>{block.text}</h3>
    case 'p': return <p>{block.text}</p>
    case 'quote': return <div className="quote">{block.text}</div>
    case 'code': return <div className="code-block">{block.text}</div>
    case 'highlight': return (
      <div className="highlight">
        {block.title && <strong>{block.title}</strong>}
        <p>{block.text}</p>
      </div>
    )
    case 'list': return (
      <ul>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    )
    case 'olist': return (
      <ol>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ol>
    )
    case 'table': return (
      <table>
        <thead><tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    )
    default: return null
  }
}
