import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Gallery from './components/gallery'
import Donate from './components/donate'
import Contact from './components/contact'
import Navbar from './components/stickyNav'
import { useState } from 'react'
import { NavButton } from './components/context/navButton'

export default function App() {
  const [homeButt, setHomeButtonActive] = useState(true)
  const [contactButt, setContactButtonActive] = useState(false)
  const [donateButt, setDonateButtonActive] = useState(false)
  const [galleryButt, setGalleryButtonActive] = useState(false)

  const setButtonStatus = (button) => {
    let buttonSetters = [
      { name: 'Home', setter: setHomeButtonActive },
      { name: 'Contact', setter: setContactButtonActive },
      { name: 'Donate', setter: setDonateButtonActive },
      { name: 'Gallery', setter: setGalleryButtonActive },
    ]

    for (const buttonSetter of buttonSetters) {
      if (button === buttonSetter.name) {
        buttonSetter.setter(true)
      } else buttonSetter.setter(false)
    }
  }

  return (
    <>
      <Router>
        <NavButton.Provider
          value={{
            homeButt,
            contactButt,
            donateButt,
            galleryButt,
            setButtonStatus,
          }}
        >
          <Header />
          <Navbar />
        </NavButton.Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      <hr className="border-primary border-solid xs:w-[370px] md:w-[900px] mx-auto my-4" />
      <footer className="hinditext text-xs text-center mb-5">
        मूल का मुल्य
      </footer>
    </>
  )
}
