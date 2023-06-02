import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Gallery from './components/gallery'
import Donate from './components/donate'
import Contact from './components/contact'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <hr className="border-primary border-solid w-[800px] mx-auto" />
      <footer className="hinditext text-xs text-center m-1">
        मूल का मुल्य
      </footer>
    </>
  )
}
