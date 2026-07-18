import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-pad">
      <div className="container-edi text-center">
        <p className="font-mono text-sm text-signal">404</p>
        <h1 className="mt-2 font-display text-3xl font-bold">This page didn't rank for that query.</h1>
        <p className="mt-3 text-ink/60">The page you're looking for doesn't exist or has moved.</p>
        <Link href="/" className="btn-primary mt-6 inline-flex">Back to homepage</Link>
      </div>
    </div>
  );
}
