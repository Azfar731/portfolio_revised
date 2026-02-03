import type { ArticleInfo } from "~/utils/types";
import type { Route } from "./+types/blogs"
import BlogCard from "~/components/BlogCard";

export async function clientLoader() {
  // const response = await fetch("https://dev.to/api/articles?username=azfar731");
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=azfar731`
    );
    if (!response.ok) {
      throw new Response("Not Found", { status: 404 });
    }
    const articles: ArticleInfo[] = await response.json();
    return { articles };
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Response("Failed to fetch articles list", { status: 500 });
  }
}

export default async function Blogs({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;
  return (
    <div className="w-full flex flex-col px-6 items-center justify-center gap-8 max-md:pt-30 max-tablet:pt-20">
      <h1 className="text-6xl font-bold text-neonGreen">Blogs</h1>
      <p className="text-lg text-gray-400">
      Welcome to the blogs section. I hope you find these posts helpful—feel
      free to leave a comment or review!
      </p>
      <section className="grid grid-cols-1 tablet:grid-cols-3 gap-6 w-full max-w-8xl px-4">
      {
        articles.map(article => {
        return (
          <BlogCard key={article.id} article={article} />
      )
        })
      }
      </section>
    </div>
  );
}
