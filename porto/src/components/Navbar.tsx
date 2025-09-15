import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight">
          Rafli<span className="text-[var(--accent)]">.</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "text-white/80 hover:text-white transition",
                  pathname === l.href && "text-white"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
