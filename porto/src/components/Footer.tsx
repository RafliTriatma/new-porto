export default function Footer() {
  return (
    <footer className="container py-12 text-sm text-white/60">
      <div className="flex items-center justify-between">
        <p>© {new Date().getFullYear()} Rafli Triatma</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/rafli-triatma/" target="_blank" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/RafliTriatma/" target="_blank" className="hover:text-white">GitHub</a>
          {/* <a href="https://dribbble.com/" target="_blank" className="hover:text-white">Dribbble</a> */}
        </div>
      </div>
    </footer>
  );
}
