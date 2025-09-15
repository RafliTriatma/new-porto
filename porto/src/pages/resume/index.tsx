import Section from "@/components/Section";

export default function ResumePage() {
  return (
    <Section title="Resume">
      <p className="text-white/70 mb-6">
        You can download a concise PDF resume or read the summary below.
      </p>
      <a className="btn mb-10 inline-block" href="/New CV Rafli Triatma(2).pdf" download>Download PDF</a>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-3">Experience</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><strong>PT Indo Artha Teknologi - UI/UX Designer</strong> (Aug 2022-May 2024) 
                <p>
                  - Conduct in-depth research to understand client needs and preferences, ensuring the creation of effective design solutions.
                </p>
                <p>
                  - Design intuitive, modern, and responsive user interfaces (UI) for mobile applications, websites, and web dashboards.
                </p>
                <p>
                  - Optimize user experience (UX) through a data-driven approach and the latest design trends.
                </p>
                <p>
                  - Collaborate with developers and stakeholders to ensure the implemented design aligns with the vision and business objectives.
                </p>
              <br />
            </li>

            <li><strong>PT Pinjaman Kemakmuran Rakyat - UI/UX Designer</strong> (Aug 2022-May 2024) 
              <p>
                - Conduct in-depth research to understand client needs and preferences, ensuring the creation of innovative and targeted design solutions.
              </p>
              <p>
                - Design modern, responsive, and intuitive user interfaces (UI) for mobile applications, websites, and web dashboards.
              </p>
              <p>
                - Manage and create visual content for social media, specifically for celebrating major events in Indonesia, to enhance engagement and brand awareness.
              </p>
              <p>
                - Develop compelling and functional app design samples for publication on the Google Play Store.
              </p>
            <br />
            </li>

            <li><strong>PT Clevara Inovasi Digital - Intern UI/UX Designer</strong> (Oct 2021-Jan 2022) 
              <p>
                - Doing research on client's needs.
              </p>
              <p>
                - Developed UI designs project by working directly with Project Manager and Personal Clients to coordinate and evaluate concept ideas of creative ; Wireframe, Mockups, Prototyping
              </p>

            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-3">Skills</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><strong>Technical Skill:</strong>
              <p>
               <strong>Design :</strong> Wireframing, Prototyping, User Research, Usability Testing, Design System, UI Design, UX Design
              </p>
              <p>
                <strong> Programming Languange :</strong> HTML, CSS, Java Script, Python
              </p>
              <p>
                <strong>Database Management :</strong> PostgreSQL
              </p>
              <p>
                <strong>Tools :</strong> Figma, Adobe Photoshop, Adobe Illustrator, Visual Studio Code, Cursor, Postman
              </p>
            </li>
            <li>
              <strong> Soft Skills:</strong> Communication, Teamwork
            </li>
            <li>
              <strong>Language:</strong> Indonesian, English
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
