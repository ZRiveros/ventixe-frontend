import React from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  price: number;
};

type Props = {
  events: Event[];
};

export default function EventList({ events }: Props) {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <strong>{event.title}</strong> – {event.date} – {event.location}
        </li>
      ))}
    </ul>
  );
}
