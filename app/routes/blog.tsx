//route for displaying a single blog post

import type { LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/blog";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./blog.css";
import type { Article } from "~/utils/types";
import IconDividerWithAvatar from "~/components/ProfileIcon";

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("Fetching article with slug:", slug);

  try {
    const response = await fetch(
      `https://dev.to/api/articles/azfar731/${slug}`,
    );
    if (!response.ok) {
      throw new Response("Not Found", { status: 404 });
    }
    const article: Article = await response.json();

    if ("error" in article) {
      throw new Response("An error occurred", { status: article.status });
    }

    return { article };
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Response("Failed to fetch article", { status: 500 });
  }
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;
  //   const html = marked(article.body_markdown);

  return (
    <div className="max-w-3xl w-full max-w-[100vw] pt-20 px-4 flex flex-col items-center overflow-x-hidden">
      <header className="py-12 mx-auto flex flex-col items-center gap-8 text-white relative">
        <div className="dot-grid dot-grid-left hidden lg:block"></div>
        <div className="dot-grid dot-grid-right hidden lg:block"></div>

        <img
          src={article.cover_image}
          alt="Package Icon"
          className="max-w-full lg:w-1/2 h-auto"
        />

        <div className="flex items-center uppercase tracking-widest text-gray-400 mb-4 space-x-2">
          <span>{article.tags[0]}</span>
          <span>—</span>
          <span>{article.readable_publish_date}</span>
        </div>

        <h1 className="text-4xl font-bold text-center max-w-3xl">
          {article.title}
        </h1>
      </header>{" "}
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
            {article.body_markdown}
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
