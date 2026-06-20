import Button from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src="/images/h.png"
          alt="Trishul Eco Homestay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            About Us
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Experience comfort, nature, and authentic Himalayan hospitality.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/images/h.png"
              alt="Homestay"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Trishul Eco Homestay
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-4">
              Nestled amidst the serene beauty of the Himalayas,
              Trishul Eco Homestay offers a peaceful retreat for
              travelers seeking comfort, nature, and authentic local experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-900 leading-8 mb-4">
              Surrounded by lush forests, breathtaking mountain views,
              and fresh air, our homestay provides the perfect escape
              from the hustle and bustle of city life.
            </p>

            <p className="text-gray-600 dark:text-gray-900 leading-8 mb-4">
              Whether you are planning a family vacation, a romantic getaway,
              or a solo adventure, we ensure a memorable and relaxing stay.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                🌄 Scenic Views
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wake up to breathtaking mountain and valley views.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                🏡 Comfortable Stay
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Spacious rooms, modern amenities, and warm hospitality.
              </p>
            </div>

            <div className="bg-gray-50  dark:bg-gray-700 p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                🌿 Eco-Friendly Living
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience sustainable tourism surrounded by nature.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Gallery Preview */}
<section className="py-20 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Gallery Preview
      </h2>

      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Discover the beauty of Trishul Eco Homestay through our rooms,
        breathtaking mountain views, and unforgettable guest experiences.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-4">

      {/* Large Image */}
      <div className="md:col-span-2">
        <img
          src="/images/gallery1.jpg"
          alt="Homestay View"
          className="h-[500px] w-full object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition duration-300"
        />
      </div>

      {/* Right Side Images */}
      <div className="flex flex-col gap-4">

        <img
          src="/images/gallery2.jpg"
          alt="Room"
          className="h-[242px] w-full object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition duration-300"
        />

        <img
          src="/images/gallery3.jpg"
          alt="Nature View"
          className="h-[242px] w-full object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition duration-300"
        />

      </div>

    </div>

    <div className="text-center mt-10">
      <Link href="./gallery">
        <Button text="View Full Gallery →" variant="primary"/>
      </Link>
    </div>

  </div>
</section>

    </main>
  );
}