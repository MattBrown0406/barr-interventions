import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import katieBarr from "@/assets/katie-barr.jpg";
import { Link } from "react-router-dom";

const About = () => (
  <Layout>
    <Helmet>
      <title>About Katie Barr, CIP — Intervention Specialist | Barr Interventions</title>
      <meta name="description" content="Meet Katie Barr, CIP and LCDCi. Professional drug and alcohol interventionist with over a decade of experience serving Texas, Oklahoma, and Louisiana families." />
    </Helmet>

    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-2">Katie Barr</h1>
          <p className="font-heading text-xl text-muted-foreground tracking-wider mb-6">CIP · LCDCi · Board Registered Interventionist</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Katie Barr has spent over a decade working at the intersection of addiction, family pain, and recovery. As a Certified Intervention Professional (CIP) and Licensed Chemical Dependency Counselor Intern (LCDCi), she brings clinical expertise, genuine compassion, and personal understanding to every family she serves.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Based in Texas and serving clients across Oklahoma, Louisiana, and nationwide, Katie specializes in drug and alcohol intervention, sober coaching, family advocacy, and K9 substance detection. Her approach is rooted in the belief that every person — regardless of how far their addiction has progressed — deserves dignity, respect, and a real path forward.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Barr Interventions & Consulting exists because Katie knows firsthand what it looks like when a family reaches the point of not knowing what to do next. That moment of crisis is exactly where she steps in.
          </p>
        </div>
        <div>
          <img
            src={katieBarr}
            alt="Katie Barr, CIP — Founder of Barr Interventions & Consulting"
            className="rounded shadow-lg w-full max-w-md mx-auto"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-6">Why I Do This Work</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Katie's path into intervention work is personal. She began her own recovery journey in 2010, and in that experience — the confusion, the isolation, the moments where the right words from the right person made all the difference — she found her calling.
          </p>
          <p>
            She began working in the substance use treatment field in 2011 and has never looked back. Over the years, she has witnessed what happens when families receive expert guidance at the right moment, and what happens when they don't. That contrast drives everything she does.
          </p>
          <p>
            "Addiction is a family disease," Katie says. "When I work with a family, I'm not just working to get one person into treatment. I'm working to begin the healing of an entire system. That's what intervention, done right, makes possible."
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-8">Credentials & Training</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "CIP", subtitle: "Certified Intervention Professional", desc: "Credential issued by the Association of Intervention Specialists (AIS), the gold standard in professional intervention certification." },
            { title: "LCDCi", subtitle: "Licensed Chemical Dependency Counselor Intern", desc: "Texas state licensure for chemical dependency counseling, demonstrating formal clinical training in substance use disorders." },
            { title: "BRI Trained", subtitle: "Board Registered Interventionist", desc: "Completed training through the Board of Registered Interventionists, covering evidence-based intervention models and family systems." },
            { title: "15+ Years", subtitle: "In the Field", desc: "Over a decade of direct experience in intervention, treatment advocacy, sober coaching, and family systems work." },
          ].map((c, i) => (
            <div key={i} className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-2xl text-primary tracking-wider mb-1">{c.title}</h3>
              <p className="font-heading text-sm text-foreground tracking-wider mb-3">{c.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          To guide individuals and families through the complexities of addiction with unwavering compassion, ethical practice, and professional expertise. We believe that intervention is about raising the bottom — helping someone see the trajectory of their choices before the consequences become irreversible.
        </p>
        <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Talk to Katie Today
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
