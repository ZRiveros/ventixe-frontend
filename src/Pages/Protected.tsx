import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Protected() {
  const [message, setMessage] = useState("Laddar...");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Du är inte inloggad.");
      navigate("/login");
      return;
    }

    const fetchSecureData = async () => {
      try {
        const res = await axios.get("http://localhost:5047/api/users/secure", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data);
      } catch (err) {
        console.error(err);
        setMessage("Du är inte inloggad eller så är token ogiltig.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchSecureData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Skyddad Sida</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Logga ut</button>
    </div>
  );
}
