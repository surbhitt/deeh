import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineInsertPhoto } from 'react-icons/md'

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('hidden')

  let windowHeight = window.scrollY
  let activeButton = ''
  let inactiveButton = ''

  useEffect(() => {
    const stickNavbar = () => {
      const viewportHeight = 130
      const currentScrollPostion = window.scrollY
      if (window !== undefined) {
        currentScrollPostion > viewportHeight
          ? setStickyClass('fixed top-0 z-50')
          : setStickyClass('hidden')
      }
    }
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  let pages = [
    {
      label: 'Home',
      route: '/',
      icon: <BiHomeAlt2 size={20} className="mt-[0.6rem]" />,
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: <IoCallOutline size={20} className="mt-[0.6rem]" />,
    },
    {
      label: 'Donate',
      route: '/donate',
      icon: <AiOutlineHeart size={20} className="mt-[0.6rem]" />,
    },
    {
      label: 'Gallery',
      route: '/gallery',
      icon: <MdOutlineInsertPhoto size={20} className="mt-[0.6rem]" />,
    },
  ]

  return (
    <div
      className={`flex items-center space-x-14 justify-center h-24 w-full bg-tertiary-light bg-opacity-60 ${stickyClass}`}
    >
      {pages.map((link, i) => (
        <div className="flex items-center">
          <Link to={link.route}>
            <button className="flex justify-center w-32 h-10 border border-primary bg-tertiary-light hover:bg-tertiary-dark rounded-xl">
              {link.icon}
              <div className="mt-[0.85rem] ml-2">{link.label}</div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}
