import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { seoStates } from "@/data/seoStates";
import { getStateImage } from "@/data/stateImages";

const regions: Record<string, string[]> = {
  "South Central": ["Texas", "Oklahoma", "Louisiana", "Arkansas", "Mississippi", "Alabama", "Tennessee"],
  "West": ["California", "Nevada", "Oregon", "Washington", "Hawaii", "Alaska"],
  "Mountain": ["Colorado", "Utah", "Wyoming", "Montana", "Idaho", "Arizona", "New Mexico"],
  "Midwest": ["Illinois", "Ohio", "Michigan", "Indiana", "Wisconsin", "Minnesota", "Iowa", "Missouri", "Kansas", "Nebraska", "North Dakota", "South Dakota"],
  "Southeast": ["Florida", "Georgia", "South Carolina", "North Carolina", "Virginia", "West Virginia", "Kentucky", "Maryland", "Delaware"],
  "Northeast": ["New York", "Pennsylvania", "Massachusetts", "New Jersey", "Connecticut", "New Hampshire", "Vermont", "Maine", "Rhode Island"],
};

const Locations = () => (
  <Layout>
    <Helmet>
      <title>Intervention Services by Location | Barr Interventions &amp; Consulting</title>
      <meta name="description" content="Barr Interventions provides professional drug and alcohol intervention services across all 50 states. Find your location." />
    </Helmet>
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-4 text-center">
          Service Areas
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Barr Interventions & Consulting provides addiction intervention, sober coaching, and recovery services nationwide. Select a state to learn more.
        </p>

        {Object.entries(regions).map(([region, stateNames]) => (
          <div key={region} className="mb-16">
            <h2 className="font-heading text-2xl text-primary tracking-wider mb-6 border-b border-border pb-2">
              {region}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stateNames.map((name) => {
                const state = seoStates.find((s) => s.name === name);
                if (!state) return null;
                const img = getStateImage(state.slug);
                return (
                  <Link
                    key={state.slug}
                    to={`/locations/${state.slug}`}
                    className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
                  >
                    <div className="aspect-[3/2]">
                      <img
                        src={img}
                        alt={state.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={384}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                        <span className="font-heading text-lg tracking-wider font-bold">{state.name}</span>
                        <span className="text-xs opacity-80">{state.abbr}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Locations;
