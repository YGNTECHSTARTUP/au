/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowLeft, ArrowRight, Calendar, Clock, DollarSign, Trophy, Users, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PersonalInfoForm } from "./personal-info-form"
import { TeamInfoForm } from "./team-info-form"

const step1Schema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  college: z.string().min(2, { message: "College/Organization name is required." }),
  branch: z.string().min(2, { message: "Year & Branch/Role is required." }),
  teamSize: z.enum(["1", "2", "3", "4"], {
    required_error: "Please select a team size.",
  }),
})

const step2Schema = z.object({
  teamName: z.string().min(2, { message: "Team name is required." }),
  teamLeadFullName: z.string().min(2, { message: "Team lead full name is required." }),
  teamLeadEmail: z.string().email({ message: "Please enter a valid email address." }),
  teamLeadWhatsapp: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  member2FullName: z.string().optional(),
  member3FullName: z.string().optional(),
  member4FullName: z.string().optional(),
})

const step3Schema = z.object({
  paymentScreenshot: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "Payment screenshot is required.",
    }),
  paymentId: z.string().min(5, { message: "Payment ID is required." }),
})

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema)

export default function HackathonRegistrationForm() {
  const [step, setStep] = useState(1)
  const [formPartiallyFilled, setFormPartiallyFilled] = useState(true)

  const form = useForm({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      fullName: "",
      email: "",
      college: "",
      branch: "",
      teamSize: "4",
      teamName: "",
      teamLeadFullName: "",
      teamLeadEmail: "",
      teamLeadWhatsapp: "",
      member2FullName: "",
      member3FullName: "",
      member4FullName: "",
      paymentScreenshot: undefined,
      paymentId: "",
    },
    mode: "onSubmit",
  })

  const { watch } = form
  const teamSize = watch("teamSize")

  const onSubmit = (data:any) => {
    const parsed = fullSchema.safeParse(data)
    if (!parsed.success) {
      console.log("Validation result:", parsed.success)
      console.log("Errors:", parsed.error.format())
      return
    }
    console.log("Form submitted:", data)
    alert("Registration successful!")
  }

  const nextStep = async () => {
    if (step === 1) {
      const valid = await form.trigger(["fullName", "email", "college", "branch", "teamSize"])
      if (valid) setStep(2)
    } else if (step === 2) {
      const valid = await form.trigger([
        "teamName",
        "teamLeadFullName",
        "teamLeadEmail",
        "teamLeadWhatsapp",
        "member2FullName",
        "member3FullName",
        "member4FullName",
      ])
      if (valid) setStep(3)
    }
  }

  const startOver = () => {
    form.reset()
    setFormPartiallyFilled(false)
    setStep(1)
  }

  const continueForm = () => setFormPartiallyFilled(false)

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {[Clock, Trophy, Wifi, Trophy, Calendar, DollarSign, Users].map((Icon, idx) => (
          <div
            key={idx}
            className="border border-gray-800 rounded-md p-3 flex items-center justify-center gap-2"
          >
            <Icon className="h-5 w-5" />
            <span className="text-white">
              {[
                "24 Hrs",
                "Virtual Badges",
                "Live Stream",
                "Special Track Prizes",
                "12th - 13th April 2025",
                "Entry Fee - ₹400/team",
                "Max Crew Size - 04",
              ][idx]}
            </span>
          </div>
        ))}
      </div>

      {formPartiallyFilled && (
        <Alert className="bg-blue-50 text-blue-800 mb-8">
          <AlertDescription className="flex justify-between items-center">
            <span>You partially filled this form 114 minutes ago</span>
            <div className="space-x-2">
              <Button variant="link" className="text-blue-600" onClick={continueForm}>
                Continue
              </Button>
              <Button variant="link" className="text-blue-600" onClick={startOver}>
                Start over
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
        {step === 1
          ? "SUSHACKS 2025 | 24HR VIRTUAL HACKATHON"
          : step === 2
          ? "FOUR MEMBERS TEAM"
          : "PAYMENT CONFIRMATION"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-8">
        {step === 1 && <PersonalInfoForm form={form as any} />}
        {step === 2 && <TeamInfoForm form={form as any} teamSize={teamSize as string} />} {step === 3 && (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="paymentScreenshot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Payment Screenshot <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Payment ID Token <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. TXN123ABC456"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep((s) => s - 1)}
                className="bg-gray-600 hover:bg-gray-700 text-white w-[48%]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> BACK
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="bg-white text-black hover:bg-gray-200 w-full md:w-[48%]">
                NEXT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="bg-white text-black hover:bg-gray-200 w-full md:w-[48%]">
                SUBMIT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
