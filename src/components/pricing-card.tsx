import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'
import { Badge } from 'lucide-react'
import { Button } from './ui/button'

export interface PricingCardProps{
    icon? : React.ReactNode,
    title: string,
    price: string,
    features: string[],
    color: string,
}

function PricingCard({icon, title, price, features, color}: PricingCardProps) {
  return (
    <Card className={cn("rounded-2xl w-full md:w-[380px] p-5 bg-white text-blue-600", {
        "bg-gradient-to-r from-blue-600 to-blue-700 text-white": color === "blue",
    })}>
        <CardHeader className="flex flex-row justify-between items-center">
                {icon}
                <h2 className='text-3xl font-bold '>{title}</h2>
                {color === "blue" && <span className="text-xs bg-yellow-200 rounded-3xl text-primary px-2">Most Popular</span>}
        </CardHeader>
        <CardContent className="">
            <span className='flex  items-baseline mb-1'>
                <h1 className="text-4xl font-bold">{price}</h1>
                <p className='text-xs'>/per month</p>
            </span>
            <ul className="list-inside list-disc">
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button 
            className={cn("bg-blue-600 text-white w-full z-20 shadow-xl", {
                "bg-white text-blue-600 hover:bg-white/90 z-40": color === "blue",
            })}
            >
                Get Started
            </Button>
        </CardFooter>
    </Card>
  )
}

export default PricingCard