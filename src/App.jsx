import Home from './components/Home/Home'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Depoimentos from './components/Depoimentos/Depoimentos'
import Tratamentos from './components/Tratamentos/Tratamentos'
import Footer from './components/Footer/Footer'
import WhatsappButton from './components/WhatsappButton/WhatsappButton';

import { useState, useEffect } from 'react'

import './App.css'

export default function App() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Add listener to handle screen size changes
        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);

        // Clean up listener on component unmount
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return <>
        <Home/>
        <Apresentacao/>
        <Depoimentos isMobile={isMobile}/>
        <Tratamentos/>
        <Footer isMobile={isMobile}/>
        <WhatsappButton />
    </>
}