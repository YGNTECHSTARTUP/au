import React from 'react'
import PolicySection from '../comps/policy-section'

const eventPolicyItems = [
    {
      title: "RESPECT THE EVENT TIMELINE",
      description:
        "Ensure that all activities, including project submissions, mentorship sessions, and workshops, strictly follow the official schedule. Delays or absences might lead to disqualification from certain segments of the hackathon.",
      color: "#4169E1", // Royal blue
    },
    {
      title: "HONOR INTELLECTUAL PROPERTY",
      description:
        "Respect the rights of creators. All code, content, or designs submitted should be your original work or properly attributed under open licenses. Build Bharat Through AI encourages innovation with integrity.",
      color: "#FFFFFF", // White
    },
    {
      title: "ENSURE FAIRNESS AND TRANSPARENCY",
      description:
        "A level playing field is key. Any instance of cheating, copying, or unethical collaboration will result in immediate disqualification. Avoid sharing ideas or using unauthorized tools with other teams.",
      color: "#FFA500", // Orange
    },
    {
      title: "STAY SAFE AND SECURE",
      description:
        "Follow all safety protocols and digital security practices. Protect your personal data and that of others. Refrain from sharing sensitive information without explicit permission.",
      color: "#FFFFFF", // White
    },
    {
      title: "RESPECT ALL PARTICIPANTS",
      description:
        "Foster a positive and inclusive atmosphere for everyone, regardless of background or skill level. Harassment or discriminatory behavior of any kind will not be tolerated and may lead to removal from the event.",
      color: "#00CED1", // Turquoise
    },
    {
      title: "EVENT RECORDING AND MEDIA",
      description:
        "By participating in Build Bharat Through AI Hackathon, you agree to being recorded or photographed for promotional content. Contact the organizing team if you have any concerns regarding media usage.",
      color: "#FFFFFF", // White
    },
    {
      title: "NON-DISCLOSURE AGREEMENT",
      description:
        "Some problem statements may require participants to sign a Non-Disclosure Agreement (NDA) to protect sensitive information shared during the hackathon. Please read and comply carefully.",
      color: "#00FF7F", // Spring green
    },
  ]
  
const page = () => {
  return (
    <div className='w-full space-y-16 py-8'>
 <PolicySection
    title="EVENT POLICY"
    description="All participants, organizers, volunteers, and partners involved in Buildbharat 2025 must adhere to the following policies:"
    items={eventPolicyItems}
  />
    </div>
   
  )
}

export default page