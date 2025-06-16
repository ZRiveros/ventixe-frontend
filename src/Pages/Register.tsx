import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    await axios.post("http://localhost:5047/api/users/register", {
      username,
      password,
    });

      alert("Registrering lyckades! Du kan nu logga in.");
      navigate("/login");
    } catch (err) {
      alert("Registreringen misslyckades. Användarnamnet kan vara upptaget.");
      console.error("Registration error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Registrera dig</h2>
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
        <button type="submit">Registrera</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Har du redan ett konto?{" "}
        <Link to="/login">Logga in här</Link>
      </p>
    </div>
  );
}
