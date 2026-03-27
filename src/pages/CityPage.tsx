import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { seoCities } from "@/data/seoCities";
import NotFound from "./NotFound";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = seoCities.find((c) => c.slug === citySlug);

  if (!city) return <NotFound />;

  const stateCities = seoCities.filter((c) => c.state === city.state && c.slug !== city.slug).slice(0, 6);

  return (
    <Layout>
      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary tracking-wider mb-4">
            Drug & Alcohol Intervention in {city.name}, {city.stateAbbr}
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional intervention, sober coaching, and family consulting services in {city.name}, {city.state}.
          </p>
        </div>
      </section>

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
              { title: "Family Liaison", desc: `Ongoing family support, education, and advocacy for ${city.name} families navigating addiction recovery.` },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-card rounded shadow-sm border border-border">
                <h3 className="font-heading text-lg text-primary tracking-wider mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl text-primary tracking-wider">Why Choose Barr Interventions in {city.name}?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Experienced, compassionate intervention professionals</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Ethical, dignified approach rooted in love and respect</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Comprehensive support from intervention through aftercare</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Available 24/7 for crisis situations in {city.name} and surrounding areas</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> In-person, phone, and virtual services available</li>
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
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CityPage;
