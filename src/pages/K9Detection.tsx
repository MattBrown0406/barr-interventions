import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import k9Dog from "@/assets/k9-detection-dog.jpg";
import k9Sweep from "@/assets/k9-sweep-service.jpg";
import { Shield, Home, Building2, Heart, CheckCircle, Phone } from "lucide-react";

const K9Detection = () => (
  <Layout>
    <Helmet>
      <title>K9 Drug Detection Services in Texas, Oklahoma &amp; Louisiana | Barr Interventions</title>
      <meta name="description" content="Certified K9 substance detection sweeps for homes, businesses, and treatment facilities. Trained to detect fentanyl, opioids, meth, cocaine, heroin, MDMA, and marijuana." />
    </Helmet>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src={k9Sweep} alt="K9 drug detection sweep in progress" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative text-center text-primary-foreground px-6 animate-fade-in">
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-wider mb-4">
          K9 Drug Detection Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-body">
          Professional substance detection sweeps for homes, businesses, and treatment facilities across Texas, Oklahoma & Louisiana.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="bg-primary-foreground text-primary font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Schedule a Sweep
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={k9Dog}
          alt="Trained K9 drug detection dog"
          className="rounded shadow-lg w-full"
          loading="lazy"
          width={1200}
          height={800}
        />
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wider mb-6">
            Meet Our K9 Detection Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Barr Interventions & Consulting offers a unique and powerful service through our professionally trained drug detection dog. Our K9 partner is certified in detecting a wide range of illicit substances, providing families, businesses, and treatment providers with peace of mind and actionable results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Whether you suspect substance use in your home, want to ensure a drug-free workplace, or need to verify the integrity of a treatment facility or sober living environment, our K9 detection service delivers discreet, thorough, and reliable results.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This service is a natural extension of our intervention and recovery work—giving families and treatment providers an additional tool to support sobriety and accountability.
          </p>
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary tracking-wider mb-12">
          Who We Serve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Residential Homes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Parents and families who suspect a loved one may be hiding substances in their home. Our K9 can search bedrooms, vehicles, common areas, and personal belongings quickly and discreetly.
            </p>
          </div>
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Businesses & Workplaces</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Employers concerned about substance use in the workplace. Our sweeps help maintain a safe, drug-free environment for all employees while protecting your business.
            </p>
          </div>
          <div className="bg-card p-8 rounded shadow-sm text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">Treatment Providers & Sober Living</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Treatment centers, sober living homes, and halfway houses that need to ensure residents are maintaining a substance-free environment. Regular sweeps support accountability and program integrity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary tracking-wider mb-12">
          How It Works
        </h2>
        <div className="space-y-8">
          {[
            { step: "1", title: "Initial Consultation", desc: "Contact us to discuss your situation confidentially. We'll understand your concerns, the scope of the search, and schedule a convenient time." },
            { step: "2", title: "On-Site K9 Sweep", desc: "Our trained detection dog and handler arrive at your location. The K9 systematically searches the designated areas, alerting on any illicit substances detected." },
            { step: "3", title: "Detailed Report", desc: "After the sweep, you receive a thorough report of findings. If substances are detected, we can connect you immediately with our intervention and recovery services." },
            { step: "4", title: "Follow-Up Support", desc: "Our work doesn't stop at detection. We offer intervention planning, treatment placement, sober coaching, and family support to address the root causes." },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading text-xl font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground tracking-wider mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Substances Detected */}
    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary tracking-wider mb-8">
          Substances Our K9 Can Detect
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Marijuana & THC products",
            "Cocaine & crack cocaine",
            "Heroin & opioids",
            "Methamphetamine",
            "Fentanyl",
            "MDMA / Ecstasy",
            "Prescription medications (misused)",
            "Synthetic drugs & designer substances",
          ].map((substance) => (
            <div key={substance} className="flex items-center gap-3 bg-card p-4 rounded">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{substance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary tracking-wider mb-12">
          Why Choose Barr K9 Detection
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            { icon: Shield, title: "Confidential & Discreet", desc: "All sweeps are conducted with complete confidentiality. We arrive in unmarked vehicles and work discreetly." },
            { icon: CheckCircle, title: "Professionally Trained K9", desc: "Our detection dog is professionally trained and certified to detect a comprehensive range of illicit substances." },
            { icon: Heart, title: "Compassion-First Approach", desc: "Detection is just the beginning. We approach every situation with empathy and connect families to recovery resources." },
            { icon: Building2, title: "Comprehensive Service Area", desc: "Serving homes, businesses, and treatment facilities throughout Texas, Oklahoma, and Louisiana." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-lg text-foreground tracking-wider mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA + Contact */}
    <section className="py-20 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Schedule a K9 Sweep</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Concerned about substance use in your home or facility? Our confidential K9 detection service can provide the answers you need. Reach out today to schedule a sweep.
          </p>
          <a href="tel:5124025991" className="flex items-center gap-2 text-2xl font-heading text-primary tracking-wider mb-2">
            <Phone className="w-6 h-6" />
            512.402.5991
          </a>
          <p className="text-muted-foreground text-sm">Serving Texas, Oklahoma & Louisiana</p>
        </div>
        <ContactForm />
      </div>
    </section>

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "K9 Drug Detection & Substance Sweeps",
          provider: {
            "@type": "Organization",
            name: "Barr Interventions & Consulting",
            telephone: "+1-512-402-5991",
            areaServed: ["Texas", "Oklahoma", "Louisiana"],
          },
          description:
            "Professional K9 drug detection services for homes, businesses, and treatment facilities. Trained detection dog sweeps for illicit substances including fentanyl, opioids, methamphetamine, cocaine, and more.",
          serviceType: "Drug Detection",
          areaServed: [
            { "@type": "State", name: "Texas" },
            { "@type": "State", name: "Oklahoma" },
            { "@type": "State", name: "Louisiana" },
          ],
        }),
      }}
    />
  </Layout>
);

export default K9Detection;
