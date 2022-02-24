import MapCountry from "./MapCountry";
import Atributes from "./Atributes";
import RandomClass from "./ClassSelection";
import NameInput from "./NameInput";
import RandomRace from "./RaceSelection";

function NPCCreatorWithHooks() {

  return (
    <>

<div style={{ 
      backgroundImage: `url("https://www.wallpapertip.com/wmimgs/48-482020_images-of-fantasy-cities-fantasy-city.jpg")` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '1000px',
      width: '2000px',

      position: "absolute",
      
    }}>
      <NameInput></NameInput>
      <Atributes/>
      <MapCountry/>
      <RandomClass/>
      <RandomRace/>
    
      </div>
   
    </>
  );
}


export default NPCCreatorWithHooks;