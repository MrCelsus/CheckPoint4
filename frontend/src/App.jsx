import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import AdminLayout from "./Admin/AdminLayout";
import UserLayout from "./User/UserLayout";
import CarsAdmin from "./Admin/pages/CarsAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route User */}
          <Route path="/" element={<UserLayout />} />
          {/* Route Admin */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="cars" element={<CarsAdmin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
