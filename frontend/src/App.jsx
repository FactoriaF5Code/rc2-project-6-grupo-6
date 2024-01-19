import './App.css'
import Footer from './Footer/Footer';
import {Header} from "./Header/Header.jsx";
import ListHotels from "./Components/ListHotels/ListHotels";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MisReservas from './Components/ListHotels/MisReservas'; 
import {ReservasProvider} from './Reservation/ReservasContext';

function App() {
  return (
    <ReservasProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/misreservas" element={<MisReservas />} />
          <Route path="/" element={<ListHotels />} />
        </Routes>
        <Footer />
      </Router>
    </ReservasProvider>
  );
}

export default App;