import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import ValueCard from "@/components/ValueCard";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-hands.jpg";
import paperTexture from "@/assets/paper-texture.jpg";
import barrLogoWhite from "@/assets/barr-logo-white.png";

const Index = () => (
  <Layout>
    <Seo
      title="Drug & Alcohol Intervention Specialist | Texas, Oklahoma & Louisiana | Barr Interventions"
      description="Professional drug and alcohol intervention, sober coaching, K9 detection, and family consulting across Texas, Oklahoma, Louisiana, and nationwide. Call 817.739.1349."
      path="/"
    />
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="Supportive hands" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative flex items-center justify-center animate-fade-in">
        <img
          src={barrLogoWhite}
          alt="Barr Interventions & Consulting"
          className="w-48 md:w-64 lg:w-80 drop-shadow-lg"
        />
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <h1 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-4">Compassionate Addiction Intervention Services for Families Who Need a Clear Plan</h1>
      <p className="text-lg leading-relaxed text-muted-foreground mb-4">
        Barr Interventions & Consulting helps families move from chaos and fear to a structured path forward. Led by Katie Barr, CIP, we provide intervention services, sober coaching, family support, transport, case management, and K9 substance detection in Texas and nationwide.
      </p>
      <p className="text-base leading-relaxed text-foreground font-medium">
        Families call when trust is worn thin, emotions are high, and the next move feels unclear. We bring experienced guidance, calm communication, and a plan that protects dignity while creating real momentum toward treatment and recovery.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:5124025991" className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Call 512.402.5991
        </a>
        <Link to="/services" className="inline-block border border-primary text-primary font-heading text-sm tracking-widest px-8 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors">
          Explore Services
        </Link>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-4">
      <div className="max-w-5xl mx-auto grid gap-4 md:grid-cols-3">
        {[
          "Led by Katie Barr, CIP with clinical and lived-experience perspective",
          "Support for intervention, placement coordination, family systems, and sober transport",
          "Discreet help for urgent situations in Texas and nationwide",
        ].map((item) => (
          <div key={item} className="rounded border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm">
            {item}
          </div>
        ))}
      </div>
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
          <p className="text-2xl font-heading text-primary tracking-wider">817.739.1349</p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Index;
