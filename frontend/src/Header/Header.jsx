import './Header.css';

function Header() {
    return (
      <header>
        <h1 className="title">Trooking.com</h1>
        <div className="button-container">
        <select className="currency"> 
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            
          </select>
          <button className="reservations">Mis Reservas</button>
        </div>
       </header>
    );
}

export {Header};