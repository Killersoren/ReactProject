import React, { useState } from "react";
const str=[1, 2, 3,4,5,6,7,8,9]
const dex=[1, 2, 3,4,5,6,7,8,9]

function Atributes(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="RandomName-container"style={{
      backgroundColor: 'green',
      width: '100px',
      height: '100px'
    }}>
    
      <button onClick={() =>
         setValue(str[Math.floor(Math.random()*str.length)])
         && setValue(dex[Math.floor(Math.random()*dex.length)])
         }>
            Random Stats
        </button>
      <input value={value} onChange={handleChange} />

      <p>strength: {value}</p>
      <p>Dex: {value}</p>
     

    </div>
  );
}






export default Atributes;
