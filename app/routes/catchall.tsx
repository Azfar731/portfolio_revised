import React from "react";
import ErrorUI from "~/components/ErrorUI";

type NotFoundPageProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  homeHref?: string; // default "/"
  onGoHome?: () => void; // optional override
};

export function clientloader() {
  throw new Response("Page Not Found", { status: 404 });
  //   return null;
}

export default function CatchAll() {
  return <ErrorUI />;
}
