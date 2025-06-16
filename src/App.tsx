import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Protected from "./Pages/Protected";
import Register from "./Pages/Register";
import Events from "./Pages/Events";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Hem</Link>
        <Link to="/events" style={{ marginRight: "1rem" }}>Event</Link>
        <Link to="/login" style={{ marginRight: "1rem" }}>Logga in</Link>
        <Link to="/register">Registrera</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}
