import styled from'styled-components';



export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 600px;
 position: relative;
 z-index: 1;
 
 
 :before {
    content: '';
    position: abasolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
 }
 @media screen and (max-width: 768px) {
   height: 900px;
}
 @media screen and (max-width: 480px) {
   height: 800px;
}

`;
export const HeroBg = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
`;



export const HeroContent = styled.div`
 z-index: 3;
 position: absolute;
 padding: 8px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const HeroH1 = styled.h1`
 color: #fff;
 font-size: 48px:
 text-align: center;

 @media screen and (max-width: 768px) {
     font-size: 40px;
 }

 @media screen and (max-width: 480px) {
    font-size: 32px;
 }
`;

export const HeroP = styled.p`
 margin-top: 24px;
 color: #fff;
 font-size: 24px;
 text-align: center;
 max-width: 800px;

 @media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
   font-size: 18px;
}
`;


export const Img = styled.img`
 width: 200px;
 height: 200px;
`