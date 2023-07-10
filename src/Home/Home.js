import { Box } from '@chakra-ui/react';
import React from 'react';
import './HomePage.css';
import products from "../db/data";
import Products2 from "../Products/Products2";
import Card from "../components/Card";
import Navbar from '../Navbar/Navbar';
const Home = () => {
    function filteredData(products) {
        let filteredProducts = products;

        // Applying selected filter
        filteredProducts = filteredProducts.filter(
            ({ category, color, company, newPrice, title, id }) =>
                id < 10
            // color === selected ||
            // company === selected ||
            // newPrice === selected ||
            // title === selected
        );

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
    function filteredData2(products) {
        let filteredProducts = products;

        // Applying selected filter
        filteredProducts = filteredProducts.filter(
            ({ category, color, company, newPrice, title, id }) =>
                newPrice === "$200"
            // color === selected ||
            // company === selected ||
            // newPrice === selected ||
            // title === selected
        );

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
    const result = filteredData(products);
    const result2 = filteredData2(products);
    return (
        <div>
            <Navbar />
            <main>
                <section>
                    <h1>Welcome to FootFlex Sneaker Website</h1>
                    <div className='promo' >
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt13063559e8606d71/649c6bed94be10f2ea894530/Nike-Dunks-Under-$100-Evergreen-assetPrimary_Desktop.png?quality=75&auto=webp&format=pjpg&dpr=2&width=1246" alt="promo" className="pro-img" />
                    </div>
                    <div className="left">Most Popular</div>

                    {/* Featured Sneakers Section */}
                    {/* <div>
                        <img src="image1.jpg" alt="Sneaker 1" />
                        <img src="image2.jpg" alt="Sneaker 2" />
                        <img src="image3.jpg" alt="Sneaker 3" />
                        <img src="image4.jpg" alt="Sneaker 4" />
                    </div> */}
                    <Box w="100%" className='result'>
                        {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
                        <Products2 result={result} />
                    </Box>
                    <div className="left">Premium Sneakers</div>
                    <Box w="100%" className='result'>
                        {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
                        <Products2 result={result2} />
                    </Box>
                    <a className='allpro' href="/search">SHOP NOW</a>
                </section>

            </main>
        </div>
    );
}

export default Home;