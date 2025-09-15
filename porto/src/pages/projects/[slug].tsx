import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import Section from "@/components/Section";

type ProjectPageProps = {
  project: Project;
};

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Section title={project.title}>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="relative h-64 md:h-96 card overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-fill"
            />
          </div>

          <p className="text-white/80">{project.summary}</p>

          {project.images?.length ? (
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((src) => (
                <div
                  key={src}
                  className="relative h-48 rounded-xl overflow-hidden border border-white/10"
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}

          {/* Design Process Section */}
          {project.designProcess?.length ? (
            <div className="card p-8 space-y-8">
              <h3 className="text-xl font-semibold">Design Process</h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20"></div>

                <div className="space-y-10">
                  {project.designProcess.map((step, i) => (
                    <div key={i} className="relative flex items-start">
                      {/* Step number circle */}
                      <div className="relative z-10 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                        {i + 1}
                      </div>

                      {/* Step content */}
                      <div className="ml-6 flex-1">
                        <p className="text-white/80 text-base leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="card p-4">
            <h4 className="font-semibold mb-2">Role</h4>
            <p className="text-white/70 text-sm">{project.role}</p>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false, // atau "blocking" kalau mau handle slug dinamis
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};
