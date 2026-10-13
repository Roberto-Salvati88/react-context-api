import { createContext, useContext, useState } from 'react';

// 1. creo il context
const BudgetContext = createContext();

// 2. il Provider contiene lo STATO e lo mette a disposizione di tutti i componenti figli
function BudgetProvider({ children }) {
  // MILESTONE 1: budgetMode booleano
  const [budgetMode, setBudgetMode] = useState(false);
  // BONUS: maxPrice numerico, parte da null
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode, maxPrice, setMaxPrice }}>
      {children}
    </BudgetContext.Provider>
  );
}

// 3. custom hook: i componenti scrivono useBudget() invece di useContext(BudgetContext)
function useBudget() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };
