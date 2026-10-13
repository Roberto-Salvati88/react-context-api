import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useBudget } from '../contexts/BudgetContext.jsx';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  // MILESTONE 3: leggo i valori dal context, nessuna prop passata dalla navbar
  const { budgetMode, maxPrice } = useBudget();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  // stato derivato: la lista da mostrare la calcolo, non la salvo in un altro stato
  let visibleProducts = products;

  if (budgetMode) {
    visibleProducts = visibleProducts.filter(product => product.price <= 30);
  }

  if (maxPrice !== null) {
    visibleProducts = visibleProducts.filter(product => product.price <= maxPrice);
  }

  return (
    <section className="container">
      <h1>Prodotti {budgetMode && '(modalità budget)'}</h1>
      <div className="grid">
        {visibleProducts.map(product => (
          <Link key={product.id} to={`/prodotti/${product.id}`} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
