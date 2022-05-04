import React from "react";

function NewPlantForm({formName, handleFormName, formImage, handleFormImage, formPrice, handleFormPrice, handleSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input onClick={handleFormName} type="text" name="name" placeholder="Plant name" /> {formName}
        <input onClick={handleFormImage} type="text" name="image" placeholder="Image URL" /> {formImage}
        <input onClick={handleFormPrice} type="number" name="price" step="0.01" placeholder="Price" /> {formPrice}
        <button onClick={handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
