// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Rafli Triatma — UI/UX Designer</title>
        <meta
          name="description"
          content="Portfolio of Rafli Triatma: product design, UI/UX, and design systems."
        />
        <meta property="og:title" content="Rafli Triatma — UI/UX Designer" />
        <meta property="og:description" content="Product design portfolio" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">
              Designing clean, minimal, and premium experiences.
            </h1>
            <p className="text-white/70 mb-6">
              I craft interfaces and systems that feel intuitive and look
              elegant—from mobile apps to data-heavy dashboards.
            </p>
            <div className="flex gap-3">
              <Link href="#projects" className="btn">
                Explore Projects
              </Link>
              <Link href="/resume" className="btn">
                My Experiences
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80 card overflow-hidden">
            <Image
              src="/banner.png"
              alt="Portfolio Preview"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="My Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section title="Capabilities">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "UI Design",
              desc: "Creating design systems, mockups, and prototypes.",
            },
            {
              title: "UX Design",
              desc: "Conducting surveys, usability testing, and synthesis.",
            },
            {
              title: "Wireframing",
              desc: "Designing skeletal frameworks for websites and apps.",
            },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
