import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import RomaLuissProgress from './pages/42RomaLuissProgress'
import Piscine from './pages/42pages/Piscine'
import IPrimiProgetti from './pages/42pages/IPrimiProgetti'
import InizioPercorso from './pages/42pages/InizioPercorso'
import TreProgettiEsame from './pages/42pages/TreProgettiEsame'
import SoLong from './pages/42pages/SoLong'
import ExamRank03 from './pages/42pages/ExamRank03'
import MiniShell from './pages/42pages/MiniShell'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/42romaluiss" element={<RomaLuissProgress />} />
            <Route path="/42romaluiss/piscine" element={<Piscine />} />
            <Route path="/42romaluiss/primi-progetti" element={<IPrimiProgetti />} />
            <Route path="/42romaluiss/inizio-percorso" element={<InizioPercorso />} />
            <Route path="/42romaluiss/3-progetti-esame" element={<TreProgettiEsame />} />
            <Route path="/42romaluiss/so-long" element={<SoLong />} />
            <Route path="/42romaluiss/exam-rank-03" element={<ExamRank03 />} />
            <Route path="/42romaluiss/mini-shell" element={<MiniShell />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
