import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import founderImage from "@/assets/founder-portrait.jpg";
import paperTexture from "@/assets/paper-texture.jpg";

const Contact = () => (
  <Layout>
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-4">Get in Touch</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Thank you for your interest in Barr Interventions & Consulting. Please complete this form and a member of the team will follow up within 24 hours.
          </p>
          <img src={founderImage} alt="Barr team" className="rounded shadow-lg w-full max-w-sm" loading="lazy" width={800} height={1000} />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>

    <section className="relative py-16 px-6 md:px-12">
      <img src={paperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" width={1920} height={600} />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Contact Us</h2>
        <p className="text-3xl font-heading text-primary tracking-wider mb-2">512.402.5991</p>
        <p className="text-muted-foreground">Serving Texas, Oklahoma & Louisiana</p>
      </div>
    </section>
  </Layout>
);

export default Contact;
