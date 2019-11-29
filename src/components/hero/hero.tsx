import * as React from 'react';
import { AboutMe, StyledProfileImg, AboutMeDescription } from './hero.styles';

export const Hero: React.FC = () =>
    <AboutMe>
        <StyledProfileImg
            src='/paulcoroneos.jpg'
            alt='Paul Coroneos Profile image'
            />
        <AboutMeDescription>
            <h1>Howdy!</h1>
            <h2>My name is Paul. I am a front-end developer with a passion
           for solving problems.
            </h2>
        </AboutMeDescription>
    </AboutMe>
