import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import AdminLayout from "./Admin/AdminLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route Admin */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
