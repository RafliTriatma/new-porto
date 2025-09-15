import Image from "next/image";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About Me">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="relative h-48 w-48 rounded-2xl overflow-hidden border border-white/10">
          <Image src="/profile.png" alt="Rafli" fill className="object-cover" />
        </div>
        <div className="md:col-span-2 space-y-4 text-white/80">
          <p>
            Hi, I am Rafli Triatma.
          </p>
          <p>
            Working as an UI/UX Designer focused on creating user-centered digital experiences. With experience designing mobile apps, websites, and dashboards, 
            I have enhanced usability and accessibility to strengthen user engagement. Additionally, I possess strong technical skills in UI/UX tools and a deep 
            understanding of iterative design processes. I am eager to combine my design expertise with my technical skills in JavaScript to contribute to a team 
            that values innovation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Technical Skill:
              <p>
                Design : Wireframing, Prototyping, User Research, Usability Testing, Design System, UI Design, UX Design
              </p>
              <p>
                Programming Languange : HTML, CSS, Java Script, Python
              </p>
              <p>
                Database Management : PostgreSQL
              </p>
              <p>
                Tools : Figma, Adobe Photoshop, Adobe Illustrator, Visual Studio Code, Cursor, Postman
              </p>
            </li>
            <li>
              Soft Skills: Communication, Teamwork
            </li>
            <li>
              Language: Indonesian, English
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
