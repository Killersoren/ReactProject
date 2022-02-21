import { countryNames } from "./names";
import React, { useState } from "react";

function MapCountry() {
  const [value, setValue] = useState("");
  
    return (
       <div id="MapCountry-container"style={{
      height: '100px',
      position: "absolute",
      top: 1000,
     //right: 0,

    }}><h3>Country Names (mapping)</h3>
         <p style={{color: "red", 
         position: "absolute", 
         top: -10,
         left: 0}}>Chosen contry: {value }</p>

    {/* {countryNames.map(p =>
      <div>{p}</div>)} */}

{countryNames.map(name => (
        <li>
          <button onClick={() => setValue(name)}>
          {name}
          </button>
        </li>
      ))}

</div>
        
    );
  }


export default MapCountry;
