import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlantData(data))
  }, [])

  const [plantData, setPlantData] = useState([])

  console.log(plantData)

  return (
    <div className="app">
      <Header />
      <PlantPage addPlantData={setPlantData} plantData={plantData} />
    </div>
  );
}

export default App;
