import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Seo, { organizationSchema } from "@/components/Seo";
import katieBarr from "@/assets/katie-barr.jpg";
import paperTexture from "@/assets/paper-texture.jpg";

const Contact = () => (
  <Layout>
    <Seo
      title="Contact Barr Interventions & Consulting | 817.739.1349"
      description="Reach out to Katie Barr, CIP, LCDCi, for professional intervention and recovery services in Texas, Oklahoma, Louisiana, and nationwide. Available 24/7."
      path="/contact"
      schema={[
        organizationSchema,
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Barr Interventions & Consulting",
          url: "https://barrinterventions.com/contact",
        },
      ]}
    />
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-4">Get in Touch</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When a family is in crisis, speed and clarity matter. Use the form below to open a prefilled email draft, or call directly for urgent support.
          </p>
          <p className="text-foreground leading-relaxed mb-5 font-medium">
            If you are not sure what kind of help you need yet, that is okay. Start the conversation and we can help you figure out the next right step.
          </p>
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card px-4 py-4 text-sm text-muted-foreground shadow-sm">Best for urgent situations, relapse concerns, or when treatment may need to happen quickly.</div>
            <div className="rounded-lg border border-border bg-card px-4 py-4 text-sm text-muted-foreground shadow-sm">Helpful if you want to share details privately before talking, or send information from multiple family members.</div>
          </div>
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
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Call for Immediate Support</h2>
        <p className="text-3xl font-heading text-primary tracking-wider mb-2">817.739.1349</p>
        <p className="text-muted-foreground mb-2">Serving Texas, Oklahoma, Louisiana, and families nationwide.</p>
        <p className="text-sm text-muted-foreground">If this is time-sensitive, calling is the fastest path to clarity.</p>
      </div>
    </section>
  </Layout>
);

export default Contact;
