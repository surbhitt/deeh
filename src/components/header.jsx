import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="xs:w-[370px] md:w-[800px] mx-auto flex flex-col items-center">
      <h1 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold xs:p-4 md:p-6 tracking-[0.1em]">
        DEEH Foundation
      </h1>
      <hr className="border-primary border-solid xs:w-[370px] md:w-[800px] mx-auto" />
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
      <ul className="flex items-center justify-center w-fit">
        {navlinks.map((item, i) => (
          <Link
            to={item.route}
            className="xs:w-20 md:w-32 py-2 flex justify-center"
          >
            <li className="py-2 xs:w-full md:w-2/3 text-center hover:bg-tertiary-dark rounded-md">
              <button key={i}>
                <h3 className="underline underline-offset-8 text-md">
                  {item.label}
                </h3>
              </button>
            </li>
          </Link>
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
