const Footer = () => <footer className='py-4 flex justify-between items-center'>
  <span className='italic'>Copyright © Paul Coroneos 2022</span>
  <div>
    <a className='text-secondary hover:text-primary' href='https://github.com/PaulACoroneos'>Github</a>
    {' '}
    <a className='text-secondary hover:text-primary' href='https://twitter.com/pacman326'>Twitter</a>
    {' '}
    <a className='text-secondary hover:text-primary' href='https://www.linkedin.com/in/paulacoroneos/'>LinkedIn</a>
    {' '}
    <a className='text-secondary hover:text-primary' rel='me' href='https://mstdn.social/@pacman326'>Mastodon</a>
    {' '}
    <a className='text-secondary hover:text-primary' rel='me' href='https://www.twitch.tv/pacman326'>Twitch</a>
  </div>
</footer>

export default Footer;
