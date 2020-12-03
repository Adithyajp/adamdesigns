import React, {useState,useEffect} from 'react';
import { Nav,Img,Img1,NavBtn,NavBtnLink,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import Logo1 from '../../images/logo1.png'
import Logo2 from '../../images/logo3.png'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
       
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    } ;

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} >
                    <Img src={Logo1} alt="" />
                    <Img1 src={Logo2} alt="" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='work' smooth={true} duration={500} spy={true} exact='true' offset={-80}>How we Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Request A Quote</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
