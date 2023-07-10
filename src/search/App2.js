import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import Products from "../Products/Products";
import products from "../db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "../components/Card";
import "./App2.css";
import Navbar from "../Navbar/Navbar";

function App2() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title?.toLowerCase().indexOf(query?.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, id }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Box display="flex" justifyContent="centre"  >
        {<Sidebar handleChange={handleChange} />}
        {<Box w="100%">
          {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </Box>
        }

      </Box>
      {/* <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} /> */}
    </>
  );
}
export default App2;