import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sass/App.scss";
import AdminLayout from "./pages/Admin/AdminLayout";
import UserLayout from "./pages/User/UserLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route User */}
          <Route path="/" element={<UserLayout />} />
          {/* Route Admin */}
          <Route path="/admin/" element={<AdminLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
