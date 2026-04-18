import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import katieBarr from "@/assets/katie-barr-services.jpg";

const services = [
  {
    title: "Intervention",
    content: [
      "An intervention is the act of interfering with the outcome or course of a condition to prevent harm or improve functioning. When one is close to a situation of substance or alcohol abuse, Barr Interventions & Consulting comes in to guide, coach, and introduce hope.",
      "Barr specializes in two types of drug and alcohol intervention styles:",
    ],
    subsections: [
      {
        title: "Invitational Intervention",
        text: "Barr works alongside the affected individual's loved ones to craft an invitation to meet. Once agreed upon, the intervention is facilitated with letters from family members. The message conveyed is one of love, and participation is autonomous.",
      },
      {
        title: "Surprise Intervention",
        text: "The individual is unaware and walks into a meeting planned by their loved ones. Typically, loved ones present letters stating how the individual's substance use has impacted their life. Behind the scenes, the interventionist paves the way toward treatment admission beforehand.",
      },
    ],
  },
  {
    title: "Sober Transport",
    content: [
      "Within Texas and beyond, Barr provides sober transport by private vehicle, commercial plane, and private jet—whichever method the client prefers. Whether someone needs transportation to a treatment center or to a court appointment or wedding ceremony, Barr provides safe, reliable, professional transportation.",
    ],
  },
  {
    title: "Recovery Coaching",
    content: [
      "Barr meets individuals where they are in their recovery journey to serve as a beacon of positivity that can coach and serve as a companion when it comes to important life skills like conducting job searches, engaging in fitness programs, and traveling while maintaining sobriety. The end goal is to build self-efficacy, which is crucial for long-term sobriety.",
    ],
  },
  {
    title: "Family Liaison",
    content: [
      "Addiction is a family disease; when an individual is using drugs or alcohol, it affects the whole family. Even when a family is not yet in crisis and is simply looking for guidance, Barr helps as a guiding, encouraging force that helps families set boundaries, understand treatment options, and receive assistance with treatment logistics.",
    ],
  },
  {
    title: "Case Management",
    content: [
      "Pre and post intervention and treatment, Barr works with individuals and their families to offer education around addiction and mental health disorders; share connections to resources and tools for coping; collaborate on treatment provider vetting, intake, and initiation; and consult on discharge plans for long-term success.",
    ],
  },
  {
    title: "K9 Substance Detection",
    content: [
      "Barr offers professional K9 drug detection sweeps for homes, businesses, and treatment provider residences. Our certified detection dog is trained to identify illicit substances including fentanyl, opioids, methamphetamine, cocaine, heroin, MDMA, and marijuana.",
      "Whether you're a concerned parent, a business owner, or a treatment facility ensuring a substance-free environment, Barr's K9 detection service provides discreet, thorough, and reliable sweeps to give you peace of mind.",
    ],
    link: "/k9-detection",
  },
];

const serviceHighlights = [
  "Confidential guidance for families in crisis",
  "Practical planning around treatment, transport, and follow-through",
  "Support rooted in dignity, directness, and real-world experience",
];

const Services = () => (
  <Layout>
    <Seo
      title="Intervention, Sober Coaching & K9 Detection Services | Barr Interventions"
      description="Professional drug and alcohol intervention, sober coaching, family liaison, case management, K9 substance detection, and sober transport services."
      path="/services"
    />
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-6">Services</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Barr Interventions & Consulting offers focused, self-pay support for families and individuals navigating addiction, relapse, treatment transitions, and high-stress decisions. Every service is designed to reduce chaos, clarify options, and help families respond with more consistency and less fear.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              If you are not sure which service fits your situation, start with a call. Katie can help you determine whether the right next step is intervention, coaching, transport, family guidance, K9 detection, or a coordinated treatment plan.
            </p>
          </div>
          <img
            src={katieBarr}
            alt="Katie Barr, Interventions & Consulting"
            className="rounded shadow-lg w-full max-w-sm mx-auto object-cover"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>

        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item} className="rounded-lg border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {services.map((service, i) => (
            <div key={i} className={`grid md:grid-cols-[200px_1fr] gap-8 ${i !== services.length - 1 ? "pb-16 border-b border-border" : ""}`}>
              <h2 className="font-heading text-2xl text-primary tracking-wider">{service.title}</h2>
              <div className="space-y-4">
                {service.content.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
                {service.link && (
                  <Link to={service.link} className="inline-block text-primary font-heading text-sm tracking-widest hover:opacity-80 transition-opacity mt-2">
                    Learn More →
                  </Link>
                )}
                {service.subsections?.map((sub, k) => (
                  <div key={k} className="ml-4 pl-4 border-l-2 border-primary/30">
                    <h3 className="font-heading text-lg text-foreground tracking-wider mb-2">{sub.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sub.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <h2 className="font-heading text-2xl text-primary tracking-wider mb-3">Not sure where to begin?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground leading-relaxed">
            Start with a conversation about what is happening, what risks are present, and what your family has already tried. You will leave that first discussion with more clarity than you have now.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:8177391349" className="inline-block rounded bg-primary px-8 py-3 font-heading text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
              Call 817.739.1349
            </a>
            <Link to="/contact" className="inline-block rounded border border-primary px-8 py-3 font-heading text-sm tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Contact Barr Interventions
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
