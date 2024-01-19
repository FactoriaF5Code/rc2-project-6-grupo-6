import { useContext } from 'react';
import { ReservasContext } from '../../Reservation/ReservasContext';
const MisReservas = () => {
    const { reservas } = useContext(ReservasContext);

    return (
        <div>
            <h1>Mis Reservas</h1>
            {reservas.map((reserva, index) => (
                <div key={index}>
                    {/* Renderiza la información de la reserva aquí */}
                </div>
            ))}
        </div>
    );
};

export default MisReservas;
