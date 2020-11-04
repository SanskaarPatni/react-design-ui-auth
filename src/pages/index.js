import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from '../components/InfoSection/Data'
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
const Home = () => {
    const { currentUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            {currentUser ? <InfoSection {...homeObjFour} /> : <InfoSection {...homeObjThree} />}
            <Footer />
        </>
    )
}

export default Home