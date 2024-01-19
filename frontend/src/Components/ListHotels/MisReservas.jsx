import { useContext } from "react";
import { ReservasContext } from "../../Reservation/ReservasContext";
import "./ListHotels.css";

const MisReservas = () => {
  const { reservas, eliminarReserva } = useContext(ReservasContext);
  return (
    <div className="container">
      <h1>Mis Reservas</h1>
      {reservas.map((reserva, index) => (
        <div key={index}>
          <h3 className="texto_reserva">{reserva.name}</h3>
          <img className="img" src={reserva.img} alt="Photo" />
          <h3 className="texto_reserva">{reserva.info}</h3>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Estás seguro de que quieres eliminar esta reserva?"
                )
              ) {
                eliminarReserva(reserva.id);
              }
            }}
          >
            Eliminar
          </button>{" "}
        </div>
      ))}
    </div>
  );
};

export default MisReservas;
