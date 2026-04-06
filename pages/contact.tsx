import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
                  What can we help you with?
                </h1>
              </div>

              <ContactForm />
            </section>

            <ContactSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
