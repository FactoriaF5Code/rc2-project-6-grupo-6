import { useState } from "react";
import "./ListHotels.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export default function ListHotels() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Button className="button" variant="primary" onClick={handleShow}>
                Reserva ahora! <ArrowForwardIosIcon />
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Completa tu reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="ventana-reserva">
                  <h2>{hotels.name}</h2>
                  <img
                    className="img-modal"
                    src={hotels.photoUrl}
                    alt="hotel"
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangeCalendar />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </section>
        );
      })}
    </>
  );
}
