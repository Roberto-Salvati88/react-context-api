import { Link } from 'react-router-dom';

// BONUS: pagina 404 per tutte le rotte che non esistono (path="*")
function NotFoundPage() {
  return (
    <section className="container">
      <h1>404</h1>
      <p>Pagina non trovata.</p>
      <Link to="/">Torna alla home</Link>
    </section>
  );
}

export default NotFoundPage;
