import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { seoStates, stateCitiesMap } from "@/data/seoStates";
import { seoCities } from "@/data/seoCities";
import { getStateImage } from "@/data/stateImages";
import NotFound from "./NotFound";

const StatePage = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const state = seoStates.find((s) => s.slug === stateSlug);

  if (!state) return <NotFound />;

  const heroImage = getStateImage(state.slug);
  const cities = stateCitiesMap[state.name] || [];
  const linkedCities = seoCities.filter((c) => c.state === state.name);
  const otherStates = seoStates.filter((s) => s.slug !== state.slug).slice(0, 8);

  const services = [
    { title: "Intervention", desc: `Professional drug and alcohol interventions in ${state.name}, including invitational and surprise styles tailored to each family's unique situation.`, icon: "🤝" },
    { title: "Sober Coaching", desc: `One-on-one sober coaching to help ${state.name} residents build accountability, develop coping skills, and maintain lasting sobriety.`, icon: "🧭" },
    { title: "Family Coaching", desc: `Helping families in ${state.name} understand addiction, set healthy boundaries, and navigate the recovery process together.`, icon: "👨‍👩‍👧‍👦" },
    { title: "Sober Transport", desc: `Safe, reliable sober transport services to and from treatment facilities serving ${state.name}.`, icon: "✈️" },
    { title: "Case Management", desc: `Comprehensive case management including treatment vetting, intake coordination, and discharge planning in ${state.name}.`, icon: "📋" },
    { title: "K9 Substance Detection", desc: `Professional K9 drug detection sweeps for homes, businesses, and treatment facilities across ${state.name}.`, icon: "🐕" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Drug &amp; Alcohol Intervention in {state.name} | Barr Interventions &amp; Consulting</title>
        <meta name="description" content={`${state.description} Call Katie Barr, CIP, at 512.402.5991 for professional intervention, sober coaching, and family support.`} />
      </Helmet>
      {/* Hero with state image */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={`${state.name} landscape`}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative text-center text-primary-foreground px-6 animate-fade-in">
          <p className="font-body text-sm tracking-[0.3em] uppercase opacity-80 mb-3">
            {state.tagline}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2">
            {state.name}
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto opacity-90">
            Addiction Intervention & Recovery Services
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {state.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wider text-center mb-12">
            Our Services in {state.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-heading text-lg text-primary tracking-wider mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-8">
            Why Choose Barr Interventions in {state.name}?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Experienced, compassionate intervention professionals",
              "Ethical, dignified approach rooted in love and respect",
              "Comprehensive support from intervention through aftercare",
              "Available 24/7 for crisis situations",
              "In-person, phone, and virtual services available",
              "Certified K9 substance detection services",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities in this state */}
      {cities.length > 0 && (
        <section className="py-16 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-6">
              Cities We Serve in {state.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => {
                const linked = linkedCities.find((c) => c.name === city);
                return linked ? (
                  <Link
                    key={city}
                    to={`/services/${linked.slug}`}
                    className="p-3 bg-card rounded border border-border text-center text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-heading tracking-wider"
                  >
                    {city}
                  </Link>
                ) : (
                  <span
                    key={city}
                    className="p-3 bg-card rounded border border-border text-center text-sm text-muted-foreground font-heading tracking-wider"
                  >
                    {city}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-4">
              Get Help in {state.name} Today
            </h2>
            <p className="text-muted-foreground mb-4">
              Don't wait for a crisis. Contact Barr Interventions & Consulting today to discuss how we can help your family in {state.name}.
            </p>
            <p className="text-2xl font-heading text-primary tracking-wider">512.402.5991</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other States */}
      <section className="py-12 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl text-primary tracking-wider mb-4">
            Also Serving Nationwide
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherStates.map((s) => (
              <Link
                key={s.slug}
                to={`/locations/${s.slug}`}
                className="text-sm text-primary underline hover:opacity-70 transition-opacity"
              >
                {s.name}
              </Link>
            ))}
            <Link to="/locations" className="text-sm text-primary font-bold underline hover:opacity-70 transition-opacity">
              View All States →
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Drug & Alcohol Intervention Services in ${state.name}`,
            description: state.description,
            provider: {
              "@type": "Organization",
              name: "Barr Interventions & Consulting",
              telephone: "512-402-5991",
              url: "https://barrinterventions.com",
            },
            areaServed: {
              "@type": "State",
              name: state.name,
            },
            serviceType: ["Drug Intervention", "Alcohol Intervention", "Sober Coaching", "K9 Drug Detection", "Sober Transport", "Family Coaching"],
          }),
        }}
      />
    </Layout>
  );
};

export default StatePage;
