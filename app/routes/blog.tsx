// route for displaying a single self-hosted blog post
import type { Route } from "./+types/blog";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./blog.css";
import type { Article } from "~/utils/types";
import IconDividerWithAvatar from "~/components/ProfileIcon";

type BlogIndexArticle = {
  title: string;
  description: string;
  slug: string;
  cover_image: string;
  base_images_path: string;
  path: string;
  url?: string;
  canonical_url?: string;
  tag_list: string[];
  readable_publish_date: string;
};

// Load all local markdown files as raw text.
// File name becomes the blog slug, e.g. app/content/blogs/my-post.md -> my-post
const blogFiles = import.meta.glob("/app/content/blogs/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

// Load the blog index JSON once
const allJsonModules = import.meta.glob("/app/content/blogs/all.json", {
  import: "default",
  eager: true,
}) as Record<string, BlogIndexArticle[]>;

const allArticles = Object.values(allJsonModules)[0] ?? [];


export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;

  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  // Find article metadata in all.json
  const matchedArticle = allArticles.find((article) => article.slug === slug);

  if (!matchedArticle) {
    throw new Response("Not Found", { status: 404 });
  }

  // Find the markdown file whose filename matches the route slug
  const matchedEntry = Object.entries(blogFiles).find(([filePath]) =>
    filePath.endsWith(`/${slug}.md`),
  );

  if (!matchedEntry) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const [, loadMarkdown] = matchedEntry;
    const rawMarkdown = await loadMarkdown();

    // Keeps compatibility if your markdown files still contain frontmatter
   

    const article: Article = {
      title: matchedArticle.title,
      description: matchedArticle.description,
      cover_image: matchedArticle.cover_image,
      base_images_path: matchedArticle.base_images_path,
      tag_list: matchedArticle.tag_list,
      readable_publish_date: matchedArticle.readable_publish_date,
      canonical_url: matchedArticle.canonical_url,
      slug: matchedArticle.slug,
      body_markdown: rawMarkdown,
    };

    return { article };
  } catch (error) {
    if (error instanceof Response) throw error;
    throw new Response("Failed to load article", { status: 500 });
  }
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;
  const [isCoverImageLoaded, setIsCoverImageLoaded] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const processedContent = article.body_markdown.replaceAll(
    "{{base}}",
    article.base_images_path,
  );

  // for smoothly showing the cover image once it's loaded, we track its loading state and apply a fade-in effect
  useEffect(() => {
    setIsCoverImageLoaded(false);

    const img = imgRef.current;
    if (img?.complete) {
      setIsCoverImageLoaded(true);
    }
  }, [article.cover_image]);

  return (
    <div className="max-w-3xl w-full max-w-[100vw] pt-20 px-4 flex flex-col items-center overflow-x-hidden select-text">
      <section className="py-12 mx-auto flex flex-col items-center gap-8 text-white relative">
        <div className="dot-grid dot-grid-left hidden lg:block"></div>
        <div className="dot-grid dot-grid-right hidden lg:block"></div>

        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[2/1] overflow-hidden rounded-md bg-gray-700/20">
            {!isCoverImageLoaded && (
              <div
                className="absolute inset-0 animate-pulse bg-gray-700/50"
                aria-hidden="true"
              />
            )}

            <img
              ref={imgRef}
              src={article.cover_image}
              alt={`${article.title} cover`}
              fetchPriority="high"
              className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-300 ${
                isCoverImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsCoverImageLoaded(true)}
              onError={() => setIsCoverImageLoaded(true)}
            />
          </div>
        </div>

        <div className="flex items-center uppercase tracking-widest text-gray-400 mb-4 space-x-2">
          <span>{article.tag_list?.[0] ?? "blog"}</span>
          <span>—</span>
          <span>{article.readable_publish_date}</span>
        </div>

        <h1 className="text-4xl font-bold text-center max-w-3xl">
          {article.title}
        </h1>
      </section>

      <IconDividerWithAvatar />

      <div id="article-body" className="w-full max-w-3xl mx-auto text-white">
        <div className="px-4 py-8 space-y-4 leading-relaxed text-lg prose prose-invert">
          <Markdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl mt-16 mb-6 text-neonGreen font-semibold"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl text-h3Color font-semibold mt-12 mb-4"
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <h4
                  className="text-xl text-h4Color font-semibold mt-4 mb-2"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 text-lg leading-[32px]" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc ml-6 mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal ml-6 mb-4" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-cyan-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              img: ({ node, ...props }) => (
                <img {...props} loading="lazy" fetchPriority="low" />
              ),
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {processedContent}
          </Markdown>
        </div>
      </div>

      <section className="text-center py-8 px-6 my-8 bg-gray-800 border-t border-gray-700 rounded-full border-opacity-40">
        <h3 className="text-2xl text-[#14fdb1] font-semibold mb-4">
          Thank you for reading ❤️
        </h3>
        <p className="text-gray-300 text-base max-w-xl mx-auto">
          I appreciate you taking the time to read this blog. If you have any
          questions or would like to discuss anything further, please feel free
          to connect using the links below.
        </p>
      </section>
    </div>
  );
}
