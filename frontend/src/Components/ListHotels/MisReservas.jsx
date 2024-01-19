import { useContext } from "react";
import { ReservasContext } from "../../Reservation/ReservasContext";
import "./ListHotels.css";

const MisReservas = () => {
  const { reservas, eliminarReserva } = useContext(ReservasContext);
  return (
    <div className="container">
      {reservas.map((reserva, index) => (
        <div key={index}>
          <h3 className="nombre_reserva">{reserva.name}</h3>
          <img className="img" src={reserva.img} alt="Photo" />
          <h3 className="texto_reserva">{reserva.info}</h3>
          <p className="fecha">Del {reserva.startDate.toLocaleDateString()} al {reserva.endDate ? reserva.endDate.toLocaleDateString() : "No seleccionada"}</p>
          <p className="fecha"></p>
          <button className="button"
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
