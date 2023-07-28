import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import './LeftPicBox.css';

var image = {
    "about": "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "experience": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "project": "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  }
  
  function selectImage(position) {
    if (position < 400) return image.about;
    if (position >= 400 && position < 800) return image.experience;
    if (position >=800) return image.project;
  }

export default function LeftPicBox({ color, image }) {
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


  return (
    <div className="trapeze">
  <svg width="25vw" height="75vh" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <clipPath id="clip">
        <polygon points="0,0 100,10 100,90 0,100" />
      </clipPath>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
        <feOffset dx="1" dy="2" result="offsetblur"/> 
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
    </defs>
    <image href={selectedImage} x="0" y="0" width="100" height="100" clipPath="url(#clip)" filter="url(#dropshadow)" />
  </svg>
</div>
  );
}
