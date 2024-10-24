import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatologPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductCard from "./pages/ProductCard/ProductCard";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <>
      <Router>
        <div className="box_content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product_cart" element={<ProductCard />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
