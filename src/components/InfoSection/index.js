import React from 'react'
import { InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, Img, TopLine, Heading, Subtitle, ImgWrap, BtnWrapper, } from './InfoElements';
import { ButtonR } from '../ButtonElement';
const InfoSection = ({ lightBg, id, lightText, topLine, headline, darkText, description, buttonLabel, img, imgStart, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrapper>
                                    <ButtonR to={id} smooth={true} spy={true} duration={500} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</ButtonR>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection