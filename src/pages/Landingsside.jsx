import hytter from '../data/hytter.json'
import HytteKort from '../components/HytteKort.jsx'

export default function Landingsside() {
  return (
    <>
      <section className="hero">
        <h1>Velkommen til UT.ut</h1>
        <p>Finn turer, turmål og hytter i Utopia.</p>
      </section>

      <h2>Utvalgte hytter</h2>
      <div className="kortliste">
        {hytter.map((hytte) => (
          <HytteKort key={hytte.id} hytte={hytte} />
        ))}
      </div>
    </>
  )
}