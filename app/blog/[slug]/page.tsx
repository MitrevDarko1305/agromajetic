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
      <article className="mx-auto max-w-3xl px-6 py-24">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />
        <h1 className="text-[36px] font-heading font-extrabold text-foreground mb-6">
          {post.title}
        </h1>
        <p className="text-lg text-foreground/70 mb-8">{post.excerpt}</p>
        <div className="text-base leading-8 text-foreground/80 whitespace-pre-line">
          {post.content}
        </div>
      </article>
      <Footer />
    </>
  );
}