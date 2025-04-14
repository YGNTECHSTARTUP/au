"use client"

import type React from "react"

import { useState } from "react"
import {
  Laptop,
  Power,
  Headphones,
  HardDrive,
  BrushIcon as Toothbrush,
  Shirt,
  Pill,
  Coffee,
  Droplets,
  Battery,
  Smartphone,
  NotebookPen,
  CheckCircle2,
  Circle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface EssentialItem {
  name: string
  icon: React.ReactNode
  checked: boolean
}

interface EssentialCategory {
  name: string
  description: string
  items: EssentialItem[]
}

export default function HackathonEssentials() {
  const [categories, setCategories] = useState<EssentialCategory[]>([
    {
      name: "Mandatory",
      description: "Essential items required for the hackathon",
      items: [
        { name: "2 Laptops per team (one for backup)", icon: <Laptop className="h-5 w-5" />, checked: false },
        { name: "Extension Box (1 per team)", icon: <Power className="h-5 w-5" />, checked: false },
        { name: "Earphones", icon: <Headphones className="h-5 w-5" />, checked: false },
        { name: "Pen Drives", icon: <HardDrive className="h-5 w-5" />, checked: false },
      ],
    },
    {
      name: "Personal",
      description: "Personal care items for your comfort",
      items: [
        { name: "Toothbrush & Paste", icon: <Toothbrush className="h-5 w-5" />, checked: false },
        { name: "Face Wash, Comb", icon: <Toothbrush className="h-5 w-5" />, checked: false },
        { name: "Extra Dress (cotton & lightweight)", icon: <Shirt className="h-5 w-5" />, checked: false },
        { name: "Personal Medicines", icon: <Pill className="h-5 w-5" />, checked: false },
        { name: "ORS / Electrolyte Sachets", icon: <Pill className="h-5 w-5" />, checked: false },
      ],
    },
    {
      name: "Food & Power",
      description: "Stay energized and connected",
      items: [
        { name: "Snacks", icon: <Coffee className="h-5 w-5" />, checked: false },
        { name: "Water Bottle", icon: <Droplets className="h-5 w-5" />, checked: false },
        { name: "Mobile Chargers", icon: <Smartphone className="h-5 w-5" />, checked: false },
        { name: "Laptop Chargers", icon: <Laptop className="h-5 w-5" />, checked: false },
        { name: "Power Banks", icon: <Battery className="h-5 w-5" />, checked: false },
      ],
    },
    {
      name: "Optional",
      description: "Useful but not required",
      items: [{ name: "Notepad & Pen", icon: <NotebookPen className="h-5 w-5" />, checked: false }],
    },
  ])

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const newCategories = [...categories]
    newCategories[categoryIndex].items[itemIndex].checked = !newCategories[categoryIndex].items[itemIndex].checked
    setCategories(newCategories)
  }

  const getProgress = (category: EssentialCategory) => {
    const checkedItems = category.items.filter((item) => item.checked).length
    return Math.round((checkedItems / category.items.length) * 100)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Hackathon Essentials Checklist</h1>
        <p className="text-muted-foreground mt-2">Everything you need for your 30-hour hackathon journey</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="all">All Items</TabsTrigger>
          {categories.map((category, index) => (
            <TabsTrigger key={index} value={category.name.toLowerCase()}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle>{category.name}</CardTitle>
                <CardDescription className="text-white/80">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-2 flex-1 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${getProgress(category)}%` }}
                    />
                  </div>
                  <span className="ml-4 text-sm font-medium">{getProgress(category)}%</span>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={cn(
                        "flex items-center p-3 rounded-lg cursor-pointer transition-colors",
                        item.checked ? "bg-purple-50" : "hover:bg-gray-50",
                      )}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    >
                      <div className="mr-3 text-purple-500">
                        {item.checked ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                      </div>
                      <div className="mr-3">{item.icon}</div>
                      <span className={cn(item.checked && "line-through text-gray-400")}>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {categories.map((category, categoryIndex) => (
          <TabsContent key={categoryIndex} value={category.name.toLowerCase()} className="space-y-6">
            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle>{category.name}</CardTitle>
                <CardDescription className="text-white/80">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-2 flex-1 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${getProgress(category)}%` }}
                    />
                  </div>
                  <span className="ml-4 text-sm font-medium">{getProgress(category)}%</span>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={cn(
                        "flex items-center p-3 rounded-lg cursor-pointer transition-colors",
                        item.checked ? "bg-purple-50" : "hover:bg-gray-50",
                      )}
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                    >
                      <div className="mr-3 text-purple-500">
                        {item.checked ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                      </div>
                      <div className="mr-3">{item.icon}</div>
                      <span className={cn(item.checked && "line-through text-gray-400")}>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
        <p className="text-sm text-center text-gray-600">
          Make sure everything is packed beforehand to avoid last-minute rush. Let&apos;s stay comfy, focused, and ready to
          build something great!
        </p>
      </div>
    </div>
  )
}
