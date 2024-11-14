export const FOOTER_LINKS = [
  { href: "https://github.com/PaulACoroneos", label: "Github" },
  {
    href: "https://www.linkedin.com/in/paulacoroneos/",
    label: "LinkedIn",
  },
  { href: "https://meta.masto.host/@pacman326", label: "Mastodon", rel: "me" },
  { href: "https://www.twitch.tv/pacman326", label: "Twitch" },
  { href: "https://bsky.app/profile/pacman326.bsky.social", label: "Bluesky" },
  { href: "https://www.pcoroneos.com/rss.xml", label: "RSS" },
];
const Footer = () => (
  <footer className="md:text-md flex items-center justify-between space-x-2 py-4 text-sm lg:text-lg">
    <span className="italic">© Paul Coroneos 2024</span>
    <div className="flex flex-wrap space-x-4">
      {FOOTER_LINKS.map((link) => (
        <a
          className="text-secondary hover:text-primary"
          key={link.href}
          href={link.href}
          rel={link?.rel}
        >
          {link.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
