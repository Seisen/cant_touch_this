import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export function Bouton1 (){
    const positions_y = [0,50,100];
    const positions_x = [0,100,200];

    const [x,setX] = useState('0');
    const [y,setY] = useState('0');
    
    const  getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleClick = (e) => {
        e.preventDefault();

        let _x  =getRandomInt(3);
        let _y = getRandomInt(3);

        while (x == _x || y == _y) {
        _x  =getRandomInt(3);
        _y = getRandomInt(3);
        }

        setX(positions_x[_x])
        setY(positions_y[_y])
    }
    return (
        <div className="conteneur1">
      
            
              <Button 
              className='button-1'
              onMouseDown={handleClick} 
              style ={{
                top:y,
                left:x,
                transition:'all 0.05s ease-out'
              }}
              >
            Try
            </Button>
         
          
        </div>
      );
};