import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"

const navItems = [
  {path: '/about', text: 'About'},
  {path: '/pricing', text: 'Princing'},
  {path: '/contact', text: 'Contact'},
]

export default async function Navbar() {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href='/'>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="enlaces">
        {navItems.map(navItem => (
          <ActiveLink key={navItem.path} { ...navItem } /> // Renderiza el componente
        ))}
      </div>
    </nav>
  )
}