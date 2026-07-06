export default function Hero() {
  return (
    <section
      className="relative h-[calc(100vh-5rem)] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/h.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Discover Beautiful Homestays
          </h1>

          <p className="mt-6 text-lg md:text-2xl">
            Experience nature, comfort, and unforgettable stays.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-700 rounded-lg text-lg hover:bg-green-800">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}