import { ReactNode } from "react"
import Navbar from "@/components/navbar/Navbar"

export default function GeneralLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Layout general de algunas páginas</span>
        {children}
      </main>
    </>
  )
}