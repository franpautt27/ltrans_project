import React, {useState} from 'react'
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';
import ContactForm from '../components/ContactFormSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2} from '../components/InfoSection/Data';
import MapView from '../components/MapView/MapView';
import Navbar from '../components/Navbar'
import NuestrosClientes from '../components/NuestrosClientes/NuestrosClientes';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObj1} />
        <AnimatedCounter end={3700} />
        <InfoSection {...homeObj2} />
        <NuestrosClientes />
        <Services />
        <MapView />
        <ContactForm />
        <Footer />
        
    </>
  )
}

export default Home