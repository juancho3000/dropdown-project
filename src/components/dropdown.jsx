import React from "react";
import {TiArrowSortedDown} from 'react-icons/ti';

function Dropdown (){
    return(
        <div className="select">
            <div className="select-btn">Click here <TiArrowSortedDown/> </div>
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
        </div>
    )
}

export default Dropdown;