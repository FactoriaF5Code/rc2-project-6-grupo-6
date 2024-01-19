import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header>
        <Link to="/" className="title-link">
          <h1 className="title">Trooking.com</h1>
        </Link>        <div className="button-container">
        <select className="currency"> 
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            
          </select>
          <Link to="/misreservas" className="reservations">Mis Reservas</Link>
        </div>
       </header>
    );
}

export {Header};