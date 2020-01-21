import * as React from 'react';
import { StyledFooter, SocialMediaContainer } from './footer.styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


export const Footer: React.FC = () => <StyledFooter>
  <SocialMediaContainer>
    <a href='https://www.linkedin.com/in/paulacoroneos' target='_blank' rel='noopener noreferrer'><LinkedInIcon fontSize='large' /></a>
    <a href='mailto:paul@pcoroneos.com' target='_blank' rel='noopener noreferrer'><EmailIcon fontSize='large' /></a>
    <a href='https://twitter.com/pacman326' target='_blank' rel='noopener noreferrer'><TwitterIcon fontSize='large' /></a>
    <a href='https://github.com/PaulACoroneos' target='_blank' rel='noopener noreferrer'><GitHubIcon fontSize='large' /></a>
  </SocialMediaContainer>
</StyledFooter >;
