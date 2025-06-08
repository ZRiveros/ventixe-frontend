// src/components/Sidebar.tsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#F5F4FB] text-[#1C2346] flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold mb-8">Ventixe</h1>
        <nav className="space-y-4">
          <Link to="/events" className="text-pink-600 font-semibold">Events</Link>
          <Link to="#" className="text-gray-600">Bookings</Link>
          <Link to="#" className="text-gray-600">Invoices</Link>
        </nav>
      </div>
      <button className="mt-auto text-sm text-gray-500">Sign out</button>
    </div>
  );
}
