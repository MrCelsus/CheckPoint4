import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/App.scss";
// Admin
import AdminLayout from "./pages/Admin/AdminLayout";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import CarsAdmin from "./pages/Admin/CarsAdmin";
import BrandsAdmin from "./pages/Admin/BrandsAdmin";
import ProfilsAdmin from "./pages/Admin/ProfilsAdmin";
import FAQAdmin from "./pages/Admin/FAQAdmin";
// User
import UserLayout from "./pages/User/UserLayout";
import HomePage from "./pages/User/HomePage";
import OneCar from "./pages/User/OneCar";
import FAQPage from "./pages/User/FAQPage";

function App() {
  return (
    <header className="App">
      <Router>
        <Routes>
          {/* Routes User */}
          <Route path="/" element={<UserLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="cars/:id" element={<OneCar />} />
            <Route path="faq" element={<FAQPage />} />
          </Route>
          {/* Routes Admin */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="" element={<HomeAdmin />} />
            <Route path="cars" element={<CarsAdmin />} />
            <Route path="brands" element={<BrandsAdmin />} />
            <Route path="profils" element={<ProfilsAdmin />} />
            <Route path="faq" element={<FAQAdmin />} />
          </Route>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
