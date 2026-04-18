import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Seo, { organizationSchema } from "@/components/Seo";
import { seoStates, stateCitiesMap } from "@/data/seoStates";
import { seoCities } from "@/data/seoCities";
import { getStateImage } from "@/data/stateImages";
import NotFound from "./NotFound";

type PriorityStateContent = {
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  whyHeading: string;
  whyPoints: string[];
  localHeading: string;
  localParagraphs: string[];
  trustHeading: string;
  trustPoints: string[];
  ctaHeading: string;
  ctaText: string;
  nearbyStates: string[];
  faq: { question: string; answer: string }[];
};

const priorityStateContent: Record<string, PriorityStateContent> = {
  texas: {
    seoTitle: "Texas Drug & Alcohol Intervention Services | Barr Interventions",
    metaDescription:
      "Texas addiction intervention, sober coaching, family consulting, sober transport, and K9 detection. Call Katie Barr, CIP, at 817.739.1349.",
    heroSubtitle: "Texas-based intervention, transport, and family support services",
    intro:
      "Barr Interventions is based in Texas and works directly with families across Dallas-Fort Worth, Houston, Austin, San Antonio, East Texas, West Texas, and the Hill Country. We help families interrupt active addiction, prepare for treatment, and create a safer, more structured path forward with calm, practical guidance.",
    whyHeading: "Why Texas families call Barr Interventions",
    whyPoints: [
      "Texas-based support with fast coordination for local and statewide cases",
      "Led by Katie Barr, CIP, with a relationship-centered and ethically grounded approach",
      "Intervention planning, treatment placement support, sober transport, and aftercare coordination",
      "Experience helping families manage high-conflict, high-risk, and crisis-driven situations",
      "K9 substance detection available for Texas homes, properties, and family safety planning",
      "Virtual and in-person options depending on urgency, logistics, and clinical fit",
    ],
    localHeading: "Addiction intervention support across Texas",
    localParagraphs: [
      "Texas families often face long travel distances, fragmented treatment options, and the challenge of coordinating loved ones across multiple cities or regions. We help simplify that process, whether the situation is centered in Fort Worth, Dallas, Houston, Austin, San Antonio, Lubbock, or a smaller community where local resources may be limited.",
      "Our work often includes pre-intervention family coaching, treatment vetting, transport planning, communication strategy, and ongoing accountability after placement. Because Barr Interventions is rooted in Texas, we can offer stronger local context while still coordinating with trusted treatment resources nationwide when the best fit is out of state.",
    ],
    trustHeading: "What families can expect",
    trustPoints: [
      "Confidential, judgment-free guidance from the first call",
      "A clear recommendation on whether intervention, coaching, transport, or monitoring is the right next step",
      "Support navigating treatment admissions, insurance questions, and timing",
      "Practical help aligning family members around boundaries, language, and follow-through",
    ],
    ctaHeading: "Talk with a Texas intervention professional today",
    ctaText:
      "If your family is dealing with addiction, relapse, or treatment resistance in Texas, we can help you assess the situation and map out the next best step quickly.",
    nearbyStates: ["oklahoma", "louisiana", "new-mexico", "arkansas"],
    faq: [
      {
        question: "Do you provide intervention services throughout Texas?",
        answer:
          "Yes. We support families across major metros and smaller communities statewide, with a mix of in-person and virtual planning depending on the case.",
      },
      {
        question: "Can you help with treatment placement after a Texas intervention?",
        answer:
          "Yes. We help families evaluate treatment options, coordinate admissions, and plan transport and next-step logistics after an intervention.",
      },
      {
        question: "Is K9 substance detection available in Texas?",
        answer:
          "Yes. Barr Interventions offers K9 detection services in Texas as part of broader family safety and accountability planning.",
      },
    ],
  },
  oklahoma: {
    seoTitle: "Oklahoma Intervention Services | Drug & Alcohol Help for Families",
    metaDescription:
      "Oklahoma drug and alcohol intervention services with family coaching, sober transport, and treatment coordination. Call Barr Interventions at 817.739.1349.",
    heroSubtitle: "Intervention and family recovery support for Oklahoma families",
    intro:
      "Barr Interventions works with families across Oklahoma who need clear, compassionate help when addiction, relapse, or treatment refusal has taken over the home. From Oklahoma City and Tulsa to Norman, Edmond, and Lawton, we help families move from chaos to a real plan.",
    whyHeading: "Why Oklahoma is a priority service area",
    whyPoints: [
      "Close regional access from Texas for faster coordination and travel",
      "Support for families navigating alcohol, opioid, meth, and polysubstance concerns",
      "Intervention planning paired with sober transport and treatment placement guidance",
      "Strong fit for families who need structure without shame or unnecessary escalation",
      "Virtual family coaching available before and after placement",
      "Practical support for cross-state care planning when Texas treatment options are the best fit",
    ],
    localHeading: "Regional support for Oklahoma intervention cases",
    localParagraphs: [
      "Oklahoma families often need a partner who can move quickly, especially when substance use has already affected employment, parenting, legal exposure, or physical safety. We help families prepare for the conversation, decide who should be involved, and align on the next step before the situation deteriorates further.",
      "Because of our Texas base, Oklahoma is one of the closest and most practical out-of-state service areas for Barr Interventions. That proximity helps with rapid deployment, transport logistics, and coordination with treatment programs in either Oklahoma or Texas depending on clinical fit.",
    ],
    trustHeading: "How we help Oklahoma families move forward",
    trustPoints: [
      "Calm strategy for families facing manipulation, denial, and relapse cycles",
      "Help choosing between formal intervention, family coaching, or immediate transport",
      "Clear guidance around boundaries, enabling, and follow-through after the call",
      "A relationship-first approach that protects dignity while still creating accountability",
    ],
    ctaHeading: "Need intervention help in Oklahoma?",
    ctaText:
      "If your loved one is refusing help in Oklahoma, contact Barr Interventions for a practical assessment and next-step plan.",
    nearbyStates: ["texas", "arkansas", "new-mexico", "louisiana"],
    faq: [
      {
        question: "Do you work with families in Oklahoma City and Tulsa?",
        answer:
          "Yes. We support families in Oklahoma City, Tulsa, Norman, Edmond, Lawton, and communities throughout Oklahoma.",
      },
      {
        question: "Can you transport someone from Oklahoma to treatment?",
        answer:
          "Yes. When appropriate, we can help coordinate sober transport and admission logistics to treatment in Oklahoma, Texas, or another best-fit program.",
      },
      {
        question: "Is virtual coaching available for Oklahoma families?",
        answer:
          "Yes. Many Oklahoma families begin with virtual family coaching before moving into a formal intervention or placement plan.",
      },
    ],
  },
  louisiana: {
    seoTitle: "Louisiana Addiction Intervention Services | Barr Interventions",
    metaDescription:
      "Louisiana intervention services for addiction, relapse, and family crisis. Barr Interventions provides coaching, transport, and treatment coordination. 817.739.1349.",
    heroSubtitle: "Intervention support for Louisiana families in crisis",
    intro:
      "Barr Interventions supports Louisiana families dealing with addiction, relapse, and escalating family crisis. We work with clients in New Orleans, Baton Rouge, Shreveport, Lafayette, Lake Charles, and surrounding areas to create a structured path toward treatment and recovery.",
    whyHeading: "Why Louisiana families choose Barr Interventions",
    whyPoints: [
      "Close coordination from a Texas-based team familiar with regional logistics",
      "Support for urgent intervention cases involving relapse, treatment refusal, or family burnout",
      "Family coaching that helps loved ones stop enabling and communicate more effectively",
      "Sober transport and admission coordination when quick placement is needed",
      "Nationwide treatment matching when the right clinical fit is outside Louisiana",
      "A compassionate, direct style that stays grounded in dignity and accountability",
    ],
    localHeading: "Helping Louisiana families create a safer next step",
    localParagraphs: [
      "Families in Louisiana are often balancing acute stress, secrecy, and repeated false starts before they reach out for help. We step in with a process that reduces chaos, clarifies options, and helps family members align around one message and one plan.",
      "Louisiana is also a practical regional service area for Barr Interventions because travel and treatment coordination can often be handled quickly from Texas. That makes it easier to support both intervention planning and immediate next steps when time matters.",
    ],
    trustHeading: "What makes our approach different",
    trustPoints: [
      "We do not use humiliation or confrontation as a shortcut",
      "We help families prepare before the intervention, not just show up on the day",
      "We stay involved through placement, transport, and early stabilization",
      "We tailor recommendations to the real level of risk, resistance, and family capacity",
    ],
    ctaHeading: "Speak with us about a Louisiana intervention",
    ctaText:
      "If addiction is destabilizing your family in Louisiana, we can help you figure out the safest and most effective next move.",
    nearbyStates: ["texas", "arkansas", "oklahoma", "new-mexico"],
    faq: [
      {
        question: "Do you serve New Orleans and Baton Rouge?",
        answer:
          "Yes. We support families in New Orleans, Baton Rouge, Shreveport, Lafayette, Lake Charles, and communities throughout Louisiana.",
      },
      {
        question: "Can you help if our loved one has already failed treatment before?",
        answer:
          "Yes. Many families call us after relapse or multiple prior treatment attempts. We help reassess the situation and build a more realistic next-step plan.",
      },
      {
        question: "Do you only offer formal interventions in Louisiana?",
        answer:
          "No. Depending on the situation, we may recommend family coaching, transport, monitoring, or treatment coordination instead of a traditional intervention.",
      },
    ],
  },
  "new-mexico": {
    seoTitle: "New Mexico Drug & Alcohol Intervention Services | Barr Interventions",
    metaDescription:
      "New Mexico intervention services with family coaching, sober transport, and treatment planning. Barr Interventions helps families statewide. 817.739.1349.",
    heroSubtitle: "Practical addiction intervention support for New Mexico families",
    intro:
      "Barr Interventions helps New Mexico families respond when addiction has reached a breaking point. We work with families in Albuquerque, Santa Fe, Las Cruces, and other communities that need experienced guidance, fast treatment coordination, and a plan built around safety and follow-through.",
    whyHeading: "Why New Mexico families work with us",
    whyPoints: [
      "Regional access from Texas with strong support for cross-state logistics",
      "Help for families dealing with isolation, relapse, and limited local treatment options",
      "Intervention, sober transport, and case planning tailored to the actual level of risk",
      "Support choosing local care versus a stronger out-of-state placement",
      "Family coaching that improves alignment, boundaries, and post-treatment follow-through",
      "Direct, compassionate communication without performative confrontation",
    ],
    localHeading: "A stronger plan for New Mexico intervention cases",
    localParagraphs: [
      "In New Mexico, families may have fewer nearby treatment resources and longer travel considerations than they would in larger metro-heavy states. We help evaluate whether local placement is realistic or whether a program in Texas or another market is a better fit for structure, safety, and outcomes.",
      "We also help families prepare for the emotional side of the process, including what to say, how to manage resistance, and how to stop the patterns that keep the crisis cycling. The goal is not just getting a yes, but creating conditions that support meaningful change.",
    ],
    trustHeading: "What our process includes",
    trustPoints: [
      "Assessment of urgency, resistance level, and family dynamics",
      "A realistic recommendation for intervention, transport, coaching, or placement",
      "Hands-on support with admissions and timing when treatment is the right move",
      "Continued family guidance after the initial crisis call",
    ],
    ctaHeading: "Get help for a loved one in New Mexico",
    ctaText:
      "If your family is facing addiction, treatment refusal, or relapse in New Mexico, contact Barr Interventions for strategic next-step support.",
    nearbyStates: ["texas", "oklahoma", "arizona", "colorado"],
    faq: [
      {
        question: "Do you help families outside Albuquerque and Santa Fe?",
        answer:
          "Yes. We work with families statewide, including smaller communities where treatment options and local support may be more limited.",
      },
      {
        question: "Can you help us find treatment outside New Mexico?",
        answer:
          "Yes. We regularly help families compare local options with out-of-state treatment when better clinical fit or structure is needed.",
      },
      {
        question: "Do you offer both intervention and family coaching in New Mexico?",
        answer:
          "Yes. We tailor the recommendation to the situation, which may include coaching, intervention, transport, or treatment coordination.",
      },
    ],
  },
  arkansas: {
    seoTitle: "Arkansas Intervention Services for Addiction | Barr Interventions",
    metaDescription:
      "Arkansas drug and alcohol intervention services, family coaching, sober transport, and treatment coordination from Barr Interventions. Call 817.739.1349.",
    heroSubtitle: "Compassionate intervention and recovery guidance for Arkansas families",
    intro:
      "Barr Interventions works with Arkansas families who need experienced help navigating addiction, relapse, and treatment resistance. We support cases across Little Rock, Fayetteville, Fort Smith, Hot Springs, and surrounding communities with calm planning and decisive next steps.",
    whyHeading: "Why Arkansas families reach out",
    whyPoints: [
      "Regional service area with practical access from Texas",
      "Help for families stuck in repeated cycles of crisis, promises, and relapse",
      "Intervention strategy paired with treatment placement and sober transport support",
      "Coaching for parents, spouses, and siblings who need alignment and boundaries",
      "Flexible support for urban and smaller-market cases across Arkansas",
      "A trust-based approach that balances empathy with accountability",
    ],
    localHeading: "Intervention planning for Arkansas families",
    localParagraphs: [
      "Arkansas families often call when things have escalated enough that waiting is no longer safe, but there is still confusion about whether a formal intervention is the right move. We help assess the situation, organize the family, and create a plan that matches the real level of urgency.",
      "Because Arkansas is close to our Texas base, we can often support intervention logistics, transport, and treatment planning efficiently while also helping families evaluate whether in-state or out-of-state treatment is the better fit.",
    ],
    trustHeading: "What families appreciate about our work",
    trustPoints: [
      "Straightforward recommendations without pressure or scare tactics",
      "Support before, during, and after the intervention decision point",
      "Help managing communication, leverage, and family consistency",
      "Focused guidance designed to improve real conversion into treatment",
    ],
    ctaHeading: "Need help with an Arkansas intervention case?",
    ctaText:
      "Talk with Barr Interventions if your loved one in Arkansas is refusing treatment, relapsing, or pulling the family deeper into crisis.",
    nearbyStates: ["texas", "oklahoma", "louisiana", "tennessee"],
    faq: [
      {
        question: "Do you serve Little Rock and Northwest Arkansas?",
        answer:
          "Yes. We help families in Little Rock, Fayetteville, Fort Smith, Hot Springs, and communities across Arkansas.",
      },
      {
        question: "Can you help us decide whether we need a formal intervention?",
        answer:
          "Yes. Part of our process is assessing whether a structured intervention, family coaching, transport, or another strategy is the best next step.",
      },
      {
        question: "Do you coordinate treatment placement for Arkansas clients?",
        answer:
          "Yes. We help families evaluate programs, manage admissions, and coordinate transport when treatment is the right move.",
      },
    ],
  },
};

const StatePage = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const state = seoStates.find((s) => s.slug === stateSlug);

  if (!state) return <NotFound />;

  const heroImage = getStateImage(state.slug);
  const cities = stateCitiesMap[state.name] || [];
  const linkedCities = seoCities.filter((c) => c.state === state.name);
  const customContent = priorityStateContent[state.slug];
  const nearbyStateLinks = (customContent?.nearbyStates || [])
    .map((slug) => seoStates.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherStates = seoStates
    .filter((s) => s.slug !== state.slug && !nearbyStateLinks.some((nearby) => nearby.slug === s.slug))
    .slice(0, 8);

  const services = [
    { title: "Intervention", desc: `Professional drug and alcohol interventions in ${state.name}, including invitational and surprise styles tailored to each family's unique situation.`, icon: "🤝" },
    { title: "Sober Coaching", desc: `One-on-one sober coaching to help ${state.name} residents build accountability, develop coping skills, and maintain lasting sobriety.`, icon: "🧭" },
    { title: "Family Coaching", desc: `Helping families in ${state.name} understand addiction, set healthy boundaries, and navigate the recovery process together.`, icon: "👨‍👩‍👧‍👦" },
    { title: "Sober Transport", desc: `Safe, reliable sober transport services to and from treatment facilities serving ${state.name}.`, icon: "✈️" },
    { title: "Case Management", desc: `Comprehensive case management including treatment vetting, intake coordination, and discharge planning in ${state.name}.`, icon: "📋" },
    { title: "K9 Substance Detection", desc: `Professional K9 drug detection sweeps for homes, businesses, and treatment facilities across ${state.name}.`, icon: "🐕" },
  ];

  const pageTitle = customContent?.seoTitle || `Drug & Alcohol Intervention in ${state.name} | Barr Interventions & Consulting`;
  const metaDescription = customContent?.metaDescription || `${state.description} Call Katie Barr, CIP, at 817.739.1349 for professional intervention, sober coaching, and family support.`;
  const intro = customContent?.intro || state.description;
  const whyHeading = customContent?.whyHeading || `Why Choose Barr Interventions in ${state.name}?`;
  const whyPoints = customContent?.whyPoints || [
    "Experienced, compassionate intervention professionals",
    "Ethical, dignified approach rooted in love and respect",
    "Comprehensive support from intervention through aftercare",
    "Available 24/7 for crisis situations",
    "In-person, phone, and virtual services available",
    "Certified K9 substance detection services",
  ];
  const serviceSchemaDescription = customContent?.intro || state.description;
  const faqSchema = customContent?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: customContent.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <Layout>
      <Seo
        title={pageTitle}
        description={metaDescription}
        path={`/locations/${state.slug}`}
        schema={[
          organizationSchema,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Drug & Alcohol Intervention Services in ${state.name}`,
            description: serviceSchemaDescription,
            provider: organizationSchema,
            areaServed: {
              "@type": "State",
              name: state.name,
            },
            serviceType: ["Drug Intervention", "Alcohol Intervention", "Sober Coaching", "K9 Drug Detection", "Sober Transport", "Family Coaching"],
          },
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
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
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
            {customContent?.heroSubtitle || "Addiction Intervention & Recovery Services"}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {intro}
          </p>
        </div>
      </section>

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

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-8">
            {whyHeading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyPoints.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {customContent ? (
        <section className="py-16 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-6">
                {customContent.localHeading}
              </h2>
              <div className="space-y-4">
                {customContent.localParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <h3 className="font-heading text-xl text-primary tracking-wider mb-4">
                {customContent.trustHeading}
              </h3>
              <div className="space-y-4">
                {customContent.trustPoints.map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <span className="text-primary font-bold text-lg mt-0.5">•</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

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

      {nearbyStateLinks.length > 0 ? (
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-4">
              Nearby service areas families also ask about
            </h2>
            <p className="text-muted-foreground mb-6">
              If your loved one is near a state line or your family is coordinating care across the region, these nearby service pages may also help.
            </p>
            <div className="flex flex-wrap gap-3">
              {nearbyStateLinks.map((nearby) => (
                <Link
                  key={nearby.slug}
                  to={`/locations/${nearby.slug}`}
                  className="text-sm text-primary underline hover:opacity-70 transition-opacity"
                >
                  {nearby.name} intervention services
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {customContent?.faq?.length ? (
        <section className="py-16 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wider mb-8">
              Frequently asked questions about {state.name} intervention services
            </h2>
            <div className="space-y-6">
              {customContent.faq.map((item) => (
                <div key={item.question} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading text-lg text-primary tracking-wider mb-2">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-4">
              {customContent?.ctaHeading || `Get Help in ${state.name} Today`}
            </h2>
            <p className="text-muted-foreground mb-4">
              {customContent?.ctaText || `Don't wait for a crisis. Contact Barr Interventions & Consulting today to discuss how we can help your family in ${state.name}.`}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Call or text</p>
            <p className="text-2xl font-heading text-primary tracking-wider">817.739.1349</p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Led by Katie Barr, CIP</p>
              <p>Intervention, sober coaching, family consulting, transport, and K9 detection</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

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
    </Layout>
  );
};

export default StatePage;
