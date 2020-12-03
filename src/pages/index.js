import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjtwo } from '../components/InfoSection2/Data';
import { homeObjThree } from '../components/Contact/Data';
import { homeObjFour } from '../components/InfoSection4/Data';
import Services from '../components/Services/index.js';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/Contact';
import InfoSection4 from '../components/InfoSection4';
import InfoSection5 from '../components/InfoSection5';
import { homeObjFive } from '../components/InfoSection5/Data';
import AboutSection from '../components/About';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>  
         <HeroSection/> 
         <InfoSection {...homeObjOne}/>
         <InfoSection2 {...homeObjtwo}/>        
         <InfoSection4  {...homeObjFour}/>
         <InfoSection5  {...homeObjFive}/>
         <Services/>
         <AboutSection/>
         <InfoSection3  {...homeObjThree}/>
         <Footer/>
        </>
    )
}

export default Home 
