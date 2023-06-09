import React from 'react'
import { Link } from 'react-router-dom'

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
  let navlinks = [
    { label: 'Home', route: '/' },
    { label: 'Contact', route: '/contact' },
    { label: 'Donate', route: '/donate' },
    { label: 'Gallery', route: '/gallery' },
  ]
  return (
    <nav className="flex w-full justify-center">
      {/* md:inline */}
      <img
        src="/divider1.png"
        alt="divider"
        className="xs:hidden md:block h-7 scale-x-[-1]"
      />
      <ul className="flex mt-2 items-center justify-center w-fit">
        {navlinks.map((item, i) => (
          <li className="xs:w-20 md:w-32 text-center ">
            <Link to={item.route} className="formatflex justify-center">
              <button
                key={i}
                className="p-2 md:w-20 hover:bg-tertiary-dark rounded-md"
              >
                <h3 className="underline underline-offset-8 text-md">
                  {item.label}
                </h3>
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <img
        src="/divider1.png"
        alt="divider"
        className="xs:hidden md:block h-7"
      />
    </nav>
  )
}
