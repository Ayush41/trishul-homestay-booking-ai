import BookingCard from "@/components/dashboard/mybooking";

export default function Booking() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            My Bookings
          </h1>

          <p className="text-gray-600 mt-2">
            View your current and past bookings
          </p>
        </div>

        <div className="space-y-6">

          <BookingCard
            bookingId="BK101"
            roomType="Deluxe Room"
            dates="15 Jun - 18 Jun"
            status="Confirmed"
          />

          <BookingCard
            bookingId="BK102"
            roomType="Family Suite"
            dates="25 Jun - 28 Jun"
            status="Pending"
          />

        </div>

      </div>

    </main>
  );
}