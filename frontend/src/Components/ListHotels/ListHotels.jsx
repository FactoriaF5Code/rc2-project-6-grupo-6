import { useState, useContext } from "react";
import "./ListHotels.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { ReservasContext } from "../../Reservation/ReservasContext";

export default function ListHotels() {
  const [list, setList] = useState([]);
  const [hotelIdToShow, setHotelIdToShow] = useState(-1);
  const { reservas, setReservas } = useContext(ReservasContext);

  const handleClose = () => setHotelIdToShow(-1);
  const handleShow = (id) => setHotelIdToShow(id);
  const confirmar = () => {
    window.confirm("Enhorabuena tu reserva se ha confirmado con exito.");
  };

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
      {list.map((hotel, index) => {
        return (
          <section key={index} className="container">
            <img className="img" src={hotel.photoUrl} alt="hotel" />
            <div className="info">
              <p className="name">{hotel.name}</p>
              <p>{hotel.description}</p>
            </div>
            <div className="reserva">
              <p className="price">{hotel.pricePerNight}€</p>
              <Button
                className="button"
                variant="primary"
                onClick={() => {
                  handleShow(hotel.id);
                }}
              >
                Reserva ahora! <ArrowForwardIosIcon />
              </Button>
            </div>

            <Modal show={hotelIdToShow === hotel.id} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Completa tu reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="ventana-reserva">
                  <h2 className="hotel-modal">{hotel.name}</h2>
                  <img className="img-modal" src={hotel.photoUrl} alt="hotel" />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangeCalendar />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (
                      !reservas.some((reserva) => reserva.name === hotel.name)
                    ) {
                      setReservas([
                        ...reservas,
                        {
                          name: hotel.name,
                          img: hotel.photoUrl,
                          info: hotel.description,
                        },
                      ]);
                      confirmar();
                    } else {
                      window.confirm(
                        "Lo sentimos, ya has efectuado esta reserva"
                      );
                    }
                    handleClose();
                  }}
                >
                  Confirmar Reserva
                </Button>
              </Modal.Footer>
            </Modal>
          </section>
        );
      })}
    </>
  );
}
