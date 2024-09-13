import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Questions',
    href: '/questions',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-navy">
    <div className="navbar-container mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div className="inline-flex items-center space-x-2">
        <span>
          {/* Desktop Logo */}
          <img
            src="https://res.cloudinary.com/codebysidd/image/upload/v1726039315/PrevQue/auwd2afk4qjiqmfikzp8.png"
            alt="PrevQue Logo"
            className="logo rounded-md"
          />
        </span>
       
      </div>
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200
                ${isActive ? 'text-yellow-500' : 'text-gray-200'}
                border-b border-gray-100 hover:bg-navy-light lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block">
        <button
          type="button"
          className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-navy shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          LogIn
        </button>
      </div>
      <div className="lg:hidden">
        <Menu onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2">
                  <span>
                    {/* Mobile Logo */}
                    <img
                      src="https://res.cloudinary.com/codebysidd/image/upload/v1726039315/PrevQue/auwd2afk4qjiqmfikzp8.png"
                      alt="PrevQue Logo"
                      className="mobile-logo"
                    />
                  </span>
                
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-navy">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </nav>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-navy shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
              >
                LogIn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  
  )
}
