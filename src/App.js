import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";

function App() {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const searchUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";
    let newArr = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    searchUp();
  };
  return (
    <React.Fragment>
      <h1>Welcome to Iulian's Online Shop</h1>
      <h3>Please submit your desired product</h3>
      <form onSubmit={submitHandle}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList data={userInput ? filteredData : data} setData={setData} />
    </React.Fragment>
  );
}

export default App;
