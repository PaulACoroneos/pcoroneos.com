import * as React from 'react';
import { AboutMe, StyledProfileImg, AboutMeDescription } from './hero.styles';

export const Hero: React.FC = () =>
    <AboutMe>
        <StyledProfileImg
            src='/paulcoroneos.jpg'
            alt='Paul Coroneos Profile image'
            />
        <AboutMeDescription>
            <span>Howdy!</span>
            <br />
            <br />
            <span>My name is Paul. I am a front-end developer with a passion
           for solving problems.
            </span>
        </AboutMeDescription>
    </AboutMe>
