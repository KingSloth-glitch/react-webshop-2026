import { useState, useEffect } from 'react';
import SearchEngine from './SearchEngine';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Välkommen till vår butik!</h1>
      <SearchEngine />

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images?.[0]} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>{item.price} :-kr</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
