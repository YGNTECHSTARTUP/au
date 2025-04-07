"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Clock, Award, Radio, Calendar, Users, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "This is a required question" }),
  email: z.string().email({ message: "This is a required question" }),
  organization: z.string().min(2, { message: "This is a required question" }),
  yearBranch: z.string().min(2, { message: "This is a required question" }),
  teamSize: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Please select a team size",
  }),
})

export default function HackathonForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      yearBranch: "",
      teamSize: "4",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    alert("Form submitted successfully!")
  }

  const glassCard =
    "bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white"

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Virtual Hackathon Registration Form</h1>
        <p className="text-sm mt-2 text-white">
          On-site (offline) hackathon team slots are full. Virtual slots are now open until April 7th. Shortlisted teams
          will receive an email within 2-3 days with a Google Form for payment. The Virtual Hackathon Lazy Bird payment
          deadline of ₹400 is April 7th.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Clock className="h-5 w-5" />
            <span>24 Hrs</span>
          </CardContent>
        </Card>

        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Award className="h-5 w-5" />
            <span>Virtual Badges</span>
          </CardContent>
        </Card>

        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Radio className="h-5 w-5" />
            <span>Live Stream</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Calendar className="h-5 w-5" />
            <span>12th - 13th April 2025</span>
          </CardContent>
        </Card>

        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Award className="h-5 w-5" />
            <span>Special Track Prizes</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <Users className="h-5 w-5" />
            <span>Max Crew Size - 05</span>
          </CardContent>
        </Card>

        <Card className={glassCard}>
          <CardContent className="flex items-center justify-center p-4 space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Entry Fee - ₹399/user</span>
          </CardContent>
        </Card>
      </div>

      <Card className={`${glassCard} mt-8`}>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">SUSHACKS 2025 | 24HR VIRTUAL HACKATHON</h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex text-white">
                        FULL NAME <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex text-white">
                        EMAIL <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex text-white">
                        COLLEGE/ORGANIZATION NAME <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearBranch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex text-white">
                        YEAR & BRANCH/ROLE <span className="text-red-500 ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="I.B.Tech CSE/Specialist Programmer"
                          {...field}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="flex text-white">
                      TEAM SIZE <span className="text-red-500 ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-2"
                      >
                        {["3", "4", "5"].map((size) => (
                          <FormItem
                            key={size}
                            className={`flex items-center space-x-3 p-4 rounded-md ${
                              field.value === size ? "bg-orange-200/20" : "bg-gray-800"
                            }`}
                          >
                            <FormControl>
                              <RadioGroupItem value={size} />
                            </FormControl>
                            <FormLabel className="font-normal flex-1 m-0 text-white">{size}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="flex justify-center mt-8">
                <Button type="submit" className="bg-white text-black hover:bg-gray-200 px-8">
                  NEXT
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
