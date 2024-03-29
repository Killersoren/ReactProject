import React, {useState} from "react";

const url = "https://www.dnd5eapi.co/api/classes";
let classesList = [];
getRandomClass();

function RandomClass() { const [ characterClass, newClass] = useState('archer');

    return (
        <div id="RandomClass-container"style={{
            backgroundColor: 'grey',
            width: '100px',
            height: '100px'
          }}>
            <h2>{characterClass}</h2>

        <button onClick={() => newClass(classesList[Math.floor(Math.random()*classesList.length)].name)
        }  >
            New Class
        </button>
        </div>
    );
}

 async function getRandomClass()
{
    const response = await fetch(url);
    const data = await response.json();

    classesList = data.results;
}



export default RandomClass;