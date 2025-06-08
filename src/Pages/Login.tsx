import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5047/api/Users/login", {
        username,
        password,
      });

      console.log("Login response:", res.data);

      const token = res.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        console.log("Token sparad:", token);


        setTimeout(() => {
          navigate("/protected");
        }, 100);
      } else {
        alert("Inloggning lyckades, men ingen token mottagen.");
      }
    } catch (err) {
      alert("Felaktiga inloggningsuppgifter");
      console.error("Login error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Logga in</h2>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logga in</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Har du inget konto?{" "}
        <Link to="/register">Registrera dig här</Link>
      </p>
    </div>
  );
}
