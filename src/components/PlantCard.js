import React, { useState } from "react";

function PlantCard({ plantData }) {

  const [button, setButton] = useState(true)

  function handleButton() {
    setButton(!button)
  }

  return (
    <li className="card">
      <img src={plantData.image} alt={plantData.name} />
      <h4>{plantData.name}</h4>
      <p>Price: {plantData.price}</p>
      {button ? (
        <button onClick={handleButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
