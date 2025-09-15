import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact">
      <p className="text-white/70 mb-6">
        I&apos;m open for full-time roles and selected freelance projects.
      </p>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="card p-6 grid md:grid-cols-2 gap-4"
      >
        <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" name="name" placeholder="Your name" />
        <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3" name="email" type="email" placeholder="Email" />
        <input className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3" name="subject" placeholder="Subject" />
        <textarea className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[140px]" name="message" placeholder="Message" />
        <button className="btn md:col-span-2 justify-center" type="submit">Send</button>
      </form>
    </Section>
  );
}
