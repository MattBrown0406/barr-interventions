import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import abuPhoto from "@/assets/abu-k9.png";
import { Shield, CheckCircle, Phone, Star, Award, Search, Heart, Building2, Home } from "lucide-react";

const detectionSubstances = [
  "Marijuana", "Cocaine", "Methamphetamine", "Fentanyl", "Heroin",
  "Oxycontin", "Tylenol 3", "Kratom", "7-OH", "Xanax", "Suboxone",
];

const coreSkills = [
  "The Bestest Boy", "Ball Is Life", "Sniff Solutions",
  "Clear Cut Detections", "Scent Tracking", "Passive Alert",
  "High-Drive Focus", "Cuddles",
];

const K9Detection = () => (
  <Layout>
    <Helmet>
      <title>Abu — K9 Drug Detection Director | Barr Interventions & Consulting</title>
      <meta name="description" content="Meet Abu, Director of Detections at Barr Interventions & Consulting. Certified narcotics K9 detecting fentanyl, cocaine, meth, heroin, kratom, xanax, suboxone and more." />
    </Helmet>

    {/* Hero */}
    <section className="relative py-20 px-6 md:px-12 bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground animate-fade-in">
          <p className="font-heading text-sm tracking-[4px] uppercase text-primary-foreground/70 mb-2">
            Director of Detections
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-wider mb-3">
            Abu
          </h1>
          <div className="w-16 h-0.5 bg-primary-foreground/40 mb-4" />
          <p className="text-lg italic text-primary-foreground/75 mb-8">
            "Makes Clear Cut Detections"
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-foreground text-primary font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Schedule a Sweep
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={abuPhoto}
            alt="Abu, certified narcotics detection K9"
            className="max-h-[450px] w-auto object-contain drop-shadow-2xl"
            width={400}
            height={450}
          />
        </div>
      </div>
    </section>

    {/* Quick Stats */}
    <section className="py-8 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { icon: Building2, label: "Barr Interventions & Consulting" },
          { icon: Award, label: "Certified Narcotics K9" },
          { icon: Star, label: "Active Since 2024" },
          { icon: Search, label: "Director of Detections" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <item.icon className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground font-heading tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Professional Summary */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wider mb-8 text-center">
          Professional Summary
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Abu is Barr Interventions & Consulting's elite narcotics detection specialist — a certified K9 professional with an unmatched nose for accuracy and an even bigger heart for the mission. Since joining as <strong className="text-primary">Director of Detections in 2024</strong>, Abu has become the gold standard in scent-based narcotics identification, delivering <strong className="text-primary">sniff solutions</strong> that make a measurable difference in schools, facilities, and community environments.
          </p>
          <p>
            Known for his unwavering focus and signature enthusiasm, Abu <strong className="text-primary">makes clear cut detections</strong> across a comprehensive panel of controlled substances and emerging compounds. Whether on a routine sweep or a high-priority deployment, Abu approaches every assignment with professionalism — and exactly the right amount of tail-wagging.
          </p>
        </div>
      </div>
    </section>

    {/* Core Skills */}
    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary tracking-wider mb-8">
          Core Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {coreSkills.map((skill) => (
            <span key={skill} className="bg-primary text-primary-foreground text-sm font-heading tracking-wider px-5 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Detection Profile */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary tracking-wider mb-8">
          Detection Profile
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Abu is certified to detect the following substances across an 11-compound panel:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {detectionSubstances.map((substance) => (
            <div key={substance} className="flex items-center gap-3 bg-card p-4 rounded shadow-sm">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{substance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Professional Experience */}
    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary tracking-wider mb-12">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {/* Role 1 */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary" />
            <h3 className="font-heading text-xl text-primary tracking-wider">Barr Interventions & Consulting</h3>
            <p className="font-heading text-sm text-foreground tracking-wider mt-1">Director of Detections — Narcotics K9</p>
            <p className="text-sm text-muted-foreground tracking-wider mt-1 mb-4">2024 — Present</p>
            <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-primary">—</span> Leads all narcotics detection operations, providing sniff solutions across client environments including schools, treatment facilities, and residential programs.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Makes clear cut detections on an 11-substance detection panel spanning prescription, illicit, and emerging compounds.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Partners with certified K9 handler to conduct systematic sweeps with zero compromise on accuracy or welfare.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Serves as a visual ambassador for deterrence-based intervention, reducing substance presence by establishing a consistent detection presence.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Maintains highest certification standards while continuing advanced scent discrimination training for novel compounds including 7-OH and Suboxone.</li>
            </ul>
          </div>

          {/* Role 2 */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary/60" />
            <h3 className="font-heading text-xl text-primary tracking-wider">Narcotics Detection Training Program</h3>
            <p className="font-heading text-sm text-foreground tracking-wider mt-1">K9 Candidate — Advanced Scent Imprinting</p>
            <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed mt-4">
              <li className="flex gap-2"><span className="text-primary">—</span> Completed rigorous multi-phase narcotics imprinting curriculum covering foundational through advanced detection compounds.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Demonstrated exceptional drive, focus, and handler responsiveness throughout certification pipeline.</li>
              <li className="flex gap-2"><span className="text-primary">—</span> Graduated with distinction; recognized for superior passive alert reliability and consistent odor discrimination under distraction.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary tracking-wider mb-12">
          Who We Serve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Residential Homes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Parents and families who suspect a loved one may be hiding substances. Abu can search bedrooms, vehicles, common areas, and personal belongings quickly and discreetly.
            </p>
          </div>
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Schools & Businesses</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Schools, employers, and organizations concerned about substance presence. Our sweeps help maintain safe, drug-free environments for students and employees.
            </p>
          </div>
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Treatment & Sober Living</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Treatment centers, sober living homes, and halfway houses that need to ensure residents are maintaining a substance-free environment. Regular sweeps support accountability.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tagline Banner */}
    <section className="py-12 px-6 bg-primary text-center">
      <p className="font-heading text-2xl md:text-3xl text-primary-foreground tracking-wider italic">
        "The Bestest Boy. Every Single Time."
      </p>
    </section>

    {/* CTA + Contact */}
    <section className="py-20 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Schedule a K9 Sweep</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Concerned about substance use in your home, school, or facility? Abu and our certified handler deliver discreet, thorough, and reliable detection sweeps. Reach out today.
          </p>
          <a href="tel:8177391349" className="flex items-center gap-2 text-2xl font-heading text-primary tracking-wider mb-2">
            <Phone className="w-6 h-6" />
            817.739.1349
          </a>
          <p className="text-muted-foreground text-sm">Barr Interventions & Consulting · Narcotics Detection K9 Division</p>
        </div>
        <ContactForm />
      </div>
    </section>

    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "K9 Narcotics Detection — Abu, Director of Detections",
          provider: {
            "@type": "Organization",
            name: "Barr Interventions & Consulting",
            telephone: "+1-817-739-1349",
          },
          description:
            "Certified K9 narcotics detection services for homes, schools, businesses, and treatment facilities. 11-substance detection panel including fentanyl, cocaine, meth, heroin, kratom, xanax, and suboxone.",
          serviceType: "Narcotics Detection",
        }),
      }}
    />
  </Layout>
);

export default K9Detection;
