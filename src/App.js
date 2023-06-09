import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Details from "./pages/home/Details";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="font-roboto ">
        <Navbar />

          <div className="mt-14">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
          </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
