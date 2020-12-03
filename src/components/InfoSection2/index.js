import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer,InfoWrapper,TopLine,BtnWrap,InfoRow,Column1,Heading,Subtitle,TextWrapper,Img,ImgWrap,Column2 } from './InfoElements';
import imaag from '../../images/living room.jpg'


const InfoSection2 = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,cmg,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                drak2={dark2 ? 1 : 0}
                        
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={imaag} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection2

