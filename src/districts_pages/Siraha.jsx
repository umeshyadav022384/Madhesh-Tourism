import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "../assets/images/sirahadistrictimages/hero.jpg";
import salhesh from "../assets/images/sirahadistrictimages/salheshmandir.jpg";
import  durgasthan from "../assets/images/sirahadistrictimages/durgasthan.jpg"
import sarshwarnath from "../assets/images/sirahadistrictimages/sarshwarnath.jpg"
import kali from "../assets/images/sirahadistrictimages/kali.jpg"
import makhanbhoj from "../assets/images/sirahadistrictimages/makhanbhoj.jpg"
import hotelbatika from "../assets/images/sirahadistrictimages/hotelbatika.jpg"
import hotelvishal from "../assets/images/sirahadistrictimages/hotelvishal.jpg"


const Siraha = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const temples = [
    {
      name: " Salhesh Mandir (Gahbar)",
      location: "Lahan-12",
      deity: "Goddess sahlesh",
      description:
        "A significant historical and religious site dedicated to the legendary King Sahles",
      image: salhesh,
    },
    {
      name: "Bhagawatisthan Durgamandir",
      location: "Siraha Madar",
      deity: "Durga",
      description: "Durga Sthan(Madar Bhagawatisthan Durgamandir) is a prominent Hindu temple located in Madar, a village in the Siraha District of Nepal, situated near the Indian border (Jayanagar). It serves as a central place of worship, especially during festivals like Durga Puja.A",
      image:durgasthan
    },
    {
      name: "Sarshwarnath Mahadev Temple",
      location: "Sarshwar, Siraha Municipality-12",
      deity: "Lord Shiva",
      description: "It is considered an important religious site, attracting numerous devotees, particularly from surrounding districts like Dhanusha and Saptari.Festivals .The temple is exceptionally crowded during the holy month of Shrawan, with special worship, rituals,and prayers offered every Monday.",
      image:sarshwarnath 
    },
    {
      name: "Kali Mandir",
      location: "Siraha",
      deity: "Goddess Kali",
      description: "Popular temple during Dashain festival",
      image:kali
    },
  ];

  const hotels = [
    {
      name: "Hotel Makhan Bhog (Lahan)",
      type: "Mid-range",
      price: "NPR 2000-4000",
      rating: 4.9,
      features: ["Free WiFi", "Restaurant", "Parking"],
      image:makhanbhoj,
    },
    {
      name: "hotel batika",
      type: "Budget",
      price: "NPR 800-1500",
      rating: 3.8,
      features: ["Hot Water", "TV", "Room Service"],
      image: hotelbatika,
    },
    {
      name: "hotel Vishal",
      type: "Premium",
      price: "NPR 5000-8000",
      rating: 4.7,
      features: ["AC", "Restaurant", "Gym", "Spa"],
      image:hotelvishal,
    },
    {
      name: "Lahan Guest House",
      type: "Budget",
      price: "NPR 600-1200",
      rating: 3.5,
      features: ["Free WiFi", "Parking"],
      image:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500",
    },
  ];

  const places = [
    {
      name: "Lahan Bazar",
      description: "Famous market area for shopping and local products",
      icon: "🛍️",
    },
    {
      name: "Siraha Cricket Ground",
      description: "Popular sports venue hosting local matches",
      icon: "🏏",
    },
    {
      name: "Ghoda Ghodi Tal",
      description: "Scenic pond perfect for evening walks",
      icon: "🌊",
    },
    {
      name: "Siraha Park",
      description: "Family-friendly park with children's play area",
      icon: "🌳",
    },
  ];

  const restaurants = [
    {
      name: "Madhesh Bhojanalaya",
      cuisine: "Local Nepali",
      price: "NPR 200-500",
    },
    {
      name: "Saffron Restaurant",
      cuisine: "Multi-cuisine",
      price: "NPR 300-800",
    },
    { name: "Lahan Fast Food", cuisine: "Fast Food", price: "NPR 100-300" },
  ];

  return (
    <div className="min-h-screen "style={{ backgroundColor: "#c4cac9"}}>
      {/* Hero Section with Soft Gradient */}
      <div className="relative h-125 overflow-hidden">
        <img
          src={heroImage}
          alt="Siraha district"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Very light gradient at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-6">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
          >
            Siraha District
          </h1>
          <p
            className="text-xl md:text-2xl max-w-2xl mb-8"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
          >
            Discover the cultural heart of Madhesh Province
          </p>
          <Link
            to="/"
            className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Stats Section - Soft Colors */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 -mt-20 relative z-30">
          {[
            {
              label: "Population",
              value: "100,000+",
              icon: "👥",
              color: "from-emerald-400 to-emerald-600",
            },
            {
              label: "Area",
              value: "1,188 km²",
              icon: "🗺️",
              color: "from-teal-400 to-teal-600",
            },
            {
              label: "Headquarters",
              value: "Siraha",
              icon: "📍",
              color: "from-emerald-500 to-emerald-700",
            },
            {
              label: "Language",
              value: "Maithili",
              icon: "🗣️",
              color: "from-teal-500 to-teal-700",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer group`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section - Soft Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-16 transform hover:shadow-2xl transition-all duration-500 border border-emerald-100">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
            <span className="text-4xl">📖</span> About Siraha
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Siraha is a historic district in Madhesh Province, known for its
            rich cultural heritage, agricultural prosperity, and religious
            significance. The district offers a unique blend of traditional
            Maithili culture and modern development.
          </p>
        </div>

        {/* Temples Section - Soft Green Theme */}
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 flex items-center gap-2">
          <span className="text-4xl">🛕</span> Religious Sites
          <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full ml-4">
            {temples.length}+ Temples
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {temples.map((temple, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-emerald-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {temple.name}
                </h3>
                <p className="text-slate-600 mb-2 flex items-center gap-1">
                  <span>📍</span> {temple.location}
                </p>
                <p className="text-emerald-600 text-sm font-medium">
                  {temple.deity}
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  {temple.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hotels Section - Soft Blue Theme */}
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 flex items-center gap-2">
          <span className="text-4xl">🏨</span> Accommodations
          <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full ml-4">
            Best Hotels
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-emerald-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-500 font-bold">
                    ⭐ {hotel.rating}
                  </span>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {hotel.type}
                  </span>
                </div>
                <p className="text-emerald-600 font-bold mb-3">{hotel.price}</p>
                <div className="flex flex-wrap gap-2">
                  {hotel.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Must-Visit Places - Soft Gradient Cards */}
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 flex items-center gap-2">
          <span className="text-4xl">📍</span> Must-Visit Places
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl border border-emerald-100"
            >
              <div className="text-5xl mb-3">{place.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {place.name}
              </h3>
              <p className="text-slate-600 text-sm">{place.description}</p>
            </div>
          ))}
        </div>

        {/* Restaurants Section */}
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 flex items-center gap-2">
          <span className="text-4xl">🍽️</span> Where to Eat
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {restaurants.map((restaurant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer border border-emerald-100"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition">
                  {restaurant.name}
                </h3>
                <p className="text-slate-500">{restaurant.cuisine}</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-600 font-bold">{restaurant.price}</p>
                <p className="text-amber-500 text-sm">⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section - Soft Gradient */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-10 text-white text-center transform hover:scale-[1.02] transition-all duration-500 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <span>📞</span> Plan Your Visit to Siraha
          </h2>
          <p className="text-xl mb-6 text-emerald-50">
            Need more information about Siraha district?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
              📞 Contact Tourism Office
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              🗺️ View on Map
            </button>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-emerald-400">
            <div className="flex items-center justify-center gap-2">
              <span>📞</span> 9812345678
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>✉️</span> siraha@tourism.gov.np
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🌐</span> www.siraha.tourism
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siraha;
