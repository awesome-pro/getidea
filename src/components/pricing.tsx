import React from 'react'
import PricingCard from './pricing-card'
import { features, title } from 'process'

function Pricing() {
  return (
    <div className='flex flex-col md:flex-row gap-2'>
     {planFeatures.map((plan, i) => (
         <PricingCard key={i} {...plan} />
      ))}
    </div>
  )
}

export default Pricing

const planFeatures =  [
  {
    title: "Free",
    price: "$0",
    features: [
      "5 Reads per day",
      "1 Post per day",
      "No Direct Messages",
      "No Email Support",
      "No Analytics",
      "Ads"
    ],
    color: "gray"
  },
  {
    title: "Premium",
    price: "$19",
    features: [
      "Unlimited Reads",
      "Unlimited Posts",
      "Direct Messages",
      "24 hours Email Support",
      "Advanced Analytics",
      "No Ads"
    ],
    color: "blue"
  },
  {
    title: "Enterprise",
    price: "$49",
    features: [
      "Unlimited Reads",
      "Unlimited Posts",
      "Direct Messages",
      "24 hours Email Support",
      "Advanced Analytics",
      "No Ads",
      "Hire and Get Hired",
      "Custom Branding",
      "Promotion Tools"
    ],
    color: "red"
  }
]