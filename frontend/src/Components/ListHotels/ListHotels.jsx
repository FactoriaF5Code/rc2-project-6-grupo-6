import { useState } from "react";
import "./ListHotels.css";
import { useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListHotels() {
  const [list, setList] = useState([]);

  const API = "http://localhost:8080/api/hotels";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {list.map((hotels, index) => {
        return (
          <section key={index} className="container">
            <img src={hotels.photoUrl} alt="hotel" />
            <div className="nombre">
            <p className="name">{hotels.name}</p>
            <p>{hotels.description}</p>
            </div>
            <div className="reserva">
            <p className="price">{hotels.pricePerNight}€</p>
            <button>Reserva ahora!<ArrowForwardIosIcon/></button>
            </div>
          </section>
        );
      })}
    </>
  );
}
