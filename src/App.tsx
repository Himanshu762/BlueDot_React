import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Services from './pages/Services'

// Project detail pages

import EcoSavaari from './pages/projects/EcoSavaari'
import LakshaVruksha from './pages/projects/LakshaVruksha'
import MangrovePlantation from './pages/projects/MangrovePlantation'
import TurahalliForest from './pages/projects/TurahalliForest'

// Service detail pages
import LakeConservation from './pages/services/LakeConservation'
import NativeAfforestation from './pages/services/NativeAfforestation'
import WildlifeConservation from './pages/services/WildlifeConservation'
import FloatingContactButton from './components/ui/FloatingContactButton'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/eco-savaari" element={<EcoSavaari />} />
        <Route path="/projects/laksha-vruksha" element={<LakshaVruksha />} />
        <Route path="/projects/mangrove-plantation-chennai" element={<MangrovePlantation />} />
        <Route path="/projects/turahalli-forest-cleanup-drive" element={<TurahalliForest />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/lake-conservation" element={<LakeConservation />} />
        <Route path="/services/native-afforestation" element={<NativeAfforestation />} />
        <Route path="/services/wildlife-conservation" element={<WildlifeConservation />} />
      </Routes>
      <FloatingContactButton />
    </>
  )
}

export default App
