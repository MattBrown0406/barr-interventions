import Layout from "@/components/Layout";
import katieBarr from "@/assets/katie-barr.jpg";

const About = () => (
  <Layout>
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-6">About</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Barr Interventions & Consulting approaches the journey of recovery with values that are present at every turn in working with individuals and families seeking sobriety in Texas, Oklahoma, and Louisiana.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Recovery and sobriety are not short journeys; they are for life. With a deep commitment to ethics, dignity, respect, and love, Barr provides compassionate intervention and consulting services that make a real difference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded on the belief that every person deserves the opportunity to thrive regardless of the challenges they've faced, Barr Interventions & Consulting works tirelessly to provide hope and effective pathways toward lasting recovery.
          </p>
        </div>
        <div>
          <img
            src={katieBarr}
            alt="Katie Barr, founder of Barr Interventions & Consulting"
            className="rounded shadow-lg w-full max-w-md mx-auto"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary tracking-wider mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          To guide individuals and families through the complexities of addiction with unwavering compassion, 
          ethical practice, and professional expertise. We believe that intervention is about raising the bottom 
          and painting a picture of what sobriety can look like before reaching the natural, negative consequences of the disease.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
