import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from './context/CartContext';

const ProduceSection = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProdukt = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/' + id);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProdukt();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <img src={product.images?.[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Pris: {product.price}:-Kr</p>

      <button onClick={() => addToCart(product)}>Lägg i Kundvagn</button>
    </div>
  );
};

export default ProduceSection;
