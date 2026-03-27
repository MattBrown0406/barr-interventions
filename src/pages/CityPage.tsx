import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { seoCities } from "@/data/seoCities";
import { seoStates } from "@/data/seoStates";
import { getStateImage } from "@/data/stateImages";
import NotFound from "./NotFound";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = seoCities.find((c) => c.slug === citySlug);

  if (!city) return <NotFound />;

  const parentState = seoStates.find((s) => s.name === city.state);
  const heroImage = parentState ? getStateImage(parentState.slug) : "";
  const stateCities = seoCities.filter((c) => c.state === city.state && c.slug !== city.slug).slice(0, 6);

  return (
    <Layout>
      <Helmet>
        <title>Drug &amp; Alcohol Intervention in {city.name}, {city.stateAbbr} | Barr Interventions</title>
        <meta name="description" content={`Professional intervention and sober coaching in ${city.name}, ${city.state}. Katie Barr, CIP, provides compassionate addiction intervention services. Call 512.402.5991.`} />
      </Helmet>
      {/* Hero with state image */}
      {heroImage && (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt={`${city.name}, ${city.state}`}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative text-center text-primary-foreground px-6 animate-fade-in">
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-wider mb-2">
              {city.name}, {city.stateAbbr}
            </h1>
            <p className="text-base md:text-lg max-w-xl mx-auto opacity-90">
              Drug & Alcohol Intervention Services
            </p>
          </div>
        </section>
      )}

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Barr Interventions & Consulting proudly serves {city.name}, {city.description}. If you or a loved one in {city.name} is struggling with drug or alcohol addiction, our team is here to help with compassionate, professional intervention and consulting services.
          </p>

          <h2 className="font-heading text-2xl text-primary tracking-wider">Services in {city.name}</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Intervention", desc: `Professional drug and alcohol interventions in ${city.name}, including invitational and surprise styles tailored to each family's needs.` },
              { title: "Sober Coaching", desc: `One-on-one sober coaching to help ${city.name} residents build accountability, develop coping skills, and maintain lasting sobriety.` },
              { title: "Family Coaching", desc: `Helping families in ${city.name} understand addiction, set healthy boundaries, and navigate the recovery process together.` },
              { title: "Sober Transport", desc: `Safe, reliable sober transport services to and from treatment facilities serving the ${city.name} area.` },
              { title: "Case Management", desc: `Comprehensive case management including treatment vetting, intake coordination, and discharge planning in ${city.name}.` },
              { title: "K9 Detection", desc: `Professional K9 drug detection sweeps for homes, businesses, and treatment provider facilities in ${city.name}.` },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-card rounded-lg shadow-sm border border-border">
                <h3 className="font-heading text-lg text-primary tracking-wider mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl text-primary tracking-wider">Why Choose Barr Interventions in {city.name}?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Experienced, compassionate intervention professionals</li>
            <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Ethical, dignified approach rooted in love and respect</li>
            <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Comprehensive support from intervention through aftercare</li>
            <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Available 24/7 for crisis situations in {city.name} and surrounding areas</li>
            <li className="flex gap-2"><span className="text-primary font-bold">✓</span> In-person, phone, and virtual services available</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-4">
              Get Help in {city.name} Today
            </h2>
            <p className="text-muted-foreground mb-4">
              Don't wait for a crisis. Contact Barr Interventions & Consulting today to discuss how we can help your family in {city.name}.
            </p>
            <p className="text-2xl font-heading text-primary tracking-wider">512.402.5991</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {stateCities.length > 0 && (
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-xl text-primary tracking-wider mb-4">
              Also Serving in {city.state}
            </h2>
            <div className="flex flex-wrap gap-3">
              {stateCities.map((c) => (
                <Link key={c.slug} to={`/services/${c.slug}`} className="text-sm text-primary underline hover:opacity-70 transition-opacity">
                  {c.name}, {c.stateAbbr}
                </Link>
              ))}
              {parentState && (
                <Link to={`/locations/${parentState.slug}`} className="text-sm text-primary font-bold underline hover:opacity-70 transition-opacity">
                  All {city.state} Services →
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Drug & Alcohol Intervention Services in ${city.name}, ${city.stateAbbr}`,
            description: `Professional intervention and sober coaching in ${city.name}, ${city.state}.`,
            provider: {
              "@type": "Organization",
              name: "Barr Interventions & Consulting",
              telephone: "512-402-5991",
              url: "https://barrinterventions.com",
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: {
                "@type": "State",
                name: city.state,
              },
            },
            serviceType: ["Drug Intervention", "Alcohol Intervention", "Sober Coaching", "K9 Drug Detection", "Sober Transport", "Family Coaching"],
          }),
        }}
      />
    </Layout>
  );
};

export default CityPage;
