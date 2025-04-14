import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion';
  
  export default function FAQPage() {
    const faqs = [
        {
          question: "When and where is the AU AI Hackathon happening?",
          answer:
            "The hackathon will take place on April 16th and 17th, 2025, from 9:00 AM to 3:00 PM at the Algorithm Block, Andhra University College of Engineering, Visakhapatnam."
        },
        {
          question: "Is this an in-person or online hackathon?",
          answer:
            "This is an in-person event. We believe physical collaboration fosters better innovation, mentorship, and networking opportunities."
        },
        {
          question: "What’s the allowed team size for participation?",
          answer:
            "Each team must consist of 3 to 5 members. This promotes diverse skillsets and effective collaboration. Solo registrations are not accepted."
        },
        {
          question: "Is there a registration fee?",
          answer:
            "Yes, the registration fee is ₹399 per person. This covers meals, swag and the entire hackathon experience. Note: The fee is non-refundable."
        },
        {
          question: "Are food and beverages provided?",
          answer:
            "Yes! All participants will be provided with free food and refreshments. We’ve got you covered throughout the event!"
        },
        {
          question: "Can we use pre-existing code or tools?",
          answer:
            "You may use open-source tools and personal libraries. However, the main solution should be ideated and built during the hackathon."
        },
        {
          question: "What are the judging criteria?",
          answer:
            "Projects will be evaluated based on innovation, technical implementation, real-world impact, and presentation. Bonus points for live demos and solid documentation!"
        },
        {
          question: "What do winners receive?",
          answer:
            "Winners will share a ₹1 Lakh prize pool along with exclusive goodies, mentorship sessions from tech leaders, and national-level recognition."
        }
      ];
      
  
    return (
      <div id="faq" className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Hackathon FAQs</h1>
            <p className="text-gray-300 mt-2 text-lg">
              All you need to know to rock this 24-hour code sprint!
            </p>
          </div>
  
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-300">
            <Accordion type="single" collapsible className="w-full space-y-4 ">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold cursor-pointer text-white hover:text-cyan-400 transition-colors duration-200">
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
  