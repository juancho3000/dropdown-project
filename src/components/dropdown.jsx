import  { useState } from "react";
import {TiArrowSortedDown} from 'react-icons/ti';
//import App from "../App";

 function Dropdown ({ picked, setPicked }) {
    const [itsOn, setItsOn] = useState(false);

    const options = [  
       {key:"guillermo"},
       {key:"miguel"},
       {key:"nancy"},
       {key:"juan"},
       {key:"carmen"},
       {key: "adriana"},
       {key:"julia"},
       {key:"gregory"}
       ];

       return( 
        <div className="select" >
            <div className="select-btn" onClick={(e) => 
            setItsOn(!itsOn)}>
              Click here
             <span className="under"></span>
                <TiArrowSortedDown/> 
                </div>
                {itsOn && ( 
                    <div className="select-content">
                    {options.map((option) =>( 
                        <div
                        key={option.key}
                        onClick={(e) => { 
                         setPicked(option.key); 
                         setItsOn(false);
                        }}
                         className="select-item">
                            {option.key}
                        </div>
                    ))}  
                </div>
                )} 
        </div>
    );
}
export default Dropdown;