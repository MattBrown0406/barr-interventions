import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ValueCard from "@/components/ValueCard";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-hands.jpg";
import paperTexture from "@/assets/paper-texture.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Supportive hands" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative text-center text-primary-foreground px-6 animate-fade-in">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
          Barr Interventions<br />& Consulting
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-body">
          Recovery and sobriety are not short journeys; they are for life.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services" className="bg-primary-foreground text-primary font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Our Services
          </Link>
          <Link to="/contact" className="border border-primary-foreground text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:bg-primary-foreground/10 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <p className="text-lg leading-relaxed text-muted-foreground">
        Barr Interventions & Consulting is devoted to helping individuals and families regain their lives amidst struggles with drugs and alcohol through interventions and consulting. Serving clients across Texas, Oklahoma, and Louisiana, services encompass sober transport, case management, client and family advocacy, companionship, and coaching as it relates to recovery from substance use.
      </p>
    </section>

    {/* Values */}
    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary tracking-wider mb-12">Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard title="ethics" description="Working with high ethical standards is a cornerstone; helping others honestly and for the right reasons." />
          <ValueCard title="dignity" description="The unwavering dignity with which Barr interfaces with clients is a constant beacon of light." />
          <ValueCard title="respect" description="Each person is treated with respect, kindness, and compassion—elements integral to delicate circumstances." />
          <ValueCard title="love" description="At the center is a love for individuals and the desire for every person to thrive." />
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="relative py-20 px-6 md:px-12">
      <img src={paperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" width={1920} height={600} />
      <div className="relative max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-2">Ready to take the first step? Reach out today.</p>
          <p className="text-2xl font-heading text-primary tracking-wider">512.402.5991</p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Index;
