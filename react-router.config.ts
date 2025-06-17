import type { Config } from "@react-router/dev/config";

// Async function to get blog slugs
async function getBlogSlugs(): Promise<string[]> {
  try {
    const res = await fetch("https://dev.to/api/articles?username=azfar731");
    if (!res.ok) throw new Error("Failed to fetch articles");
    const data = await res.json();
    return data.map((article: any) => `/blogs/${article.slug}`);
  } catch (err) {
    console.error("Error fetching blog slugs:", err);
    return []; // Return empty if error
  }
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    const blogRoutes = await getBlogSlugs();
    return ["/", "/blogs", ...blogRoutes];
  },
} satisfies Config;
