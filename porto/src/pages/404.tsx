import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
      <p className="text-white/70 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link className="btn" href="/">Back to Home</Link>
    </main>
  );
}
