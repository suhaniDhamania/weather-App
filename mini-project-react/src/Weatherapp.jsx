 

import Searchbox from "./Searchbox.jsx";
import Infobox from "./Infobox.jsx";


import {useState} from "react";
export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]=useState({
            city:"Delhi",
        feelsLike: 14.91,
        temp: 15.05,
        tempMax: 15.05,
        tempMin: 15.05,
        humidity: 88,
        weather: "broken clouds",
    });
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(
        <div className="Weatherapp" style={{display:"flex",justifyContent:"center"}}>
          <div className="input-btn">
          <h1>Weather App</h1>
          <Searchbox updateinfo={updateinfo}/>
          </div>
         
           <div className="in-fo" style={{marginLeft:"100px"}}>
           <Infobox info={weatherinfo}/>
           </div>
        </div>
    );
}