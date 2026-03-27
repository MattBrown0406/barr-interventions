import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ValueCard from "@/components/ValueCard";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-hands.jpg";
import paperTexture from "@/assets/paper-texture.jpg";
import barrLogoWhite from "@/assets/barr-logo-white.png";

const Index = () => (
  <Layout>
    <Helmet>
      <title>Drug &amp; Alcohol Intervention Specialist | Texas, Oklahoma &amp; Louisiana | Barr Interventions</title>
      <meta name="description" content="Professional drug and alcohol intervention, sober coaching, K9 detection, and family consulting across Texas, Oklahoma, and Louisiana. Call 512.402.5991." />
    </Helmet>
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
      <h1 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-4">Texas Based Compassionate Addiction Intervention Services</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Barr Interventions & Consulting is devoted to helping individuals and families regain their lives amidst struggles with drugs and alcohol through interventions and consulting. Serving clients nationwide, services encompass sober transport, case management, client and family advocacy, companionship, and coaching as it relates to recovery from substance use.
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
