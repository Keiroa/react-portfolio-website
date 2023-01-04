import React from 'react';
import './App.css';

import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Certification from './Components/certification/Certification';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';

const App = () => {
  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Certification></Certification>
    <Services></Services>
    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App;