import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5047/api/Users/login", {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      setMessage("Inloggning lyckades!");


    } catch (error: any) {
      setMessage("Felaktigt användarnamn eller lösenord.");
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Logga in</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
