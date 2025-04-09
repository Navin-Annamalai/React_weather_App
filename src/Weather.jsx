import React, { useState, useEffect } from "react";

function Weather(props) {
  const {temp, city, country, wind} = props.obj;
  
  return (
    <>
<div className="image"></div>
      <div className="temp p-1">Today's Temp - <span className="text-blue-500 font-extrabold p-1">{temp}c</span> </div>
      <div className="city p-1"> City - <span className="text-blue-500 font-extrabold">{city}</span></div>
      <div className="country p-1">Country - <span className="text-blue-500 font-extrabold">{country}</span></div>
      <div className="windspeed p-1">Wind Speed - <span className="text-blue-500 font-extrabold">{wind}</span> Km/hr</div>
      <div className="cord">
      </div>

    </>
  );
}

export default Weather;
