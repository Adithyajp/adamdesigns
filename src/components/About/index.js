import React, {useState} from 'react';
import { HeroContainer,HeroBg,HeroContent,HeroH1,HeroP,Img } from './About';
import imag from '../../images/familyroom1.jpg';
import  Logo1  from '../../images/logo.png';



const AboutSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id='about'>
            <HeroBg>
                <img src={imag} />
               
            </HeroBg>
            <HeroContent>
            <Img src={Logo1} alt="" />
                <HeroH1>Builders of distinguished custom spaces
</HeroH1>
                <HeroP>At Adam's the quality of our services is wholly focused on pur client's satosfcation. We understand that in order to meet your needs, we must first understand
                    your goals and maintain that focus througout the project. Our diverse team of construction
                    professionals offers a single source solution for all your construction related needs,
                    and we take pride in leading our clients throughout the process while keeping your project on trackand on budget.
                     From project inception to the commisioning of a fully operational facility, our goal is to act as a supporting partner and serve as a knowledgeable resource
                     to teh entire project team.
                </HeroP>
                        
            </HeroContent>
        </HeroContainer>
    );
};

export default AboutSection
