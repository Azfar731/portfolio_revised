type NotFoundPageProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  homeHref?: string; // default "/"
  onGoHome?: () => void; // optional override
};

export default function ErrorUI({
  title = "Page Not Found",
  message = "The page you are looking for doesn't exist\nor has been moved",
  buttonText = "Go Home",
  homeHref = "/",
  onGoHome,
}: NotFoundPageProps) {
  const handleGoHome = () => {
    if (onGoHome) return onGoHome();
    window.location.assign(homeHref);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      {/* subtle center glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_55%)]" />

      <div className="relative flex min-h-dvh items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-3 whitespace-pre-line text-sm text-white/70 sm:text-base">
            {message}
          </p>

          <button
            type="button"
            onClick={handleGoHome}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-12 py-3 text-sm font-medium text-black shadow-[0_10px_45px_rgba(16,185,129,0.35)] transition hover:brightness-105 hover:shadow-[0_10px_60px_rgba(16,185,129,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </main>
  );
}
