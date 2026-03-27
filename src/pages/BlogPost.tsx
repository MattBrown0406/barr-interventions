import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const post = blogPosts.find((p) => p.slug === postSlug);

  if (!post) return <NotFound />;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <article className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/blog"
              className="text-sm text-primary font-heading tracking-widest hover:opacity-70 transition-opacity mb-6 inline-block"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-heading tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-primary tracking-wider mb-4 leading-tight">
              {post.title}
            </h1>
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

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-secondary/50 rounded-lg text-center">
            <h3 className="font-heading text-xl text-primary tracking-wider mb-3">
              Need Help? We Are Here for You.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              If you or a loved one is struggling with addiction, Barr Interventions & Consulting is available 24/7 to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5124025991"
                className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Call 512.402.5991
              </a>
              <Link
                to="/contact"
                className="inline-block border border-primary text-primary font-heading text-sm tracking-widest px-8 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="font-heading text-xl text-primary tracking-wider mb-6">
                More Resources
              </h3>
              <div className="space-y-6">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="block group"
                  >
                    <span className="text-xs font-heading tracking-widest text-primary uppercase">
                      {p.category}
                    </span>
                    <h4 className="font-heading text-lg text-foreground tracking-wider group-hover:text-primary transition-colors mt-1">
                      {p.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{p.excerpt.slice(0, 120)}…</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "Barr Interventions & Consulting",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default BlogPost;
