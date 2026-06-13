type RoomCardProps = {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: string;
};

export default function RoomCard({
  title,
  description,
  image,
  price,
  rating,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg 
    hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <span>⭐ {rating}</span>
        </div>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-700 font-bold text-xl">
            ₹{price}
          </span>

          <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}