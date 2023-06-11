import React, { useContext, usecontext } from 'react'
import { Link } from 'react-router-dom'
import { NavButton } from './context/navButton'

export default function Header() {
  return (
    <div className="xs:w-[370px] md:w-[900px] mx-auto flex flex-col items-center">
      <div className="flex w-full mx-auto justify-center">
        <img
          src="/deehlogo.png"
          className="h-14 xs:mt-2 xs:h-11 md:h-14 md:mt-4 lg:mt-5 rounded-full"
        />
        <h1 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold xs:p-4 md:p-6 tracking-[0.1em]">
          DEEH Foundation
        </h1>
      </div>
      <hr className="border-primary border-solid xs:w-[370px] md:w-[900px] mx-auto" />
      <Navbar />
    </div>
  )
}

function Navbar() {
  const { homeButt, contactButt, donateButt, galleryButt, setButtonStatus } =
    useContext(NavButton)

  let navlinks = [
    { label: 'Home', route: '/', state: homeButt },
    { label: 'Contact', route: '/contact', state: contactButt },
    { label: 'Donate', route: '/donate', state: donateButt },
    { label: 'Gallery', route: '/gallery', state: galleryButt },
  ]
  return (
    <nav className="flex w-full justify-center">
      {/* md:inline */}
      <img
        src="/divider.png"
        alt="divider"
        className="xs:hidden md:block h-7 scale-x-[-1]"
      />
      <ul className="flex mt-2 items-center justify-center w-fit">
        {navlinks.map((button, i) => (
          <li className="xs:w-20 md:w-32 text-center ">
            <Link to={button.route} className="formatflex justify-center">
              <button
                key={i}
                onClick={() => setButtonStatus(button.label)}
                className={`p-2 md:w-20 rounded-md ${
                  button.state ? 'cursor-default' : 'hover:bg-tertiary-dark'
                }`}
              >
                <h3
                  className={`rounded-md ${
                    button.state ? 'underline underline-offset-8' : ''
                  }`}
                >
                  {button.label}
                </h3>
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <img
        src="/divider.png"
        alt="divider"
        className="xs:hidden md:block h-7"
      />
    </nav>
  )
}
