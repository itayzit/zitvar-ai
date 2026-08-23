import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] max-w-[700px] mx-auto px-7 pt-24 pb-24">
      <h1
        className="text-[40px] font-extrabold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Page not found<span className="text-accent">.</span>
      </h1>
      <p className="mt-4 text-[16px] leading-relaxed text-secondary">
        This page does not exist. Everything on this site lives on the
        homepage.
      </p>
      <ul className="mt-6 flex flex-col gap-2 text-[15px] font-semibold">
        <li>
          <Link href="/" className="text-accent hover:underline hover:underline-offset-4">
            → Home: projects, content, contact
          </Link>
        </li>
        <li>
          <a href="/llms.txt" className="text-accent hover:underline hover:underline-offset-4">
            → llms.txt: site overview for AI agents
          </a>
        </li>
        <li>
          <a href="/sitemap.xml" className="text-accent hover:underline hover:underline-offset-4">
            → sitemap.xml
          </a>
        </li>
      </ul>
    </main>
  );
}
