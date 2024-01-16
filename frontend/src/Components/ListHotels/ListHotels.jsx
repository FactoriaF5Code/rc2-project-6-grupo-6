import { useState } from "react";
import "./ListHotels.css";
import { useEffect } from "react";

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
          <div key={index} className="container">
            <section>
              <img src={hotels.photoUrl} alt="hotel" />
              <p>{hotels.name}</p>
              <p>{hotels.pricePerNight}</p>
              <button>reserva!</button>
            </section>
          </div>
        );
      })}
    </>
  );
}
