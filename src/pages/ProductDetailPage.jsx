import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
const TOTAL_PRODUCTS = 20;

function ProductDetailPage() {
  // useParams legge i parametri dinamici dell'URL: /prodotti/:id → { id: '3' } (è una STRINGA)
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // dipendenza [id]: se cambio prodotto con precedente/successivo, la chiamata riparte
  useEffect(() => {
    setLoading(true);

    axios.get(`${API_URL}/${id}`)
      .then(response => {
        // fakestoreapi risponde vuoto se l'id non esiste
        if (!response.data) {
          navigate('/prodotti'); // BONUS: navigazione programmatica alla lista
          return;
        }
        setProduct(response.data);
      })
      .catch(() => navigate('/prodotti'))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  // BONUS: loading durante il caricamento
  if (loading) return <p className="container">Caricamento...</p>;
  if (!product) return null;

  const currentId = parseInt(id);

  return (
    <section className="container">
      <Link to="/prodotti">← Tutti i prodotti</Link>
      <div className="detail">
        <img src={product.image} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p><strong>{product.price} €</strong> · {product.category}</p>
          <p>{product.description}</p>
        </div>
      </div>

      {/* SUPER BONUS: precedente e successivo con useNavigate */}
      <div className="pager">
        <button disabled={currentId <= 1} onClick={() => navigate(`/prodotti/${currentId - 1}`)}>← Precedente</button>
        <button disabled={currentId >= TOTAL_PRODUCTS} onClick={() => navigate(`/prodotti/${currentId + 1}`)}>Successivo →</button>
      </div>
    </section>
  );
}

export default ProductDetailPage;
