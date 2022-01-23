import React, { useState } from 'react';
import '../assets/switch.css';
const Switch = ({isOn,toggle}) => {
    
    var [color, setcolor] = useState('gray');
  
    console.log(isOn);
   var buttonclick=()=>{
    isOn==='ON'?setcolor("yellow"):setcolor("gray");
    toggle()
   }
    return (
        <div className='container'>
            <div className="buttonl">
                <button style={{background:color}}> </button>
              
            </div>
            <div className="buttons">
                <button onClick={buttonclick}  >{isOn} </button>
                
            </div>
            
        </div>
    );
};

export default Switch;