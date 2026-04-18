import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";
import katieBarr from "@/assets/katie-barr.jpg";
import paperTexture from "@/assets/paper-texture.jpg";

const Contact = () => (
  <Layout>
    <Seo
      title="Contact Barr Interventions & Consulting | 817.739.1349"
      description="Reach out to Katie Barr, CIP, for professional intervention and recovery services in Texas, Oklahoma, Louisiana, and nationwide. Available 24/7."
      path="/contact"
    />
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-4">Get in Touch</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Thank you for your interest in Barr Interventions & Consulting. Use the form below to open a prefilled email draft, or call directly for urgent support.
          </p>
          <img src={katieBarr} alt="Katie Barr" className="rounded shadow-lg w-full max-w-sm" loading="lazy" width={800} height={1000} />
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
        <p className="text-3xl font-heading text-primary tracking-wider mb-2">817.739.1349</p>
        <p className="text-muted-foreground">Serving Texas, Oklahoma & Louisiana</p>
      </div>
    </section>
  </Layout>
);

export default Contact;
