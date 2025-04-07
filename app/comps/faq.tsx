import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion';
  
  export default function FAQPage() {
    const faqs = [
      {
        question: "When and where does the hackathon start?",
        answer: "The 24-hour hackathon kicks off at 10:00 AM sharp at the Innovation Hub Auditorium. Make sure to arrive at least 30 minutes early for registration and setup."
      },
      {
        question: "Can we work remotely or is it an in-person event?",
        answer: "This hackathon is strictly in-person to encourage collaboration, mentorship, and real-time networking with fellow developers and industry mentors."
      },
      {
        question: "Are there any rules regarding team size?",
        answer: "Yes! Each team should consist of 2 to 4 participants. Solo participants will be paired up with others during the team formation round."
      },
      {
        question: "Will food and beverages be provided?",
        answer: "Absolutely! You'll have access to free meals, snacks, and drinks throughout the 24 hours. Vegetarian and vegan options are also available."
      },
      {
        question: "Can we use pre-written code or templates?",
        answer: "Yes, using open-source libraries and your own pre-written utilities is allowed. However, the core idea and logic should be built during the hackathon."
      },
      {
        question: "How are projects judged?",
        answer: "Projects will be judged based on creativity, technical complexity, UI/UX, and real-world impact. Bonus points for live demos and clean documentation!"
      },
      {
        question: "Is there a prize or reward for winners?",
        answer: "Yes! Top 3 teams will receive cash prizes, tech goodies, exclusive mentorship opportunities, and internship offers from our partner companies."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Hackathon FAQs</h1>
            <p className="text-gray-300 mt-2 text-lg">
              All you need to know to rock this 24-hour code sprint!
            </p>
          </div>
  
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-300">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-cyan-400 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 mt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
  