import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import coachingImage from "@/assets/coaching-session.jpg";
import familyImage from "@/assets/family-coaching.jpg";

const Coaching = () => (
  <Layout>
    <Helmet>
      <title>Sober Coaching &amp; Recovery Coaching Services | Barr Interventions</title>
      <meta name="description" content="One-on-one sober coaching to build accountability, develop coping skills, and maintain lasting sobriety. Serving Texas, Oklahoma, and Louisiana." />
    </Helmet>
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-6 text-center">Coaching</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          Barr Interventions & Consulting offers personalized coaching services designed to support individuals in recovery and their families through every stage of the journey.
        </p>

        {/* Sober Coaching */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src={coachingImage} alt="Sober coaching session" className="rounded shadow-lg w-full" loading="lazy" width={1200} height={800} />
          <div>
            <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Sober Coaching</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sober coaching provides one-on-one support for individuals navigating the challenges of early recovery and sustained sobriety. Our coaches meet you where you are—physically and emotionally—to help you build the skills and confidence needed for lasting change.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Accountability and daily structure development</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Relapse prevention strategies and coping skills</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Job search assistance and life skills building</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Fitness, wellness, and healthy lifestyle guidance</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Travel companionship while maintaining sobriety</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Available in-person, by phone, and virtually</li>
            </ul>
          </div>
        </div>

        {/* Family Coaching */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1">
            <img src={familyImage} alt="Family coaching session" className="rounded shadow-lg w-full" loading="lazy" width={1200} height={800} />
          </div>
          <div className="md:order-0">
            <h2 className="font-heading text-3xl text-primary tracking-wider mb-4">Family Coaching</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Addiction doesn't happen in isolation—it impacts the entire family system. Family coaching helps loved ones understand addiction, develop healthy boundaries, and find their own path to healing alongside the individual in recovery.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Education about addiction and the recovery process</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Boundary setting and communication strategies</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Navigating treatment options and logistics</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Emotional support and coping tools for family members</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Guidance through pre- and post-treatment transitions</li>
              <li className="flex gap-2"><span className="text-primary font-bold">•</span> Ongoing family meetings for sustained recovery</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Coaching;
