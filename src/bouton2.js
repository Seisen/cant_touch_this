import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export function Bouton2 (){
 
  const containerRef = useRef(null);

  const [x,setX] = useState('0');
  const [y,setY] = useState('0');
  
  const [positions_x, setPositions_x ]= useState(null);
  const [positions_y, setPositions_y] = useState(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    
    setPositions_x([0, containerWidth/3, 1.90*(containerWidth/3)]);
    setPositions_y([0, containerHeight/3, 1.90*(containerHeight/3)]);

  },containerRef.current);

  const  getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
  }

  const handleHover = (e) => {
      e.preventDefault();

      let _x  =getRandomInt(3);
      let _y = getRandomInt(3);

      while (x == positions_x[_x] || y == positions_y[_y]) {
      _x  =getRandomInt(3);
      _y = getRandomInt(3);
      }

      setX(positions_x[_x])
      setY(positions_y[_y])
  }
    return (
        <div className="conteneur1" ref={containerRef}>
          <div
          className='hitbox2'
           onMouseEnter={handleHover}
           onMouseOver={handleHover}
           style ={{
             top:y,
             left:x,
             transition:'all 0.05s ease-out'
             }}
          >
            <Button className='button-2'>
                  Try
              </Button>
          </div>
            
             
              
         
          
        </div>
      );
};