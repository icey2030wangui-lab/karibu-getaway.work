import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Karibu Gateways' services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Booking and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Full payment or deposit is required to secure your booking</li>
                <li>Prices are subject to change without prior notice until booking is confirmed</li>
                <li>Payment can be made via bank transfer, mobile money, or credit card</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cancellation Policy</h2>
              <p><strong>By the Client:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>More than 30 days before departure: 25% cancellation fee</li>
                <li>15-30 days before departure: 50% cancellation fee</li>
                <li>Less than 15 days before departure: 100% cancellation fee</li>
              </ul>
              <p className="mt-4"><strong>By Karibu Gateways:</strong></p>
              <p>
                We reserve the right to cancel any tour due to insufficient bookings or force majeure. 
                In such cases, a full refund or alternative arrangement will be offered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Travel Documents</h2>
              <p>
                You are responsible for ensuring you have valid travel documents, including passports, 
                visas, and any required health certificates. Karibu Gateways is not liable for any issues 
                arising from inadequate documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Travel Insurance</h2>
              <p>
                We strongly recommend that all travelers purchase comprehensive travel insurance covering 
                medical expenses, trip cancellations, lost luggage, and personal liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Liability</h2>
              <p>
                While we take every precaution to ensure your safety and satisfaction, Karibu Gateways 
                is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acts of nature, weather conditions, or force majeure events</li>
                <li>Personal injury or loss of property</li>
                <li>Changes made by airlines, hotels, or other service providers</li>
                <li>Delays or cancellations beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Conduct</h2>
              <p>
                Travelers are expected to conduct themselves responsibly and respect local customs, 
                wildlife, and the environment. We reserve the right to remove any traveler whose behavior 
                is deemed inappropriate or dangerous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications to Terms</h2>
              <p>
                Karibu Gateways reserves the right to modify these terms at any time. Continued use of 
                our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Kenya. Any disputes will be resolved 
                in the courts of Nairobi, Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> info@karibugateway.com</p>
                <p><strong>Phone:</strong> +254719542780</p>
                <p><strong>Address:</strong> Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
