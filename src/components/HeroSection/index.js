import React, { useState } from 'react';
// import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { ButtonR, ButtonS } from '../ButtonElement';
import { useAuth } from '../../context/AuthContext';
const HeroSection = () => {
    const { currentUser } = useAuth();
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src='./assets/video.mp4' type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Your Safe Space In Difficult Times</HeroH1>
                {currentUser ? <>
                    <HeroP>Checkout the services tab</HeroP>
                    <HeroBtnWrapper>
                        <ButtonS to="services" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get started {hover ? <ArrowForward /> : <ArrowRight />}</ButtonS>
                    </HeroBtnWrapper>
                </> :
                    <>

                        <HeroP>Sign Up for full features today!</HeroP>
                        <HeroBtnWrapper>
                            <ButtonR to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get started {hover ? <ArrowForward /> : <ArrowRight />}</ButtonR>
                        </HeroBtnWrapper>
                    </>}
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
