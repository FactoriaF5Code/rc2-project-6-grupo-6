import "./Footer.css"
import bookingLogo from "../assets/logos footer/bookingcom.svg";
import pricelineLogo from "../assets/logos footer/Priceline.com-Logo.wine.svg";
import kayakLogo from "../assets/logos footer/Kayak.com-Logo.wine.svg";
import agodaLogo from "../assets/logos footer/Agoda New.svg";
import rentalcarsLogo from "../assets/logos footer/Rentalcarscom.svg";
import opentableLogo from "../assets/logos footer/OpenTable.svg";

const Footer = () => {
    return (
      <>
        <div className="footer">
          <h2 className='copy'>Copyright © 1996–2024 Booking.com™. Todos los derechos reservados.</h2>
          <h2 className='info-booking'>Booking.com forma parte de Booking Holdings Inc., líder mundial en viajes online y servicios relacionados.</h2>
          <div className='logos'>
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
              <img src={bookingLogo} className='booking' alt="Booking" />
            </a>
            <a href="https://www.priceline.com" target="_blank" rel="noopener noreferrer">
            <img src={pricelineLogo} className='price' alt="Priceline"/>
            </a>
            <a href="https://www.kayaka.com" target="_blank" rel="noopener noreferrer">
              <img src={kayakLogo} className='kaya' alt="Kayaka"/>
            </a>
            <a href="https://www.agoda.com" target="_blank" rel="noopener noreferrer">
              <img src={agodaLogo} className='agoda' alt="Agoda"/>
            </a>
            <a href="https://www.rentalcars.com" target="_blank" rel="noopener noreferrer">
               <img src={rentalcarsLogo} className='renta' alt="Rentalcars"/>
            </a>
            <a href="https://www.opentablet.com" target='_blank' rel="noopener noreferrer">
              <img src={opentableLogo} className='open' alt="Opentablet" />
            </a>
          </div>
        </div>
      </>
    );
  };
  
export default Footer;