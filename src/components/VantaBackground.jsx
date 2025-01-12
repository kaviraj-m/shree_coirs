import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';  

const VantaBackground = ({ children, style }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null); 

  useEffect(() => {
    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE, 
      backgroundColor: 0xffffff, 
      color: 0x000000, 
      points: 20,
      maxDistance: 30,
      spacing: 22,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      style={{ ...style, minHeight: '100vh', position: 'relative' }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;
