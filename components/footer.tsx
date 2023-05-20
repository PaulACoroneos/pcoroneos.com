const FOOTER_LINKS = [
  { href: "https://github.com/PaulACoroneos", label: "Github" },
  { href: "https://twitter.com/pacman326", label: "Twitter" },
  { href: "https://www.linkedin.com/in/paulacoroneos/", label: "LinkedIn" },
  { href: "https://mstdn.social/@pacman326", label: "Mastodon" },
  { href: "https://www.twitch.tv/pacman326", label: "Twitch" },
];

const Footer = () => (
  <footer className="py-4 flex justify-between items-center">
    <span className="italic">Copyright © Paul Coroneos 2023</span>
    <div className="grid gap-2 grid-cols-3 md:grid-cols-5">
      {FOOTER_LINKS.map((link) => (
        <a
          className="text-secondary hover:text-primary"
          key={link.href}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
