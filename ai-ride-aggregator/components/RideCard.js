export default function RideCard({ name, type, price, eta, recommended }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-3">
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>{type} | ₹{price} | {eta}</p>
      </div>

      {recommended ? (
        <span className="bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
          Recommended
        </span>
      ) : (
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Book Now</button>
      )}
    </div>
  );
}
