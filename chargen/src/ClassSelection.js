import React, {useState} from "react";

 const classes=['archer', 'warrier', 'warlock'];
let classElement = document.getElementById("class");

const url = "https://www.dnd5eapi.co/api/classes";

let classesList =[];
// let characterClass = "";

function RandomClass() { const [characterClass, newClass] = useState('archer');

    return (
        <div id="RandomClass-container"style={{
            backgroundColor: 'grey',
            width: '100px',
            height: '100px'
          }}>
            
            <h2>{characterClass}</h2>

        <button onClick={() => {
            getRandomClass();
            console.log(classesList);
            newClass(classesList[Math.floor(Math.random()*classesList.length)])
            }

          
            
        }  >


        {/* <button onClick={() =>   newClass(classes[Math.floor(Math.random()*classes.length)])}> */}
        {/* <button onClick={() => getRandomClass()}> */}

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
    // console.log("classes list =" + classesList);
    // console.log("character class = " + characterClass);

    // (data.results[Math.floor(Math.random()*data.results.length)])

    return data;

    // let tmpResult;

    // tmpResult = data.results[0];

    //    this.setState({characterClass: data.results[3]})

    // console.log(tmpResult);
    // console.log(data.results[0]);

    // return fetch(url)
    // .then(response => response.json())
    // .then(classObject => classObject.)
}


export default RandomClass;