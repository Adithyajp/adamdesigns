import React from 'react'
import { ServicesCard,ServicesWrapper,ServicesH1,ServicesH2,ServicesContainer,ServicesIcon,ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'


const Services = () => {
    return (
        <ServicesContainer id="work"> 
            <ServicesH1>How we work</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Planning</ServicesH2>
                    <ServicesP>1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Analysing</ServicesH2>
                    <ServicesP>2</ServicesP>
                </ServicesCard> 
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>3D Modelling</ServicesH2>
                    <ServicesP>3</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Implementaion</ServicesH2>
                    <ServicesP>4</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services