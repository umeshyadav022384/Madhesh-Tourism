import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import heroImage from "../assets/images/sirahadistrictimages/hero.jpg";
import salhesh from "../assets/images/sirahadistrictimages/salheshmandir.jpg";
import durgasthan from "../assets/images/sirahadistrictimages/durgasthan.jpg";
import sarshwarnath from "../assets/images/sirahadistrictimages/sarshwarnath.jpg";
import kali from "../assets/images/sirahadistrictimages/kali.jpg";
import makhanbhoj from "../assets/images/sirahadistrictimages/makhanbhoj.jpg";
import hotelbatika from "../assets/images/sirahadistrictimages/hotelbatika.jpg";
import hotelvishal from "../assets/images/sirahadistrictimages/hotelvishal.jpg";
import WeatherWidget from "../services/weatherwidget";

const Siraha = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for scroll-triggered elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const temples = [
    {
      name: "Salhesh Mandir (Gahbar)",
      location: "Lahan-12",
      deity: "Goddess Salhesh",
      description:
        "A significant historical and religious site dedicated to the legendary King Salhesh",
      image: salhesh,
    },
    {
      name: "Bhagawatisthan Durgamandir",
      location: "Siraha Madar",
      deity: "Durga",
      description:
        "Durga Sthan is a prominent Hindu temple located in Madar, a village in the Siraha District of Nepal",
      image: durgasthan,
    },
    {
      name: "Sarshwarnath Mahadev Temple",
      location: "Sarshwar, Siraha Municipality-12",
      deity: "Lord Shiva",
      description:
        "An important religious site attracting numerous devotees from surrounding districts",
      image: sarshwarnath,
    },
    {
      name: "Kali Mandir",
      location: "Siraha",
      deity: "Goddess Kali",
      description: "Popular temple during Dashain festival",
      image: kali,
    },
  ];

  const hotels = [
    {
      name: "Hotel Makhan Bhog (Lahan)",
      type: "Mid-range",
      price: "NPR 2000-4000",
      rating: 4.9,
      features: ["Free WiFi", "Restaurant", "Parking"],
      image: makhanbhoj,
    },
    {
      name: "Hotel Batika",
      type: "Budget",
      price: "NPR 800-1500",
      rating: 3.8,
      features: ["Hot Water", "TV", "Room Service"],
      image: hotelbatika,
    },
    {
      name: "Hotel Vishal",
      type: "Premium",
      price: "NPR 5000-8000",
      rating: 4.7,
      features: ["AC", "Restaurant", "Gym", "Spa"],
      image: hotelvishal,
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
      gradient: "from-amber-500 to-orange-500",
    },
    {
      name: "Siraha Cricket Ground",
      description: "Popular sports venue hosting local matches",
      icon: "🏏",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Ghoda Ghodi Tal",
      description: "Scenic pond perfect for evening walks",
      icon: "🌊",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Siraha Park",
      description: "Family-friendly park with children's play area",
      icon: "🌳",
      gradient: "from-lime-500 to-green-500",
    },
  ];

  const restaurants = [
    {
      name: "Madhesh Bhojanalaya",
      cuisine: "Local Nepali",
      price: "NPR 200-500",
      rating: 4.5,
    },
    {
      name: "Saffron Restaurant",
      cuisine: "Multi-cuisine",
      price: "NPR 300-800",
      rating: 4.3,
    },
    {
      name: "Lahan Fast Food",
      cuisine: "Fast Food",
      price: "NPR 100-300",
      rating: 4.0,
    },
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Custom section component with scroll animation
  const Section = ({ id, title, subtitle, icon, children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.2,
      margin: "-50px",
    });

    return (
      <motion.section
        ref={ref}
        id={id}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="container mx-auto px-6 py-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <motion.div
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {icon}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">{subtitle}</p>
        </motion.div>
        {children}
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        ></motion.div>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION WITH PARALLAX */}
      {/* ============================================ */}
      <div ref={targetRef} className="relative h-screen w-full overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Siraha district"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale, y }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 text-white/20 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-10 text-white/20 text-4xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🌟
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 h-full container mx-auto px-6">
          {/* Weather Widget */}
          <motion.div
            className="absolute top-24 md:left-0 max-w-sm w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
              <WeatherWidget district="Siraha" />
            </div>
          </motion.div>

          {/* Center Hero Text */}
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent"
              animate={{ scale: [0.95, 1] }}
              transition={{ duration: 0.8 }}
            >
              Siraha District
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl max-w-2xl mx-auto text-emerald-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Discover the cultural heart of Madhesh Province
            </motion.p>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="/"
                className="group relative overflow-hidden bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">← Back to Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <button
                onClick={() => scrollToSection("about")}
                className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Explore More ↓
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {/* ============================================ */}
      {/* STATS SECTION - FADE IN ON SCROLL */}
      {/* ============================================ */}
      <motion.div
        className="container mx-auto px-6 -mt-20 relative z-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        variants={fadeInUp}
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              label: "Population",
              value: "100,000+",
              icon: "👥",
              description: "Thriving community",
              color: "from-emerald-500 to-emerald-700",
            },
            {
              label: "Area",
              value: "1,188 km²",
              icon: "🗺️",
              description: "Rich landscapes",
              color: "from-teal-500 to-teal-700",
            },
            {
              label: "Headquarters",
              value: "Siraha",
              icon: "📍",
              description: "Administrative center",
              color: "from-emerald-500 to-emerald-700",
            },
            {
              label: "Language",
              value: "Maithili",
              icon: "🗣️",
              description: "Cultural heritage",
              color: "from-teal-500 to-teal-700",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`group relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center shadow-xl overflow-hidden cursor-pointer`}
            >
              <motion.div
                className="text-5xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-3xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm opacity-90 mt-1">{stat.label}</div>
              <div className="text-xs opacity-70 mt-2">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ============================================ */}
      {/* ABOUT SECTION - SPLIT ANIMATION */}
      {/* ============================================ */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-sm mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              About District
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Siraha
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Siraha is a historic district in Madhesh Province, known for its
              rich cultural heritage, agricultural prosperity, and religious
              significance. The district offers a unique blend of traditional
              Maithili culture and modern development.
            </p>
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {["🛕 Heritage", "🌾 Agriculture", "🎭 Culture"].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm text-emerald-300 border border-white/20"
                  >
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", label: "Established", value: "1962" },
                { icon: "🏛️", label: "VDCs/Municipalities", value: "17+" },
                { icon: "📊", label: "Literacy Rate", value: "68%" },
                { icon: "🌾", label: "Main Crops", value: "Paddy, Wheat" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="backdrop-blur-xl bg-white/10 rounded-xl p-4 text-white text-center border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="font-bold mt-1">{item.label}</div>
                  <div className="text-sm opacity-80">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEMPLES SECTION - STAGGERED CARDS */}
      {/* ============================================ */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            🛕
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Religious Sites
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Discover the sacred temples and spiritual heritage of Siraha
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {temples.map((temple, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredCard === idx ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {temple.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                  📍 {temple.location}
                </p>
                <p className="text-emerald-400 text-sm font-medium">
                  {temple.deity}
                </p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {temple.description}
                </p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* HOTELS SECTION */}
      {/* ============================================ */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          >
            🏨
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Accommodations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Comfortable stays for every budget
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {hotels.map((hotel, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">⭐ {hotel.rating}</span>
                  <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                    {hotel.type}
                  </span>
                </div>
                <p className="text-emerald-400 font-bold mb-3">{hotel.price}</p>
                <div className="flex flex-wrap gap-2">
                  {hotel.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* MUST-VISIT PLACES - 3D HOVER EFFECT */}
      {/* ============================================ */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
          >
            📍
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Must-Visit Places
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore the hidden gems of Siraha
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {places.map((place, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl p-6 text-center cursor-pointer bg-gradient-to-br ${place.gradient}`}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="text-6xl mb-4 relative z-10"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {place.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                {place.name}
              </h3>
              <p className="text-white/80 text-sm relative z-10">
                {place.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* RESTAURANTS SECTION */}
      {/* ============================================ */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="text-5xl mb-4 inline-block"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
          >
            🍽️
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Where to Eat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Authentic local cuisine and flavors
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {restaurants.map((restaurant, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl flex items-center justify-between group cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-gray-400">{restaurant.cuisine}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(Math.floor(restaurant.rating))].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 font-bold text-xl">
                  {restaurant.price}
                </p>
                <span className="text-gray-500 text-sm">per person</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* CONTACT SECTION - PARALLAX EFFECT */}
      {/* ============================================ */}
      <motion.section
        className="relative py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-900"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            📞 Plan Your Visit to Siraha
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-emerald-100"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Need more information about Siraha district?
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            variants={staggerContainer}
          >
            <motion.button
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              <span className="relative z-10">📞 Contact Tourism Office</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
            <motion.button
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300 backdrop-blur-sm"
            >
              🗺️ View on Map
            </motion.button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            variants={staggerContainer}
          >
            {[
              { icon: "📞", text: "9812345678" },
              { icon: "✉️", text: "siraha@tourism.gov.np" },
              { icon: "🌐", text: "www.siraha.tourism" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex items-center justify-center gap-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Siraha;
