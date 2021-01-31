import React from 'react'
import { FooterContainer,WebsiteRights,FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap, Creators } from './FooterElements'
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to='/'> How it works </FooterLink>
                                <FooterLink to='/'> Testimonials </FooterLink>
                                <FooterLink to='/'> Careers </FooterLink>
                                <FooterLink to='/'> Investors </FooterLink>
                                <FooterLink to='/'> Terms of Services </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to='/'> Contact </FooterLink>
                                <FooterLink to='/'> Support </FooterLink>
                                <FooterLink to='/'> Careers </FooterLink>
                                <FooterLink to='/'> Destinations </FooterLink>
                                <FooterLink to='/'> Sponsorships </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to='/'> Submit Video </FooterLink>
                                <FooterLink to='/'> Ambassadors </FooterLink>
                                <FooterLink to='/'> Agency </FooterLink>
                                <FooterLink to='/'> Influencer </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to='/'> Instagram </FooterLink>
                                <FooterLink to='/'> Facebook </FooterLink>
                                <FooterLink to='/'> Youtube </FooterLink>
                                <FooterLink to='/'> Twitter </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Adam Associates</SocialLogo>
                            <WebsiteRights>adam associates © {new Date().getFullYear()}
                             .All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink> 
                            </SocialIcons>
                    </SocialMediaWrap>
                    <Creators>
                        Created with 
                         <a href='https://adithyajp.dev/' target="_blank">Adithya</a>
                        & 
                         <a href='https://asifali.dev/' target="_blank">Asif</a>
                    </Creators>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
