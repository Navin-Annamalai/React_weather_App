import React, { useState } from "react";
import Weather from "./Weather";

let api_key = "912d826163770e0f2444a785334db68e";

function App() {
  // const [temp, setTemp] = useState(0);
  // const [city, setCity] = useState("Chennai");
  // const [country, setcountry] = useState("India");
  // const [long, setLong] = useState(0);
  const [text, setText] = useState("Chennai");
  // const [wind, setWind] = useState(0)
const [weatherObj, setWeatherObj ] = useState({temp:0,city:"Chennai", country:"India", wind:0, long:0});

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      // setTemp(Math.floor(data.main.temp));
      // setCity(data.name);
      // setcountry(data.sys.country)
      // setWind(data.wind.speed);
      const obj = {temp:Math.floor(data.main.temp),city:data.name, country:data.sys.country, wind:data.wind.speed, long:0}
      setWeatherObj(obj)

    } catch (error) {
      alert("Please Check your Spelling/City not Found");
    } 
  };
  const handlecity = (e) => {
    setText(e.target.value);
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <>
 <div className="bg-gradient-to-b from-white via-blue-100 to-blue-300 min-h-screen justify-items-center mt-10">
      <div className="w-full max-w-xl  rounded-2xl justify-items-center p-6 sm:p-10">
        <h1 className=" font-extrabold text-blue-500 text-4xl sm:text-5xl mb-10"> Weather App</h1>
 <div>
        <input
          type="text"
          className=" border-2 rounded-md px-3 py-1.5"
          placeholder="Search city"
          onChange={handlecity}
          value={text}
          onKeyDown={handlekeydown}
        />
        <button className="px-5 py-2 bg-blue-500 text-white font-bold rounded-md ml-8 mb-" onClick={search}>Go</button>
      </div>
<div className=" mr-15 text-2xl mt-5">
<Weather
obj = {weatherObj}
      />
</div>
 </div>

</div>

    </>
  );
}

export default App;
