import { useParams, Link } from 'react-router'
import hytter from '../data/hytter.json'

export default function HytteDetalj() {
  const { id } = useParams()
  const hytte = hytter.find((h) => h.id === Number(id))

  if (!hytte) {
    return <p>Fant ikke hytten. <Link to="/">Tilbake</Link></p>
  }

  return (
    <article className="detalj">
      <Link to="/">← Tilbake til forsiden</Link>
      <h1>{hytte.navn}</h1>
      <span className={`merke ${hytte.type}`}>{hytte.type}</span>
      <p>{hytte.beskrivelse}</p>

      <dl>
        <dt>Område</dt><dd>{hytte.omrade}</dd>
        <dt>Høyde</dt><dd>{hytte.hoyde} moh</dd>
        <dt>Sengeplasser</dt><dd>{hytte.sengeplasser}</dd>
        <dt>Pris medlem</dt><dd>{hytte.pris.medlem} kr</dd>
        <dt>Pris ikke-medlem</dt><dd>{hytte.pris.ikkeMedlem} kr</dd>
        <dt>Posisjon</dt><dd>{hytte.posisjon.lat}, {hytte.posisjon.lng}</dd>
      </dl>

      <h2>Fasiliteter</h2>
      <ul>
        {hytte.fasiliteter.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </article>
  )
}