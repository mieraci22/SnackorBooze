import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItemForm({ addItem, type }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    const newItem = { name, description, recipe, serve, type };
    
    addItem(newItem);  // Function passed from parent to update state or send a POST request
    navigate("/");     // Redirect to home or relevant page after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input 
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="recipe">Recipe:</label>
      <input 
        id="recipe"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        required
      />

      <label htmlFor="serve">Serve:</label>
      <input 
        id="serve"
        value={serve}
        onChange={(e) => setServe(e.target.value)}
        required
      />

      <button type="submit">Add {type}</button>
    </form>
  );
}

export default AddItemForm;