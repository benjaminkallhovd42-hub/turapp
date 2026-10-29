import { Link } from 'react-router'

export default function HytteKort({ hytte }) {
  return (
    <Link to={`/hytte/${hytte.id}`} className="kort">
      <h3>{hytte.navn}</h3>
      <p>{hytte.omrade} · {hytte.hoyde} moh</p>
      <span className={`merke ${hytte.type}`}>{hytte.type}</span>
    </Link>
  )
}