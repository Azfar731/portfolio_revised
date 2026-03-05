import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { SpeedInsights } from "@vercel/speed-insights/react";

import type { Route } from "./+types/root";
import "./app.css";
import ErrorUI from "./components/ErrorUI";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/warnes-v29-latin-regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/roboto-v51-latin-regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/roboto-v51-latin-700.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <ErrorUI />;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  } else {
    return (
      <ErrorUI
        title="Internal Server Error"
        message={`An unexpected error occurred.\nTry Reloading the Page.`}
      />
    );
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
