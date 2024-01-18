import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="title">Trooking.com</h1>
      <div className="button-container">
        <select className="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <Link to="/Reservas/">
          <button className="reservations">Mis Reservas</button>
        </Link>
      </div>
    </header>
  );
}

export { Header };
