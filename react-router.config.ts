import type { Config } from "@react-router/dev/config";
import blogsData from "./app/content/blogs/all.json";
// Async function to get blog slugs
//get blog slugs from /app/content/blogs/all.json

const getBlogSlugs = () => {
  return blogsData.map((article) => `/blogs/${article.slug}`);
};

// const slugs = [
//   "how-i-improved-my-portfolio-performance-with-lighthouse",
//   "creating-a-multi-part-form-easily-with-react-router-no-third-party-libraries",
// ];

// const blogRoutes = getBlogSlugs().map((slug) => `/blogs/${slug}`);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return ["/", "/blogs", ...getBlogSlugs()];
  },
} satisfies Config;
