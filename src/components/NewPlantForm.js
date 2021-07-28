import React from "react";

// this is using vanila JS to make new data
// try using a controlled form next time
function NewPlantForm({ setFormData, addToList }) {

  function handleButton(e){
    e.preventDefault()
    let newData = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "price": e.target.price.value
    }
    setFormData(newData)
    addToList()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleButton}>
        <input className="text" type="text" name="name" placeholder="Plant name" />
        <input className="image" type="text" name="image" placeholder="Image URL" />
        <input className="price" type="number" name="price" step="0.01" placeholder="Price" />
        <button className="submit" type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
