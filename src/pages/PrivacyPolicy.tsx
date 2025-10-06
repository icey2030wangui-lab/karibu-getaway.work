import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                At Karibu Gateways, we collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Book a tour or safari package</li>
                <li>Contact us through our website or chat</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our platform</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, phone number, payment information, 
                and travel preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your bookings and payments</li>
                <li>Communicate with you about your travel arrangements</li>
                <li>Send you updates about our services and special offers</li>
                <li>Improve our website and customer service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. 
                All payment transactions are processed through secure, encrypted channels. However, no 
                method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Travel service providers necessary to fulfill your booking</li>
                <li>Payment processors to complete transactions</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie 
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
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

export default PrivacyPolicy;
