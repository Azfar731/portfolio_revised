import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("routes/layout.tsx", [
    route("/blogs", "routes/blogs.tsx"),
    route("/blogs/:slug", "routes/blog.tsx"),
  ]),
] satisfies RouteConfig;
