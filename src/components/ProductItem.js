import React from "react";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, icon, price, inventory } = info;
  const capProdName = productName[0].toUpperCase() + productName.slice(1);

  return (
    <li key={id}>
      <h3>
        <i>{icon}</i> {capProdName}
      </h3>
      <h4>{price}€</h4>
      <h6>{inventory} items in stock</h6>
      <button
        disabled={inventory === 0}
        onClick={() => {
          //console.log(info);
          addToCart(info);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </li>
  );
};

export default ProductItem;
