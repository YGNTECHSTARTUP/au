import { z } from "zod"

// Define the form schema with Zod
export const hackathonFormSchema = z.object({
  // Personal Info Page
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  college: z.string().min(2, { message: "College/Organization name is required." }),
  branch: z.string().min(2, { message: "Year & Branch/Role is required." }),
  teamSize: z.enum(["1", "2", "3", "4"], {
    required_error: "Please select a team size.",
  }),

  // Team Info Page (conditionally required based on team size)
  teamName: z.string().min(2, { message: "Team name is required." }),
  teamLeadFullName: z.string().min(2, { message: "Team lead full name is required." }),
  teamLeadEmail: z.string().email({ message: "Please enter a valid email address." }),
  teamLeadWhatsapp: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  member2FullName: z.string().optional(),
  member3FullName: z.string().optional(),
  member4FullName: z.string().optional(),
})

// Create a type from the schema
export type HackathonFormValues = z.infer<typeof hackathonFormSchema>

// Function to validate the form based on team size
export function validateTeamMembers(data: HackathonFormValues) {
  const teamSize = Number.parseInt(data.teamSize)

  // Create a refined schema based on team size
  const refinedSchema = hackathonFormSchema.refine(
    (data) => {
      if (teamSize >= 2 && !data.member2FullName) return false
      if (teamSize >= 3 && !data.member3FullName) return false
      if (teamSize >= 4 && !data.member4FullName) return false
      return true
    },
    {
      message: "All team member names are required based on your team size",
      path: ["teamMembers"],
    },
  )

  return refinedSchema.safeParse(data)
}

