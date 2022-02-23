import React, { useState } from "react";
import MapCountry from "./MapCountry";
import Atributes from "./Atributes";
import RandomClass from "./ClassSelection";
import NameInput from "./NameInput";
import RandomRace from "./raceSelection";
import { playerNames } from "./names";

function NPCCreatorWithHooks() {
  let name = useFormInput("");
  let faction = useFormInput("");
  let reputation = useFormInput("Friendly");

  return (
    <>
      <h3>NPC Creator</h3>
      <NPCForm name={name} faction={faction} reputation={reputation} />
      <h5>Result:</h5>
      <NameUI name={name.value} faction={faction.value} reputation={reputation.value} />
      <h5>Player Name:</h5>
      <NameInput></NameInput>
      <Atributes/>
      <MapCountry/>
      <RandomClass/>
      <RandomRace/>


    </>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  return { value: value, onChange: handleChange };
}

function NPCForm(props) {
  return (
    <>
      <label>Name:</label>
      <br />
      <input {...props.name}></input>
      <button onClick={Setnamerandom}>
            New Random Name 2
        </button>
      
      <br />
      <label>Faction:</label>
      <br />
      <input {...props.faction}></input>
      <br />
      <label>Reputation:</label>
      <br />
      <select {...props.reputation}>
        <option>Friendly</option>
        <option>Neutral</option>
        <option>Hostile</option>
      </select>
    </>
    
  ); 
  function Setnamerandom(props)
  { 
   
    return <>
    { props.name = (playerNames[Math.floor(Math.random()*playerNames.length)] +" "+ playerNames[Math.floor(Math.random()*playerNames.length)])}
    </>
  }
}

function NameUI(props) {
  function getReputationColor(reputation) {
    if (reputation === "Friendly") return "green";
    if (reputation === "Neutral") return "orange";
    if (reputation === "Hostile") return "Red";
  }

  return (
    <div
      style={{
        width: "250px",
        color: getReputationColor(props.reputation),
        fontWeight: "bolder",
        textAlign: "center",
        
      }}>
      <div>{props.name}</div>
      <div>{"<" + props.faction + ">"}</div>
    </div>
    
  );
 
 
}

export default NPCCreatorWithHooks;