import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesIcon } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='./assets/img1.svg' />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce yor fees and increase overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='./assets/img1.svg' />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce yor fees and increase overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='./assets/img1.svg' />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce yor fees and increase overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='./assets/img1.svg' />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce yor fees and increase overall revenue.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
