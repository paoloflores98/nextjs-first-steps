import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Page",
  description: "Una breve descripción de About Page",
  keywords: ['About Page', 'Paolo', 'Información']
}

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
}