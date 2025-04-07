"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"

interface PersonalInfoFormProps {
  form: UseFormReturn<{
    fullName: string
    email: string
    college: string
    branch: string
    teamSize: string
  }>
}

export function PersonalInfoForm({ form }: PersonalInfoFormProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                FULL NAME<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                EMAIL<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} type="email" className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                COLLEGE/ORGANIZATION NAME<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                YEAR & BRANCH/ROLE<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
              <p className="text-gray-400 text-sm">I B.Tech CSE/Specialist Programmer</p>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="teamSize"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-white">
              TEAM SIZE<span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-3">
                {[1, 2, 3, 4].map((size) => (
                  <div
                    key={size}
                    className={`p-3 rounded-md border ${
                      field.value === size.toString()
                        ? "bg-orange-200 border-orange-300 text-black"
                        : "bg-gray-900 border-gray-800 text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={size.toString()}
                        id={`size-${size}`}
                        className={field.value === size.toString() ? "border-black" : "border-white"}
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={field.value === size.toString() ? "text-black" : "text-white"}
                      >
                        {size}
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </>
  )
}

