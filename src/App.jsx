import { Routes, Route, Link } from 'react-router'
import Landingsside from './pages/Landingsside.jsx'
import HytteDetalj from './pages/HytteDetalj.jsx'

export default function App() {
  return (
    <>
      <div className="usn-banner">Studentoppgave ved USN – APP2000</div>
      <header className="topp">
        <Link to="/" className="logo">UT.ut</Link>
      </header>

      <main className="innhold">
        <Routes>
          <Route path="/" element={<Landingsside />} />
          <Route path="/hytte/:id" element={<HytteDetalj />} />
          <Route path="*" element={<p>Siden finnes ikke.</p>} />
        </Routes>
      </main>
    </>
  )
}