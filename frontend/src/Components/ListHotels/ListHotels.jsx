import { useState } from "react";
import "./ListHotels.css";
import { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export default function ListHotels() {
  const [list, setList] = useState([]);
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClickClose = () => {
  //   setOpen(false);
  // }
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
            <img className="img" src={hotels.photoUrl} alt="hotel" />
            <div className="info">
              <p className="name">{hotels.name}</p>
              <p>{hotels.description}</p>
            </div>
            <div className="reserva">
              <p className="price">{hotels.pricePerNight}€</p>
              <button className="button">
                Reserva ahora!
                <ArrowForwardIosIcon />
              </button>
            </div>
            <div className="ventana-reserva">
              <h1>completa tu reserva</h1>
              <h2>{hotels.name}</h2>
              <img src={hotels.photoUrl} alt="hotel" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateRangeCalendar"]}>
                  <DateRangeCalendar />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </section>
        );
      })}
    </>
  );
}
