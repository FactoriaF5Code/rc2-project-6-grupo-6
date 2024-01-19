import './Header.css';
import { Link } from 'react-router-dom';


function Header({ onCurrencyChange }) {
  const handleSelectChange = (event) => {
    onCurrencyChange(event.target.value);
  };
    return (
      <header>
        <Link to="/" className="title-link">
          <h1 className="title">Trooking.com</h1>
        </Link>  
        <div className="button-container" onChange={handleSelectChange}>
        <select className="currency"> 
            <option value="€">EUR</option>
            <option value="$">USD</option>
            
          </select>
          <Link to="/misreservas" className="reservations">Mis Reservas</Link>
        </div>
       </header>
    );
}

export {Header};