import React, { useState } from "react";
const names=['Bo', 'Hans', 'Lars']

function NameInput(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="RandomName-container"style={{
      backgroundColor: 'grey',
      width: '100px',
      height: '100px'
    }}>
    
      <input value={value} onChange={handleChange} />
      <button onClick={() => setValue(names[Math.floor(Math.random()*names.length)])}>
            New Random Name
        </button>
      <p>Name: {value}</p>
     

    </div>
  );
}

export default NameInput;