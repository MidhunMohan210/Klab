import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/productDetails" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routers;
