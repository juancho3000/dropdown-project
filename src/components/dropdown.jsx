import React, { useState } from "react";
import {TiArrowSortedDown} from 'react-icons/ti';

function Dropdown (){
    const [itsOn, setItsOn] = useState(false);
    return(
        <div className="select">
            <div className="select-btn" onClick={(e) => 
            setItsOn(!itsOn)}>
                Click here 
                <div className="arrow">
                <TiArrowSortedDown/> 
                </div>
                </div>
                <span className="under"></span>
                {itsOn && ( 
                    <div className="select-content">
                    <div className="select-item">
                        nancy
                    </div>
                    <div className="select-item">
                        miguel
                    </div>
                    <div className="select-item">
                        guillermo
                    </div>
                </div>
                )}
        </div>
    );
}
export default Dropdown;