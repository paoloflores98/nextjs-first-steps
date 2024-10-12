import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Una breve descripción de Contact Page",
  keywords: ['Contact Page', 'Paolo', 'Información']
}

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}