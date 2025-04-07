import HackathonForm from "@/components/hackathon-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <HackathonForm />
      </div>
    </main>
  )
}