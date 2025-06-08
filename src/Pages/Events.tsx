import EventCard from "../components/EventCard";
import Sidebar from "../components/Sidebar";

export default function Events() {
  const events = [
    {
      title: "Adventure Gear Show",
      location: "Denver, CO",
      date: "June 5, 2029 – 3:00 PM",
      price: "$40",
      progress: 65,
    },
    {
      title: "Symphony Under the Stars",
      location: "Los Angeles, CA",
      date: "Apr 20, 2029 – 7:00 PM",
      price: "$50",
      progress: 75,
    },

  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
}
