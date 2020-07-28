import paulCoroneosAvatar from './img/paulcoroneos.jpg'

type Author = {
  name:string;
  twitter:string;
  github:string;
  avatar:typeof module 
}

export const paulcoroneos:Author = {
  name: 'Paul Coroneos',
  twitter: '@pacman326',
  github: 'PaulACoroneos',
  avatar: paulCoroneosAvatar,
}
