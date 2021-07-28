import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantData, addPlantData }) {

  const [searchValue, setSearchValue] = useState('')
  const [formData, setFormData] = useState('')

  function addToList() {
    addPlantData([...plantData, formData])
  }
  
  
  return (
    <main>
      <NewPlantForm addToList={addToList} setFormData={setFormData}/>
      <Search newSearchValue={setSearchValue}/>
      <PlantList search={searchValue} plantData={plantData}/>
    </main>
  );
}

export default PlantPage;
