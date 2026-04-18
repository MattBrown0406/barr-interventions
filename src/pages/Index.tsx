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
    <section className="relative min-h-[540px] overflow-hidden px-6 py-20 md:px-12 md:py-24">
      <img src={heroImage} alt="Supportive hands" className="absolute inset-0 h-full w-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="animate-fade-in text-white">
          <p className="mb-4 font-heading text-xs uppercase tracking-[0.35em] text-white/75">Drug and alcohol intervention support</p>
          <h1 className="mb-5 font-heading text-4xl tracking-wider md:text-6xl">
            Calm, experienced help when your family cannot keep doing this alone
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/85">
            Barr Interventions & Consulting helps families move from chaos and fear to a clear plan. Led by Katie Barr, CIP, we support intervention planning, family systems work, transport, coaching, case management, and K9 detection in Texas and nationwide.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:8177391349" className="inline-block rounded bg-primary px-8 py-3 font-heading text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
              Call 817.739.1349
            </a>
            <a
              href="https://soberhelpline.com/book-consultation?plan=emergency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-accent px-8 py-3 font-heading text-sm tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book a Session with Katie — $150
            </a>
            <Link to="/contact" className="inline-block rounded border border-white/70 px-8 py-3 font-heading text-sm tracking-widest text-white transition-colors hover:bg-white hover:text-foreground">
              Start Confidentially
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
            <div className="rounded border border-white/15 bg-white/10 px-4 py-3">Professional guidance led by Katie Barr, CIP</div>
            <div className="rounded border border-white/15 bg-white/10 px-4 py-3">Support for intervention, placement, and family boundaries</div>
            <div className="rounded border border-white/15 bg-white/10 px-4 py-3">Confidential help for urgent situations, in Texas and nationwide</div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-sm">
            <img
              src={barrLogoWhite}
              alt="Barr Interventions & Consulting"
              className="mx-auto mb-6 w-40 md:w-52"
            />
            <h2 className="mb-4 text-center font-heading text-2xl tracking-wider">What families can expect</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-white/85">
              <li>Clear recommendations after the first conversation</li>
              <li>Respectful, non-shaming communication with your loved one</li>
              <li>Help coordinating treatment and next-step logistics</li>
              <li>Support for the whole family, not just the identified client</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="mx-auto max-w-5xl px-6 py-20 text-center md:px-12">
      <h2 className="mb-4 font-heading text-2xl text-primary tracking-wider md:text-3xl">You do not need to wait for things to get worse</h2>
      <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
        Families usually reach out when trust is worn thin, emotions are high, and no one agrees on what to do next. We bring structure, calm communication, and a plan that protects dignity while creating real momentum toward treatment and recovery.
      </p>
      <p className="text-base font-medium leading-relaxed text-foreground">
        Whether you need help deciding if an intervention is appropriate, identifying treatment options, setting boundaries, or responding to an urgent relapse situation, Barr Interventions can help you understand the next right step.
      </p>
    </section>

    <section className="px-6 pb-6 md:px-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          "Intervention planning that is strategic, compassionate, and clinically informed",
          "Family coaching that helps loved ones stop guessing and start responding consistently",
          "Practical logistics support, from transport to treatment coordination and follow-through",
        ].map((item) => (
          <div key={item} className="rounded border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </section>

    <section className="px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-3 font-heading text-2xl text-primary tracking-wider">How the process starts</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">A first call is usually focused on safety, urgency, family dynamics, and what has already been tried. From there, Katie can recommend the most appropriate path.</p>
          </div>
          {[
            ["1", "Initial call", "Share what is happening, who is involved, and what feels most urgent right now."],
            ["2", "Strategy and recommendations", "Get guidance on intervention, treatment options, family boundaries, transport, or coaching."],
            ["3", "Take the next right step", "Move forward with a concrete plan instead of reacting case by case."]
          ].map(([num, title, copy]) => (
            <div key={title} className="rounded-xl bg-secondary/40 p-6">
              <p className="mb-3 font-heading text-sm tracking-[0.25em] text-primary">Step {num}</p>
              <h3 className="mb-2 font-heading text-xl tracking-wider text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
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
          <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Talk through what is happening</h2>
          <p className="text-muted-foreground mb-3">You do not need to have the whole plan figured out before you reach out.</p>
          <p className="text-muted-foreground mb-4">Call for urgent support, or use the form to open a confidential email draft with the details you want to share.</p>
          <p className="text-2xl font-heading text-primary tracking-wider">817.739.1349</p>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default Index;
