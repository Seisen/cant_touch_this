import React, { useState,useRef} from 'react';
import { Button } from 'react-bootstrap';

export function Bouton3 (){
  const hitboxRef = useRef();
  const buttonRef = useRef();
  const containerRef = useRef();

  const [x,setX] = useState('0');
  const [y,setY] = useState('0');
  
  const  HandleHover = ( e ) => {

    e.preventDefault();

    const bounds = e.target.getBoundingClientRect();

    const relative_x = e.clientX - bounds.left;
    const relative_y = e.clientY - bounds.top;

    const element_x = hitboxRef.current.offsetLeft;
    const element_y = hitboxRef.current.offsetTop;

    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    var next_x = 0 ;
    var next_y = 0 ;

    if (relative_x < buttonWidth/2){
        if (element_x + 13 > (containerWidth-buttonWidth) ) {//+13 correctif
            next_x = element_x - buttonWidth
        }else{
            next_x = element_x + (6 + (Math.abs(relative_x-(buttonWidth/2))/2))
        }
        
    }else{
        if (element_x < 23){
            next_x = element_x + buttonWidth
        }else{
            next_x = element_x - (6 + (Math.abs(relative_x-(buttonWidth/2))/2))
        }   
        
    }
    if (relative_y < buttonHeight/2){
        if (element_y + 23>  (containerHeight-buttonHeight)){
            next_y = element_y -buttonHeight
        }else{
            next_y = element_y + (6 + (Math.abs(relative_y-(buttonHeight/2))/2))
        }
        
    }else{
        if (element_y <13){
            next_y = element_y + buttonHeight
        }else{
            next_y = element_y - (6 + (Math.abs(relative_y-(buttonHeight/2))/2))
        }
       
    }
    setX(next_x);
    setY(next_y);
  }

    return (
        <div className="conteneur1" ref={containerRef}>
          <div
          className='hitbox3'
           onMouseEnter={HandleHover}
           onMouseMove={HandleHover}
           onMouseOver={HandleHover}
           ref={hitboxRef}
           style ={{
             top:y,
             left:x,
             transition:'all 0.05s ease-out'
             }}
          >
            <Button className='button-3'  ref={buttonRef}>
                  Try
              </Button>
          </div>
            
             
              
         
          
        </div>
      );
};