import RideCard from "./RideCard";

export default function RideList({ rides }) {
  if (!rides.length) return null;

  return (
    <div className="mt-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">Best Ride for You</h2>
      {rides.map((ride) => (
        <RideCard key={ride.id} {...ride} />
      ))}
    </div>
  );
}
