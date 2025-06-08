import React, { useEffect, useState } from "react";
import axios from "axios";
import EventList from "../components/EventList";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  price: number;
};

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios.get<Event[]>("https://localhost:5001/api/events") // ← ändra om du kör på annan port
      .then(res => setEvents(res.data))
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <div>
      <h2>Kommande Event</h2>
      <EventList events={events} />
    </div>
  );
}
<div className="p-8 bg-blue-500 text-white rounded-xl">
  🎉 Tailwind fungerar!
</div>
