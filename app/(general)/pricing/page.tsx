import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Una breve descripción de Pricing Page",
  keywords: ['Pricing Page', 'Paolo', 'Información']
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}