import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <Layout>
    <Seo
      title="Addiction Intervention Blog | Barr Interventions & Consulting"
      description="Expert insights on drug and alcohol intervention, family support, sober coaching, recovery, and treatment planning from Katie Barr, CIP, LCDCi."
      path="/blog"
    />
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-primary tracking-wider mb-4">
          Resources & Insights
        </h1>
        <p className="text-muted-foreground mb-16 max-w-2xl">
          Education, guidance, and perspective on addiction, intervention, and recovery—for individuals and the families who love them.
        </p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group grid md:grid-cols-[1fr_auto] gap-6 pb-12 border-b border-border last:border-b-0"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-heading tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground tracking-wider mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="hidden md:flex items-center self-center font-heading text-sm tracking-widest text-primary hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
