import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Mail, Star, Users, Plane, Train, Car, Facebook, Instagram, Twitter, Youtube, Menu, X } from 'lucide-react';
import PtLogo from './assets/images/Logo.png'

const PriyaTravelsWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    travelers: '',
    message: ''
  });

  // Set SEO meta tags
  useEffect(() => {
    document.title = "Priya Travels Coimbatore - 40+ Years of Trusted Pilgrimage & Tour Services Since 1984";

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: 'Priya Travels - Premium pilgrimage tours, spiritual journeys, educational tours since 1984. Domestic & international travel with 3-star accommodations. Book Char Dham, Golden Triangle, South India temple tours.' },
      { name: 'keywords', content: 'Priya Travels, Coimbatore travel agency, pilgrimage tours, spiritual tours, Char Dham Yatra, temple tours, educational tours, India travel, international tours, travel packages' },
      { property: 'og:title', content: 'Priya Travels - Explore the Divine and Indulge in Delight' },
      { property: 'og:description', content: 'Your trusted travel partner for pilgrimage and leisure tours since 1984. Premium comfort, spiritual guidance, and memorable experiences.' },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ];

    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.property = tag.property;
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });
  }, []);

  const tourPackages = [
    {
      id: 1,
      title: "Char Dham Yatra 2025",
      duration: "12 Days / 11 Nights",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1582652546897-0d71aa8b29c0?w=400&h=300&fit=crop",
      description: "Sacred journey to Yamunotri, Gangotri, Kedarnath & Badrinath",
      highlights: ["Helicopter services available", "3-star accommodation", "All meals included"],
      dates: "May 2025 - Oct 2025"
    },
    {
      id: 2,
      title: "Golden Triangle with Varanasi",
      duration: "8 Days / 7 Nights",
      price: "₹28,000",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      description: "Delhi, Agra, Jaipur with spiritual Varanasi experience",
      highlights: ["Taj Mahal sunrise", "Ganga Aarti ceremony", "Palace stays"],
      dates: "Year Round"
    },
    {
      id: 3,
      title: "South India Temple Circuit",
      duration: "10 Days / 9 Nights",
      price: "₹38,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Madurai, Rameswaram, Kanyakumari, Tirupati temples",
      highlights: ["Temple darshan arrangements", "Cultural performances", "Local cuisine"],
      dates: "Nov 2025 - Mar 2026"
    },
    {
      id: 4,
      title: "Himalayas Spiritual Retreat",
      duration: "7 Days / 6 Nights",
      price: "₹32,000",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Rishikesh, Haridwar with yoga and meditation",
      highlights: ["River rafting", "Yoga sessions", "Meditation workshops"],
      dates: "Sep 2025 - Nov 2025"
    },
    {
      id: 5,
      title: "International: Nepal Buddhist Circuit",
      duration: "6 Days / 5 Nights",
      price: "₹55,000",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&h=300&fit=crop",
      description: "Lumbini, Kathmandu Buddhist monasteries and temples",
      highlights: ["Birth place of Buddha", "Ancient monasteries", "Cultural immersion"],
      dates: "Oct 2025 - Apr 2026"
    },
    {
      id: 6,
      title: "Educational Tour: Kerala Backwaters",
      duration: "5 Days / 4 Nights",
      price: "₹22,000",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      description: "Perfect for college groups and educational institutions",
      highlights: ["Houseboat experience", "Spice plantation visit", "Cultural programs"],
      dates: "Dec 2025 - Feb 2026"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Krishnan",
      location: "Chennai",
      rating: 5,
      text: "Priya Travels made our Char Dham Yatra absolutely memorable. Their attention to detail and spiritual guidance throughout the journey was exceptional. The accommodation and food arrangements were perfect.",
      tour: "Char Dham Yatra"
    },
    {
      name: "Dr. Meera Sharma",
      location: "Bangalore",
      rating: 5,
      text: "As a university professor, I've organized multiple educational tours with Priya Travels. Their professionalism and student-friendly approach makes them our preferred travel partner.",
      tour: "Educational Tour"
    },
    {
      name: "Anand & Priya",
      location: "Coimbatore",
      rating: 5,
      text: "40 years of trust! We've been traveling with Priya Travels since 1985. From our honeymoon to family pilgrimages, they've always exceeded our expectations.",
      tour: "Multiple Tours"
    },
    {
      name: "Suresh Patel",
      location: "Mumbai",
      rating: 5,
      text: "The South India Temple Circuit was spiritually enriching. Every temple darshan was well-organized and the local guides were knowledgeable about the history and significance.",
      tour: "South India Temple Circuit"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookingSubmit = () => {
    // Basic validation
    if (!bookingForm.name.trim() || !bookingForm.phone.trim() || !bookingForm.travelers.trim()) {
      alert('Please fill in all required fields (Name, Phone, Number of Travelers)');
      return;
    }

    const tourName = selectedTour ? selectedTour.title : 'General Inquiry';
    const message = `Hello Priya Travels,

I would like to book the following tour:
*${tourName}*

My Details:
• Name: ${bookingForm.name}
• Phone: ${bookingForm.phone}
• Email: ${bookingForm.email}
• Number of Travelers: ${bookingForm.travelers}
• Additional Message: ${bookingForm.message}

Please contact me with further details.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setIsBookingModalOpen(false);
    setBookingForm({ name: '', phone: '', email: '', travelers: '', message: '' });
  };

  const openBookingModal = (tour = null) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={PtLogo} alt="Priya Travels Logo" className="h-12 w-12 rounded-full" />
              <div className="ml-3">
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  PRIYA TRAVELS
                </h1>
                <p className="text-xs text-gray-600">Since 1984</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors">Tours</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors">Reviews</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors">Contact</button>
                <button onClick={() => openBookingModal()} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Home</button>
              <button onClick={() => scrollToSection('tours')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Tours</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">About</button>
              <button onClick={() => scrollToSection('reviews')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" alt="Spiritual Journey" className="w-full h-full object-cover mix-blend-overlay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Explore the <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Divine</span>
              <br />and Indulge in <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Delight</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A Travel Partner for Both Pilgrimage and The Pleasure Seeker within You
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                🏆 40+ Years of Excellence
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                ✈️ Domestic & International
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                🕉️ Spiritual Journeys
              </div>
            </div>
            <button onClick={() => scrollToSection('tours')} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl">
              Explore Our Tours
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Priya Travels?
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Since 1984, we've been crafting spiritual journeys and memorable experiences with unmatched dedication and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">40+ Years Experience</h4>
              <p className="text-gray-600">Four decades of trusted service in pilgrimage and leisure travel, serving thousands of satisfied customers.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Premium Comfort</h4>
              <p className="text-gray-600">Minimum 3-star accommodations, quality meals, and comfortable transportation for all our tours.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Spiritual Focus</h4>
              <p className="text-gray-600">Specializing in pilgrimage tours with deep spiritual guidance and cultural immersion experiences.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center bg-white p-6 rounded-xl shadow-md">
              <Plane className="text-amber-600 mr-4" size={32} />
              <div>
                <h5 className="font-bold text-gray-800">Multiple Transport</h5>
                <p className="text-gray-600">Flights, Trains & Cabs</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md">
              <Users className="text-amber-600 mr-4" size={32} />
              <div>
                <h5 className="font-bold text-gray-800">Group & Individual</h5>
                <p className="text-gray-600">Tours for all party sizes</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md">
              <Calendar className="text-amber-600 mr-4" size={32} />
              <div>
                <h5 className="font-bold text-gray-800">Educational Tours</h5>
                <p className="text-gray-600">University & college groups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              2025 Tour Packages
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Carefully crafted spiritual journeys and cultural experiences for the year ahead
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tour.price}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h4>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="flex items-center text-amber-600 mb-4">
                    <Calendar size={20} className="mr-2" />
                    <span className="font-semibold">{tour.duration}</span>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-bold text-gray-800 mb-2">Highlights:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <Star size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Available:</strong> {tour.dates}
                  </div>

                  <button
                    onClick={() => openBookingModal(tour)}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-bold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              What Our Travelers Say
            </h3>
            <p className="text-xl text-gray-700">Testimonials from our 40+ years of happy customers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">{testimonial.name}</h5>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                <div className="text-sm text-amber-600 font-semibold">
                  Tour: {testimonial.tour}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-300">Ready to embark on your spiritual journey? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="text-amber-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-amber-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@priyatravels.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-amber-400 mr-4 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">123 Travel Street<br />Coimbatore, Tamil Nadu<br />India - 641001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="text-xl font-bold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Quick Contact</h4>
              <button
                onClick={() => openBookingModal()}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl"
              >
                Book Your Journey Now
              </button>

              <div className="mt-8 p-6 bg-gray-800 rounded-2xl">
                <h5 className="text-xl font-bold mb-4 text-amber-400">Business Hours</h5>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=50&h=50&fit=crop&crop=center" alt="Priya Travels" className="h-12 w-12 rounded-full mr-3" />
              <div>
                <h6 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  PRIYA TRAVELS
                </h6>
                <p className="text-xs text-gray-400">Since 1984</p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Explore the Divine and Indulge in Delight - Your trusted travel partner for over 40 years
            </p>

            <div className="border-t border-gray-800 pt-4">
              <p className="text-gray-500">
                © 2025 Priya Travels. All rights reserved. | Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-bold text-gray-800">
                {selectedTour ? `Book ${selectedTour.title}` : 'Contact Us'}
              </h4>
              <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            {selectedTour && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl mb-6">
                <h5 className="font-bold text-gray-800">{selectedTour.title}</h5>
                <p className="text-gray-600 text-sm">{selectedTour.duration}</p>
                <p className="text-amber-600 font-bold">{selectedTour.price}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Travelers *</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={bookingForm.travelers}
                  onChange={(e) => setBookingForm({ ...bookingForm, travelers: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter number of travelers"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Message</label>
                <textarea
                  rows="3"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              <button
                onClick={handleBookingSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-bold hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Send WhatsApp Message
              </button>
            </div>

            <p className="text-gray-500 text-sm text-center mt-4">
              This will redirect you to WhatsApp with your booking details
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriyaTravelsWebsite;