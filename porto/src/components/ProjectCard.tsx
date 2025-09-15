import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden group">
      {/* Cover */}
      <div className="relative h-56 bg-black">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="text-xs text-white/60">{project.period}</span>
        </div>

        <p className="text-sm text-white/70 mb-3">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
            {project.role}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.links?.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm underline underline-offset-4 hover:no-underline"
              target={l.href.startsWith("http") ? "_blank" : "_self"}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
