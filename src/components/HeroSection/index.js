import React, {useState} from 'react';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
               
            </HeroBg>
            <HeroContent>
            
                <HeroH1>We create worlds that inspire</HeroH1>
                <HeroP>We bring real estate and storytelling together.
                     As a team of architects and technologists, we are
                      uniquely qualified to translate your property vision
                       into visuals that will transport homebuyers and
                        investors alike</HeroP>
                        <HeroBtnWrapper>
                            <Button
                            to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                              onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true">
                                Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                            </Button>
                        </HeroBtnWrapper>
                        
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
