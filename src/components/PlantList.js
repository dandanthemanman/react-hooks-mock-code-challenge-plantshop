import React from "react";
import PlantCard from "./PlantCard";

function PlantList({searchedPlants}) {

const populatePlants = searchedPlants.map(plant => 
  <PlantCard name={plant.name} image= {plant.image} price={plant.price}/>
);

  return (
    <ul className="cards">{populatePlants}
  </ul>
  );
}

export default PlantList;
