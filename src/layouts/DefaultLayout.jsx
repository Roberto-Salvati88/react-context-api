import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

// BONUS: Navbar centralizzata nel layout. <Outlet /> è il segnaposto dove compare la pagina figlia
function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
