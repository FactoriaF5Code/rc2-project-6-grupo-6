import { createContext, useState } from 'react';

export const ReservasContext = createContext();

export const ReservasProvider = ({ children }) => {
    const [reservas, setReservas] = useState([]);

    return (
        <ReservasContext.Provider value={{ reservas, setReservas }}>
            {children}
        </ReservasContext.Provider>
    );
};

