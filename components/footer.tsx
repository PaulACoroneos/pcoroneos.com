const FOOTER_LINKS = [
  { href: "https://github.com/PaulACoroneos", label: "Github" },
  { href: "https://twitter.com/pacman326", label: "Twitter" },
  { href: "https://www.linkedin.com/in/paulacoroneos/", label: "LinkedIn" },
  { href: "https://mstdn.social/@pacman326", label: "Mastodon" },
  { href: "https://www.twitch.tv/pacman326", label: "Twitch" },
  { href: "https://www.pcoroneos.com/rss.xml", label: "RSS" },
];

const Footer = () => (
  <footer className="md:text-md flex items-center justify-between space-x-2 py-4 text-sm lg:text-lg">
    <span className="italic">© Paul Coroneos 2023</span>
    <div className="flex flex-wrap space-x-4">
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
