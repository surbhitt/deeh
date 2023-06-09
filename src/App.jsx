import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Gallery from './components/gallery'
import Donate from './components/donate'
import Contact from './components/contact'
import Navbar from './components/stickyNav'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <hr className="border-primary border-solid xs:w-[370px] md:w-[900px] mx-auto" />
      <footer className="hinditext text-xs text-center mt-2 mb-5">
        मूल का मुल्य
      </footer>
    </>
  )
}
