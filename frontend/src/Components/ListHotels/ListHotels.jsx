import { useState, useContext } from "react";
import "./ListHotels.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ReservasContext } from "../../Reservation/ReservasContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

export default function ListHotels() {
  const [list, setList] = useState([]);
  const [hotelIdToShow, setHotelIdToShow] = useState(-1);
  const { reservas, setReservas } = useContext(ReservasContext);
  const [selectedDates, setSelectedDates] = useState({
    startDate: new Date(),
    endDate: null,
  });

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
                  <DatePicker
                    selected={selectedDates.startDate}
                    onChange={(dates) =>
                      setSelectedDates({
                        startDate: dates[0],
                        endDate: dates[1],
                      })
                    }
                    startDate={selectedDates.startDate}
                    endDate={selectedDates.endDate}
                    selectsRange
                    inline
                    minDate={new Date()}
                  />
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
                          startDate: selectedDates.startDate,
                          endDate: selectedDates.endDate,
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
