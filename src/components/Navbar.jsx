import { NavLink } from 'react-router-dom';
import { useBudget } from '../contexts/BudgetContext.jsx';

function Navbar() {
  const { budgetMode, setBudgetMode, maxPrice, setMaxPrice } = useBudget();

  // BONUS: input vuoto → null (nessun filtro), altrimenti numero
  const handlePriceChange = e => {
    const value = e.target.value;
    setMaxPrice(value === '' ? null : parseFloat(value));
  };

  return (
    <nav className="navbar">
      <strong>Boolean Store</strong>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chi-siamo">Chi siamo</NavLink>
      <NavLink to="/prodotti">Prodotti</NavLink>
      <span className="spacer"></span>

      {/* MILESTONE 2: il bottone cambia lo stato del context e l'etichetta cambia di conseguenza */}
      <button onClick={() => setBudgetMode(!budgetMode)}>
        {budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}
      </button>

      {/* BONUS: filtro numerico legato a maxPrice */}
      <input type="number" min="0" placeholder="Prezzo massimo" value={maxPrice ?? ''} onChange={handlePriceChange} />
    </nav>
  );
}

export default Navbar;
