import { countryNames } from "./names";

function MapCountry() {

    return (
       <div id="MapCountry-container"style={{
      height: '100px',
      position: "absolute",
      top: 1000,
     //right: 0,

    }}><h3>Country Names (mapping)</h3>
    {countryNames.map(p => <div>{p}</div>)}
</div>
        
    );
  }

export default MapCountry;
