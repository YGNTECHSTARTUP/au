import React from 'react'
import PolicySection from '../comps/policy-section'
const codeOfConductItems = [
    {
      title: "INCLUSIVE ENVIRONMENT",
      description:
        "Build Bharat Through AI is dedicated to creating a safe, welcoming, and inclusive environment for everyone—regardless of gender identity, age, disability, appearance, background, ethnicity, religion, or orientation.",
      color: "#FF6347", // Tomato
    },
    {
      title: "EXPECTED BEHAVIOR",
      description:
        "Treat fellow participants with respect and kindness. Practice empathy, collaboration, and open-mindedness. Embrace feedback and support each other's learning journey throughout the hackathon.",
      color: "#FFFFFF", // White
    },
    {
      title: "UNACCEPTABLE BEHAVIOR",
      description:
        "Any form of harassment, discrimination, intimidation, or disrespectful conduct will not be tolerated. This includes offensive language, imagery, unwelcome advances, or exclusionary behavior.",
      color: "#FF4500", // Orange red
    },
    {
      title: "REPORTING GUIDELINES",
      description:
        "If you experience or witness any violation of this Code of Conduct, immediately report it to a Build Bharat Through AI organizer. All reports will be treated confidentially and taken seriously.",
      color: "#1E90FF", // Dodger blue
    },
  ]
  
const page = () => {
  return (
    <div className='w-full space-y-16 py-8'>
 <PolicySection
    title="CODE OF CONDUCT"
    description="To ensure a positive experience for all participants, we have established the following code of conduct:"
    items={codeOfConductItems}
  />
    </div>
   
  )
}

export default page