import React, { useState } from "react";
import {TiArrowSortedDown} from 'react-icons/ti';

function Dropdown ({picked, setPicked}) {
    const [itsOn, setItsOn] = useState(false);
    const options = [
        'nancy', 
        'miguel',
        'guillermo'
    ];
     
    return(
        <div className="select">
            <div className="select-btn" onClick={(e) => 
            setItsOn(!itsOn)}>
           {picked}
             <span className="under"></span>
                <TiArrowSortedDown/> 
                </div>
                {itsOn && ( 
                    <div className="select-content">
                    {options.map((option) =>( 
                        <div 
                        onClick={(e) => { 
                         setPicked(option); 
                         setItsOn(false);
                        }}
                         className="select-item">
                            {option}
                        </div>
                    ))}  
                </div>
                )} 
        </div>
    );
  
}
export default Dropdown;