import { useState } from "react";
import RideList from "../components/RideList";

export default function Home() {
  const [rides, setRides] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const searchRides = () => {
    const mockRides = [
      { id: 1, name: "Rapido", type: "Bike", price: 40, eta: "3 mins", recommended: true },
      { id: 2, name: "Ola", type: "Bike", price: 45, eta: "2 mins" },
      { id: 3, name: "Uber", type: "Bike", price: 50, eta: "1 min" },
    ];
    setRides(mockRides);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">AI Ride Aggregator</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col space-y-3">
        <input
          type="text"
          placeholder="From: Your location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="To: Your destination"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={searchRides}
          className="bg-blue-600 text-white p-2 rounded font-semibold"
        >
          Search Rides
        </button>
      </div>

      <RideList rides={rides} />
    </div>
  );
}
