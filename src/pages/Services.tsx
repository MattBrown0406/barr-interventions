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

const Services = () => (
  <Layout>
    <Seo
      title="Intervention, Sober Coaching & K9 Detection Services | Barr Interventions"
      description="Professional drug and alcohol intervention, sober coaching, family liaison, case management, K9 substance detection, and sober transport services."
      path="/services"
    />
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-6">Services</h1>
            <p className="text-muted-foreground leading-relaxed">
              Barr Interventions & Consulting offers a suite of self-pay services to meticulously assist individuals experiencing challenges with addiction. Because addiction is a family disease, services are meant to support the loved ones of the affected individual. With any service provided, the utmost respect and attention to detail is guaranteed.
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

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
