import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/App.scss";
import AdminLayout from "./pages/Admin/AdminLayout";
import UserLayout from "./pages/User/UserLayout";
import SideBar from "./components/SideBar";

function App() {
  return (
    <header className="App">
      <Router>
        <Routes>
          {/* Route User */}
          <Route path="/" element={<UserLayout />} />
          {/* Route Admin */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="" element={<SideBar />} />
          </Route>
        </Routes>
      </Router>
    </header>
  );
}

export default App;
