import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, search }) {

  const searchedPlants = plant => 
      plant.name.toLowerCase().includes(search.toLowerCase())

  let filteredPlantData = plantData.filter(searchedPlants)

  if (search.length > 0) {
  return (
    <ul className="cards">
      {filteredPlantData.map((plant)=><PlantCard key={plant.id} plantData={plant}/>)}
    </ul>
  )}  else {
    return (
      <ul className="cards">
        {plantData.map((plant)=><PlantCard key={plant.id} plantData={plant}/>)}
      </ul>
    );
  }
}

export default PlantList;
