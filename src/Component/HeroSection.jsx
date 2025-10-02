import React from 'react';

const HeroSection = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-10 px-4">
  {/* Heading Section */}
  <div className="text-center mb-10">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Our New Collection
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur. Scelerisque amet cursus eget amet sit ut. 
      In imperdiet suspendisse adipiscing eu purus. Eget nisl cursus quis nibh. Sed sit amet facilisi viverra.
    </p>
  </div>

  {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="rounded overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      <img
        className="w-full h-56 object-cover"
        src="https://i.ibb.co.com/svKKXqk9/laura-chouette-4s-Kde-IMi-FEI-unsplash-1.jpg"
        alt="perfume"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">COCO</div>
        <p className="text-gray-700 text-base">
          Coco Perfume a timeless blend of elegance, luxury, and long-lasting fragrance
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">324$</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Buy Now</span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="rounded overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      <img
        className="w-full h-56 object-cover"
        src="https://i.ibb.co.com/chc7Fz2G/laura-chouette-m-KGHmh-Qh-K8-unsplash.jpg"
        alt="perfume"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">L’Interdit</div>
        <p className="text-gray-700 text-base">
          L’Interdit – a daring fusion of elegance and sensuality that celebrates fearless femininity.
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">412$</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Buy Now</span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="rounded overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      <img
        className="w-full h-56 object-cover"
        src="https://i.ibb.co.com/7xPGVzG6/vishal-banik-Oh-Bmys-UAjio-unsplash.jpg"
        alt="perfume"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Perfume</div>
        <p className="text-gray-700 text-base">
          L’Interdit – a daring fusion of elegance and sensuality that celebrates fearless femininity.
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">324$</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Buy Now</span>
      </div>
    </div>

    {/* Card 4 */}
    <div className="rounded overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      <img
        className="w-full h-56 object-cover"
        src="https://i.ibb.co.com/60XmqsYg/karly-jones-4i9ef6x-U738-unsplash-1.jpg"
        alt="perfume"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Perfume</div>
        <p className="text-gray-700 text-base">
          L’Interdit – a daring fusion of elegance and sensuality that celebrates fearless femininity.
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">324$</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Buy Now</span>
      </div>
    </div>
  </div>
</div>
    );
};

export default HeroSection;