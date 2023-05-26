import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const handleOnChange = (event) => {
    const value = event.target.value
    setSelectedCategory(value)
  }

  const filteredItems = items.filter((item) => item.category === selectedCategory || 
  selectedCategory === "All")

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={ handleOnChange  }>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
