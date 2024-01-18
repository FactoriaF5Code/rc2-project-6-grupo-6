import "./App.css";
import Footer from "./Footer/Footer";
import { Header } from "./Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ListHotels from "./Components/ListHotels/ListHotels.jsx";

function App() {
  return (
    <>
      <Header />
      <ListHotels />
      <Footer />
    </>
  );
}

export default App;
