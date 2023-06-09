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
      icon: (
        <BiHomeAlt2
          xs:size={10}
          md:size={20}
          className="xs:mt-[0.4rem] md:mt-[0.6rem]"
        />
      ),
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: (
        <IoCallOutline
          xs:size={10}
          md:size={20}
          className="xs:mt-[0.4rem] md:mt-[0.6rem]"
        />
      ),
    },
    {
      label: 'Donate',
      route: '/donate',
      icon: (
        <AiOutlineHeart
          xs:size={10}
          md:size={20}
          className="xs:mt-[0.4rem] md:mt-[0.6rem]"
        />
      ),
    },
    {
      label: 'Gallery',
      route: '/gallery',
      icon: (
        <MdOutlineInsertPhoto
          xs:size={10}
          md:size={20}
          className="xs:mt-[0.4rem] md:mt-[0.6rem]"
        />
      ),
    },
  ]

  return (
    <div
      className={`flex items-center xs:space-x-2 md:space-x-14 justify-center xs:h-16 md:h-24 w-full bg-tertiary-light bg-opacity-60 ${stickyClass}`}
    >
      {pages.map((link, i) => (
        <div className="flex items-center">
          <Link to={link.route}>
            <button className="flex justify-center xs:w-20 md:w-32 xs:h-7 md:h-10 xs:text-sm md:text-base border border-primary bg-tertiary-light hover:bg-tertiary-dark rounded-xl">
              {link.icon}
              <div className="xs:mt-[0.3rem] md:mt-[0.55rem] ml-2">
                {link.label}
              </div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}
