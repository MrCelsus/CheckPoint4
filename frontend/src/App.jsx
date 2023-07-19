import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/App.scss";
import AdminLayout from "./pages/Admin/AdminLayout";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import UserLayout from "./pages/User/UserLayout";
import CarsAdmin from "./pages/Admin/CarsAdmin";
import BrandsAdmin from "./pages/Admin/BrandsAdmin";
import ProfilsAdmin from "./pages/Admin/ProfilsAdmin";
import FAQAdmin from "./pages/Admin/FAQAdmin";

function App() {
  return (
    <header className="App">
      <Router>
        <Routes>
          {/* Route User */}
          <Route path="/" element={<UserLayout />} />
          {/* Route Admin */}
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
