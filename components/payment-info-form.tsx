"use client"

import { UseFormReturn } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

interface PaymentInfoFormProps {
  form: UseFormReturn<{ paymentScreenshot: File | null; paymentId: string }>
}

export function PaymentInfoForm({ form }: PaymentInfoFormProps) {
  return (
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
  )
}
