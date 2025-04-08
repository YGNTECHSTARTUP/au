// Update import to use default import
import AwardCard from "./award-card"


export default function AwardsGrid() {
  const awards = [
    {
      number: 2,
      title: "FIRST RUNNER-UP",
      description:
        "The First Runner-Up will take home [TBA] in cash, as well as a certificate of excellence. Prepare to showcase your best work to secure this incredible achievement!",
      prize: "[TBA] CASH PRIZE",
      certificate: true,
      className: "border-cyan-400",
      titleClassName: "text-cyan-400",
      numberClassName: "bg-cyan-400 text-black",
    },
    {
      number: 3,
      title: "SECOND RUNNER-UP",
      description:
        "The Second Runner-Up will receive [TBA] in cash, along with a certificate. Give your best effort to secure this high placement!",
      prize: "[TBA] CASH PRIZE",
      certificate: true,
      className: "border-green-400",
      titleClassName: "text-green-400",
      numberClassName: "bg-green-400 text-black",
    },
    {
      number: 4,
      title: "BEST STORY",
      description:
        "This award will be given to the team that tells the most compelling, creative, and impactful story about their project. The winner will receive a certificate!",
      prize: "[TBA] PRIZE",
      certificate: true,
      className: "border-yellow-300",
      titleClassName: "text-yellow-300",
      numberClassName: "bg-yellow-300 text-black",
    },
    {
      number: 5,
      title: "CROWD FAVORITE",
      description:
        "The Crowd Favorite is voted by participants and audience alike. This team will win a certificate, and the pride of winning the people's choice award!",
      prize: "[TBA] PRIZE",
      certificate: true,
      className: "border-blue-500",
      titleClassName: "text-blue-500",
      numberClassName: "bg-blue-500 text-white",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
      {awards.map((award) => (
        <AwardCard
          key={award.number}
          number={award.number}
          title={award.title}
          description={award.description}
          prize={award.prize}
          certificate={award.certificate}
          className={award.className}
          titleClassName={award.titleClassName}
          numberClassName={award.numberClassName}
        />
      ))}
    </div>
  )
}
