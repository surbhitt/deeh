import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="w-[800px] mx-auto flex flex-col items-center">
      <h1 className="md:text-5xl lg:text-6xl p-6 tracking-wider">
        DEEH Foundation
      </h1>
      <hr className="border-primary border-solid w-[800px] mx-auto" />
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
      <img src="/divider1.png" alt="divider" className="h-7 scale-x-[-1]" />
      <ul className="flex items-center justify-center w-fit">
        {navlinks.map((item, i) => (
          <Link to={item.route} className="w-32 py-2 flex justify-center">
            <li className="py-2 w-2/3 text-center hover:bg-tertiary-dark rounded-md">
              <button key={i}>
                <h3 className="underline underline-offset-8">{item.label}</h3>
              </button>
            </li>
          </Link>
        ))}
      </ul>
      <img src="/divider1.png" alt="divider" className="h-7" />
    </nav>
  )
}
