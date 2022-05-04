import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")
// to control form 
const [formName, setFormName] = useState("")
const [formImage, setFormImage] = useState("")
const [formPrice, setFormPrice] = useState("")

// form handler fns
function handleFormName (e) {
  setFormName(e.target.value)
}
function handleFormImage (e) {
  setFormImage(e.target.value)
}
function handleFormPrice (e) {
  setFormPrice(e.target.value)
}

// form submit fn
function handleSubmit (e) {
  e.preventDefault(e)
  const newPlant= {
    name: formName, 
    image: formImage, 
    price: formPrice
  }
  const newPlants=[... plants, newPlant]
  setPlants(newPlants)
}

// get data fn
function getData() {
    fetch("http://localhost:6001/plants")
    .then (res => res.json())
    .then (data => setPlants(data))
}

useEffect(getData, [])

// search handler fn 
function handleSearch (e) {
  setSearch(e.target.value)
}
// search filtered plants
const searchedPlants = plants.filter((plant) => {
  if (search ==="") return true;
  return plant.name.includes(search)
}
)


  return (
    <main>
      <NewPlantForm 
      formName= {formName} 
      handleFormName= {handleFormName}
      formImage={formImage} 
      handleFormImage={handleFormImage} 
      formPrice={formPrice}
      handleFormPrice={handleFormPrice}
      handleSubmit={handleSubmit}/>
      

      <Search search={search} handleSearch= {handleSearch}/>

      <PlantList searchedPlants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
