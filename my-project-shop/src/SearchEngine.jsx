import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchEngine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!searchTerm) {
        setProducts([]);
        return;
      }

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Sök bland våra produkter ...🔍"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <div className="products">
        {products.map((item) => (
          <Link to={`/product/${item.id}`} className="card" key={item.id}>
            <img src={item.images?.[0]} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>Pris: {item.price}:-Kr</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchEngine;
