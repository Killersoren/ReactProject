import React, { useState } from 'react';
const names=['Bo', 'Hans', 'Lars']
function RandomName() { const [name, newName] = useState('Bob');
return (
    <div id="RandomName-container"style={{
        backgroundColor: 'grey',
        width: '100px',
        height: '100px'
      }}>
        
        <h2>{name}</h2>
        <button onClick={() => newName(names[Math.floor(Math.random()*names.length)])}>
            New Name
        </button>
        
    </div>
    
);
}
export default RandomName;
