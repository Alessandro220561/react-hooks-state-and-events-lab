import React, { useState } from "react";

function Item({ name, category }) {

  const [ addToCart, setAddToCart ] = useState(false)

  const liClass = addToCart ? "in-cart" : ""

  const buttonText = addToCart ? "Remove From Cart" : "Add To Cart"
  
  const toggleAddToCart = () => {
    setAddToCart( !addToCart )
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ toggleAddToCart }>{ buttonText }</button>
    </li>
  );
}

export default Item;
