// src/components/EventCard.tsx
interface EventCardProps {
  title: string;
  location: string;
  date: string;
  price: string;
  progress: number;
}

export default function EventCard({ title, location, date, price, progress }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-[280px]">
      <div className="text-sm text-gray-500">{date}</div>
      <div className="font-semibold mt-1">{title}</div>
      <div className="text-xs text-gray-500 mb-2">{location}</div>

      <div className="h-2 bg-gray-200 rounded-full my-2">
        <div className="h-full bg-pink-400 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-700">{progress}%</span>
        <span className="text-purple-600 font-bold">{price}</span>
      </div>
    </div>
  );
}
