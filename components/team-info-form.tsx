import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

interface TeamInfoFormProps {
  form: UseFormReturn<{
    teamName: string
    teamLeadFullName: string
    teamLeadEmail: string
    teamLeadWhatsapp: string
    member2FullName?: string
    member3FullName?: string
    member4FullName?: string
    member5FullName?: string
  }>
  teamSize: string
}


export function TeamInfoForm({ form, teamSize }: TeamInfoFormProps) {
  const numTeamMembers = Number.parseInt(teamSize)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                TEAM NAME<span className="text-red-500">*</span>
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
          name="teamLeadFullName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                TEAM LEAD FULL NAME<span className="text-red-500">*</span>
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
          name="teamLeadEmail"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                TEAM LEAD EMAIL<span className="text-red-500">*</span>
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
          name="teamLeadWhatsapp"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                TEAM LEAD WHATSAPP NO.<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </div>

      {/* Conditionally render team member fields based on team size */}
      {numTeamMembers >= 2 && (
        <FormField
          control={form.control}
          name="member2FullName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                MEMBER 2 FULL NAME<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      )}

      {numTeamMembers >= 3 && (
        <FormField
          control={form.control}
          name="member3FullName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                MEMBER 3 FULL NAME<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      )}

      {numTeamMembers >= 4 && (
        <FormField
          control={form.control}
          name="member4FullName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">
                MEMBER 4 FULL NAME<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-gray-900 border-gray-800 text-white" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      )}
    </>
  )
}

