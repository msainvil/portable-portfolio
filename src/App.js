import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeftPicBox from './components/LeftPicBox';
import RightPicBox from './components/RightPicBox';

var image = {
  "about": "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "experience": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
}

function selectImage(position) {
  if (position < 400) return image.about;
  if (position >= 400 && position < 700) return image.experience;
}

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedImage, setSelectedImage] = useState(image.about);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedImage(selectImage(scrollPosition));
  }, [scrollPosition]);

  
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";
  
  return (
    <>
    <h1 className='text'>Scroll position: {scrollPosition}px</h1>
      <Nav color={color} />
      <Header color={color} />
      
      


      

      <About color={color} />
      
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />

     

      <Footer />
      
    </>
  );
}

export default App;
