import React from 'react';
import { CloseIcon,Icon,SidebarContainer,SideBtnWrap,SidebarWrapper,SidebarLink,SidebarMenu,SidebarRoute } from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}  onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                      About  
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                      Services 
                    </SidebarLink>
                    <SidebarLink to='work' onClick={toggle}>
                      How we work  
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                      Contact Us  
                    </SidebarLink>
                    <SideBtnWrap>
                    <SidebarRoute to='contact' onClick={toggle}>Request A Quote</SidebarRoute>
                </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer> 
    )
}

export default SideBar
 