const footerLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-content">
        <a className="brand" href="#home">
          <span className="brand-mark">H</span>
          <span>Shahjahan Hridoy</span>
        </a>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <p>© {new Date().getFullYear()} Shahjahan Hridoy. Built with care.</p>
      </div>
    </footer>
  );
}
