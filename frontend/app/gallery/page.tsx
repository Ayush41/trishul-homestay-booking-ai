export default function GalleryPage() {
  return (
    <main className="bg-gray-50  dark:bg-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <img
          src="/images/h.png"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Explore the beauty of Trishul Eco Homestays
          </p>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Photo Gallery
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover breathtaking mountain views, cozy rooms,
            delicious local cuisine, and unforgettable experiences
            at Trishul Eco Homestays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <img
            src="/gallery/gallery1.jpg"
            alt="Gallery 1"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/gallery/gallery2.jpg"
            alt="Gallery 2"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/gallery/trek.jpg"
            alt="Gallery 3"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/gallery/food.jpg"
            alt="Gallery 4"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/images/cottageRoom.png"
            alt="Gallery 5"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

          <img
            src="/images/hero.jpg"
            alt="Gallery 6"
            className="w-full h-72 object-cover rounded-3xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          />

        </div>

      </section>

    </main>
  );
}