import React, { useState } from "react";
const str=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const dex=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const con=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const wis=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const int=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const cha=[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let totalStats= [0,0,0,0,0,0];
let evenStats = [];
let testList = [3,2,6,1,5,12];

function Atributes(props) {
  const [strength, setStrValue] = useState("");
  const [dexterity, setDexValue] = useState("");
  const [constitution, setConValue] = useState("");
  const [wisdom, setWisValue] = useState("");
  const [intellegence, setIntValue] = useState("");
  const [charisma, setChaValue] = useState("");


 

  function updateTotalStats()
  {
       totalStats[0] = strength;
       totalStats[1] = dexterity;
       totalStats[2] = constitution;
       totalStats[3] = wisdom;
       totalStats[4] = intellegence;
       totalStats[5] = charisma;
  }

  return (
    <div id="Atributes-container"style={{
      backgroundColor: 'grey',
      width: '1920px',
      height: '100px',
      position: "absolute",
     top: 850,
     //right: 0,

    }}>
    
      <button onMouseOver={changeBackground} onMouseOut={resetBackground} onClick={() =>{

 setStrValue(str[Math.floor(Math.random()*str.length)]);
 setDexValue(dex[Math.floor(Math.random()*dex.length)]);
 setConValue(con[Math.floor(Math.random()*con.length)]);
 setWisValue(wis[Math.floor(Math.random()*wis.length)]);
 setIntValue(int[Math.floor(Math.random()*int.length)]);
 setChaValue(cha[Math.floor(Math.random()*cha.length)]);

      }

      
         }>


            Random Stats
        </button>
  


{ updateTotalStats()}
{  evenStats = filterTotalStats(totalStats, evenStatsFilter)}
      {/* <input value={strength} onChange={handleChange} />
      <input value={dexterity} onChange={handleChange} /> */}

      {/* <p style={{color: "red", position: "absolute", left: 0}}>strength: {props.s }</p> */}
      <p style={{color: "red", position: "absolute", left: 0}}>strength: {strength }</p>
      <p style={{color: "green", position: "absolute", left: 300}}>dexterity: {dexterity}</p>
      <p style={{color: "black", position: "absolute", left: 600}}>constitution: {constitution}</p>
      <p style={{color: "white", position: "absolute", left: 900}}>wisdom: {wisdom}</p>
      <p style={{color: "blue", position: "absolute", left: 1200}}>intellegence: {intellegence}</p>
      <p style={{color: "yellow", position: "absolute", left: 1500}}>charisma: {charisma}</p>
      <p style={{color: "brown", position: "absolute", left: 1700}}>total stats: {sum(...totalStats)}</p>
    </div>
  );
}

function changeBackground(e) {
  e.target.style.background = 'red';
}
function resetBackground(e) {
  e.target.style.background = 'white';
}

function sum(var1, var2 , var3, var4, var5, var6)
{
  return var1 + var2 + var3 + var4 + var5 + var6;
}



function filterTotalStats(array, callbackFilter){
  let resultArray = [];

  array.forEach(element => {
    let includeElement = callbackFilter(element);
    if (includeElement) {
      resultArray.push(element)
    }
  });

  return resultArray;

}

let evenStatsFilter = item => {
  let isNumber = typeof item === "number";
  return isNumber && item % 2 == 0;
}

// let evenStats = filterTotalStats(totalStats, evenStatsFilter)


export default Atributes;
