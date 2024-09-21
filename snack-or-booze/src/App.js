import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./Menu";  // Generic Menu for both snacks and drinks
import ItemDetail from "./ItemDetail";  // Generic component to display details of both snacks and drinks
import AddItemForm from "./AddItemForm";
import NotFound from "./NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Fetch both snacks and drinks on mount
  useEffect(() => {
    async function getData() {
      let [snacks, drinks] = await Promise.all([
        SnackOrBoozeApi.getSnacks(),
        SnackOrBoozeApi.getDrinks()
      ]);
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
      console.log("Snacks:", snacks, "Drinks:", drinks);
    }
    getData();
  }, []);

  // Function to handle adding snacks or drinks
  async function handleAddItem(newItem) {
    await SnackOrBoozeApi.addItem(newItem);
    
    // Optionally update local state if needed
    if (newItem.type === "snack") {
      setSnacks(s => [...s, newItem]);
    } else {
      setDrinks(d => [...d, newItem]);
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<Menu items={snacks} title="Snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} title="Drinks" />} />
            <Route path="/snacks/:id" element={<ItemDetail items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks/:id" element={<ItemDetail items={drinks} cantFind="/drinks" />} />
            <Route path="/add-item" element={<AddItemForm addItem={handleAddItem} type="snack" />} />
            <Route path="/add-drink" element={<AddItemForm addItem={handleAddItem} type="drink" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;