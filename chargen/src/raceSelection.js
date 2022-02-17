import React, {useState} from "react";

const url = "https://www.dnd5eapi.co/api/races";
let racesList = [];
getRandomRace();

function RandomRace() { const [ characterClass, newClass] = useState('Dwarf');

    return (
        <div id="RandomClass-container"style={{
            backgroundColor: 'grey',
            width: '100px',
            height: '100px'
          }}>
            <h2>{characterClass}</h2>
        <button onClick={() => newClass(racesList[Math.floor(Math.random()*racesList.length)].name)
        }  >
            New Race
        </button>
        </div>
        
    );
}


async function getRandomRace()
{
    const response = await fetch(url);
    const data = await response.json();

    racesList = data.results;
}


export default RandomRace;