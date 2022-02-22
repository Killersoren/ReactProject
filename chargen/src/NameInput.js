import React, { useState } from "react";
import { playerNames } from "./names";
//const names=['Bo', 'Hans', 'Lars']

function NameInput(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="RandomName-container"style={{
      backgroundColor: 'grey',
      width: '200px',
      height: '100px',
      position: "absolute",
      left: 950 ,
      top: 50,
     backgroundImage: `url(${"https://png.pngtree.com/thumb_back/fw800/background/20190827/pngtree-fire-texture-background-with-red-hot-burning-flames-image_306674.jpg"})`
      
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