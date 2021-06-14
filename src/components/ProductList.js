import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const addToCart = (info) => {
    setCart((prevState) => [...prevState, info]);
  };
  console.log(cart);

  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} />
  ));

  const bill = () => {
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
    console.log(setTotalBill);
  };
  return (
    <React.Fragment>
      <div className="bill">
        <button onClick={bill}>Total bill</button> <h6>{totalBill}€</h6>
      </div>
      <ul className="products">{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
