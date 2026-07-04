interface BookingCardProps {
  bookingId: string;
  roomType: string;
  dates: string;
  status: string;
  guests?: number;
  onCancel?: () => void;
}

export default function BookingCard({
  bookingId,
  roomType,
  dates,
  status,
  guests,
  onCancel,
}: BookingCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold dark:text-white">
          🏡 {roomType}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">

        <p>
          <strong>Booking ID:</strong> {bookingId}
        </p>

        <p>
          📅 <strong>Stay:</strong> {dates}
        </p>

        {guests !== undefined && (
          <p>
            👥 <strong>Guests:</strong> {guests}
          </p>
        )}

      </div>

      {onCancel && (
        <button
          onClick={onCancel}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
        >
          Cancel Booking
        </button>
      )}

    </div>
  );
}