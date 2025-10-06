import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the safari packages?",
      answer: "Our safari packages typically include accommodation, meals (as specified), park entry fees, game drives, professional guide services, and airport transfers. Specific inclusions vary by package - please check individual tour details."
    },
    {
      question: "Do I need a visa to visit Kenya?",
      answer: "Most visitors need a visa to enter Kenya. You can apply for an eVisa online before travel. Requirements vary by nationality. We recommend checking with the Kenyan embassy or consulate in your country for specific requirements."
    },
    {
      question: "What is the best time to visit Kenya?",
      answer: "Kenya is a year-round destination. For the Great Migration in Maasai Mara, visit July-October. For beach holidays, December-March and July-October offer the best weather. Each season offers unique wildlife viewing opportunities."
    },
    {
      question: "Is it safe to travel to Kenya?",
      answer: "Kenya is generally safe for tourists. We work with experienced guides and stay updated on local conditions. We recommend following standard travel precautions, avoiding isolated areas at night, and keeping valuables secure."
    },
    {
      question: "What vaccinations do I need?",
      answer: "Yellow fever vaccination is required if arriving from certain countries. We recommend consulting your doctor about malaria prophylaxis, hepatitis A & B, typhoid, and routine vaccinations. Medical requirements may change, so check current guidelines before travel."
    },
    {
      question: "Can I customize my safari package?",
      answer: "Absolutely! We specialize in creating custom itineraries tailored to your preferences, budget, and time constraints. Contact us with your requirements, and we'll design a personalized experience."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards (Visa, Mastercard), mobile money (M-Pesa), and PayPal. A deposit is typically required to secure your booking, with the balance due before departure."
    },
    {
      question: "What should I pack for a safari?",
      answer: "Pack lightweight, neutral-colored clothing, comfortable walking shoes, a hat, sunscreen, insect repellent, binoculars, and a good camera. Layers are important as temperatures vary. We'll provide a detailed packing list upon booking."
    },
    {
      question: "Are children allowed on safaris?",
      answer: "Yes! We offer family-friendly safari options. Some lodges have age restrictions, typically 6+ years for game drives. We can recommend child-friendly accommodations and activities suitable for all ages."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "Cancellation terms vary by package and timing. Generally, cancellations more than 30 days before departure incur a 25% fee, 15-30 days incur 50%, and less than 15 days forfeit the full amount. We strongly recommend travel insurance."
    },
    {
      question: "Is travel insurance necessary?",
      answer: "We strongly recommend comprehensive travel insurance covering medical expenses, trip cancellation, lost luggage, and evacuation. It provides peace of mind and financial protection against unforeseen circumstances."
    },
    {
      question: "How do I get from the airport to my accommodation?",
      answer: "Airport transfers are included in most of our packages. Our representative will meet you at the airport with a name sign and escort you to your vehicle. We provide comfortable, air-conditioned transport."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Find answers to common questions about traveling with Karibu Gateways. 
            Don't see your question? Contact us anytime!
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help! Reach out via email, phone, or use our chat feature.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> info@karibugateway.com</p>
              <p><strong>Phone:</strong> +254719542780</p>
              <p><strong>WhatsApp:</strong> +254719542780</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
