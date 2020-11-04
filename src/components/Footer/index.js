import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialMedia, SocialMediaWrap, SocialLogo } from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    {/* <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onCLick={toggleHome}>MindSpace</SocialLogo>
                            <WebsiteRights>Mindspace © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
