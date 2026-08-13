import { posts } from "../../components/blog-posts/posts";
import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <article className="mx-auto max-w-5xl px-6 lg:px-8 md:py-24 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Sticky image, left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] lg:h-[350px] object-cover"
            />
          </div>

          {/* Text, right, scrolls full length */}
          <div>
            <h1 className="text-[32px] lg:text-[40px] font-heading leading-[1.25] font-extrabold text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-base leading-[1.7] text-foreground/80 mb-8">{post.excerpt}</p>
            <div className="text-base leading-[1.7] text-foreground/80 whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}