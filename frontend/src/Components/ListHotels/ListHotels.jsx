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
            <p className="name">{hotels.name}</p>
            <img src={hotels.photoUrl} alt="hotel" />
            <p>{hotels.pricePerNight}€</p>
            <button>reserva <ArrowForwardIosIcon/></button>
          </section>
        );
      })}
    </>
  );
}
