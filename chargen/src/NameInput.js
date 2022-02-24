import React, { useState } from "react";
import { playerNames } from "./names";

function NameInput(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="RandomName-container"style={{
      backgroundColor: 'grey',
      width: '200px',
      height: '150px',
      position: "absolute",
      left: 350 ,
      top: 50,
      
    }}>
    
      <input value={value} onChange={handleChange} />
      <button onClick={Setnamerandom}>
            New Random Name
        </button>
      <p>Name: {value}</p>
      
    </div>

  );

  function Setnamerandom()
  { 
      setValue(playerNames[Math.floor(Math.random()*playerNames.length)] +" "+ playerNames[Math.floor(Math.random()*playerNames.length)]);
  }
}


export default NameInput;