import * as React from 'react';
import { AboutMe, StyledProfileImg, AboutMeDescription } from './hero.styles';

export interface HeroProps {
    header: string;
    subHeader: string;
}

export const Hero: React.FC<HeroProps> = ({ header, subHeader }) =>
    <AboutMe>
        <StyledProfileImg
            src='/paulcoroneos.jpg'
            alt='Paul Coroneos Profile image'
        />
        <AboutMeDescription>
            <h1>{header}</h1>
            <h2>{subHeader}</h2>
        </AboutMeDescription>
    </AboutMe>
