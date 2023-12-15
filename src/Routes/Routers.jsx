import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Circle from "../pages/Circle";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/circle" element={<Circle />} />
    </Routes>
  );
};

export default Routers;
