import { createContext, useState } from 'react';

export const ReservasContext = createContext();

export const ReservasProvider = ({ children }) => {
    const [reservas, setReservas] = useState([]);

    const eliminarReserva = (id) => {
        setReservas(reservas.filter(reserva => reserva.id !== id));
    };

    return (
        <ReservasContext.Provider value={{ reservas, setReservas, eliminarReserva }}>
            {children}
        </ReservasContext.Provider>
    );
};