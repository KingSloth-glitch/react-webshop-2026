import { useState, useEffect } from 'react';

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
    <div>
      <input
        type="text"
        placeholder="Sök bland våra produkter ..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <img src={item.images[0]} alt={item.title} width="100" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Pris: {item.price}:-Kr</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEngine;
