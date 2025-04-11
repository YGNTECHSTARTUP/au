// import PolicySection from "@/policy-section"
import PolicySection from "../comps/policy-section"
export default function Home() {

  const termsAndConditionsItems = [
    {
      title: "ELIGIBILITY",
      description:
        "Participants must be at least 18 years of age or have parental consent. Teams can consist of 1-4 members. All team members must be registered for the event.",
      color: "#9370DB", // Medium purple
    },
    {
      title: "SUBMISSION REQUIREMENTS",
      description:
        "All projects must be original work created during the hackathon period. Use of open source libraries and frameworks is permitted as long as they are properly attributed.",
      color: "#FFFFFF", // White
    },
    {
      title: "INTELLECTUAL PROPERTY",
      description:
        "Participants retain ownership of their intellectual property. By participating, you grant the organizers a non-exclusive license to showcase your project for promotional purposes.",
      color: "#20B2AA", // Light sea green
    },
    {
      title: "JUDGING CRITERIA",
      description:
        "Projects will be judged based on innovation, technical complexity, design, and potential impact. The judges' decisions are final and cannot be appealed.",
      color: "#FFD700", // Gold
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {/* <div className="w-full bg-black py-2 px-4 text-center">
        <div className="text-white text-sm">
          <span className="text-yellow-400">ANNOUNCEMENTS</span> 🔥 cool!{" "}
          <a href="#" className="text-blue-400 underline">
            Connect Now
          </a>{" "}
          • Get ready to code, sus, and conquer! 🏆 🍕 • The airlock is open! 🚀 Registrations for{" "}
          <span className="text-red-500">Buildbharat 2025</span> are open!
        </div>
      </div> */}

      <div className="w-full space-y-16 py-8">
     
        <PolicySection
          title="TERMS AND CONDITIONS"
          description="By registering for Buildbharat 2025, you agree to the following terms and conditions:"
          items={termsAndConditionsItems}
        />
      </div>
    </main>
  )
}
