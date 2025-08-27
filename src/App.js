import React, { useState, useEffect } from 'react';
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
    tourType: '',
    message: ''
  });

  // Comprehensive SEO meta tags covering all services
  useEffect(() => {
    // Enhanced SEO Title covering all services
    document.title = "Priya Travels Coimbatore - Best Travel Agency | Honeymoon, Educational, Group & Pilgrimage Tours Since 1984";

    // Enhanced meta tags with comprehensive keyword targeting
    const metaTags = [
      {
        name: 'description',
        content: 'Priya Travels Coimbatore - Leading travel agency since 1984. Book honeymoon packages, educational tours, group trips, pilgrimage tours, customized travel packages. Domestic & international tours with 3-star accommodations. Best travel agent in Tamil Nadu.'
      },
      {
        name: 'keywords',
        content: 'Priya Travels Coimbatore, best travel agency Tamil Nadu, honeymoon packages India, educational tours schools colleges, group tour operator, pilgrimage tours, customized travel packages, domestic tours India, international tour packages, Char Dham Yatra, Kerala honeymoon, Golden Triangle tours, South India packages, travel agent Coimbatore, holiday packages, family tours, corporate tours, student tours, religious tours, adventure tours, cultural tours, heritage tours'
      },
      { property: 'og:title', content: 'Priya Travels - Complete Travel Solutions | Honeymoon, Group & Educational Tours Since 1984' },
      { property: 'og:description', content: 'Trusted travel agency in Coimbatore offering honeymoon packages, educational tours, group trips, pilgrimage tours, and customized travel solutions. 40+ years of excellence.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://priyatravels.com' },
      { property: 'og:image', content: 'https://priyatravels.com/og-image.jpg' },
      { property: 'og:site_name', content: 'Priya Travels' },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Priya Travels - Complete Travel Agency Services Since 1984' },
      { name: 'twitter:description', content: 'Book honeymoon packages, educational tours, group trips with Coimbatore\'s most trusted travel agency.' },
      { name: 'author', content: 'Priya Travels' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'geo.region', content: 'IN-TN' },
      { name: 'geo.placename', content: 'Coimbatore' },
      { name: 'geo.position', content: '11.0168;76.9558' },
      { name: 'ICBM', content: '11.0168, 76.9558' },
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

    // Enhanced Structured Data for comprehensive travel services
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TravelAgency",
          "@id": "https://priyatravels.com/#organization",
          "name": "Priya Travels",
          "alternateName": "Priya Travels Coimbatore",
          "url": "https://priyatravels.com",
          "logo": "https://priyatravels.com/logo.png",
          "image": "https://priyatravels.com/priya-travels-office.jpg",
          "description": "Leading travel agency in Coimbatore since 1984, offering honeymoon packages, educational tours, group trips, pilgrimage tours, and customized travel solutions across India and internationally.",
          "foundingDate": "1984",
          "slogan": "Explore the Divine and Indulge in Delight",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Travel Street",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Tamil", "Hindi"]
          },
          "sameAs": [
            "https://facebook.com/priyatravels",
            "https://instagram.com/priyatravels",
            "https://youtube.com/priyatravels"
          ],
          "priceRange": "₹₹",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
          "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00, Su 10:00-16:00",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Travel Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Honeymoon Packages",
                  "description": "Romantic honeymoon tours to exotic destinations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational Tours",
                  "description": "Educational trips for schools, colleges and universities"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Group Tours",
                  "description": "Group travel packages for families and corporates"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pilgrimage Tours",
                  "description": "Spiritual and religious tours to sacred destinations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Customized Tours",
                  "description": "Tailor-made travel packages as per customer preferences"
                }
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://priyatravels.com/#website",
          "url": "https://priyatravels.com",
          "name": "Priya Travels - Complete Travel Agency Services Coimbatore",
          "publisher": {
            "@id": "https://priyatravels.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://priyatravels.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Add structured data to head
    let structuredDataScript = document.getElementById('structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://priyatravels.com';

  }, []);

  const tourPackages = [
    {
      id: 1,
      title: "Romantic Honeymoon Package - Kerala Backwaters",
      duration: "6 Days / 5 Nights",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      description: "Perfect honeymoon package with houseboat stay, romantic dinners, and scenic locations",
      highlights: ["Private houseboat experience", "Candlelight dinners", "Couple spa treatments", "Romantic photography", "Premium resorts"],
      dates: "Year Round",
      destinations: ["Alleppey", "Kumarakom", "Munnar", "Cochin"],
      category: "honeymoon",
      targetAudience: "newlyweds"
    },
    {
      id: 2,
      title: "Educational Tour - Golden Triangle for Students",
      duration: "8 Days / 7 Nights",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      description: "Educational tour covering Delhi, Agra, Jaipur with historical learning and cultural exposure",
      highlights: ["Professional educational guide", "Student-friendly accommodation", "Historical monument visits", "Cultural workshops", "Safety measures"],
      dates: "Oct 2025 - Mar 2026",
      destinations: ["Delhi", "Agra", "Jaipur", "Mathura"],
      category: "educational",
      targetAudience: "students, schools, colleges"
    },
    {
      id: 3,
      title: "Group Tour - Goa Beach Holiday",
      duration: "5 Days / 4 Nights",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      description: "Perfect group holiday with beaches, water sports, nightlife, and group activities",
      highlights: ["Beach resort accommodation", "Water sports activities", "Group dining experiences", "Sightseeing tours", "Evening entertainment"],
      dates: "Year Round",
      destinations: ["North Goa", "South Goa", "Panaji", "Old Goa"],
      category: "group-tour",
      targetAudience: "friends, families, corporates"
    },
    {
      id: 4,
      title: "Char Dham Pilgrimage Yatra",
      duration: "12 Days / 11 Nights",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1582652546897-0d71aa8b29c0?w=400&h=300&fit=crop",
      description: "Sacred pilgrimage to Yamunotri, Gangotri, Kedarnath & Badrinath with helicopter services",
      highlights: ["Helicopter services available", "3-star accommodation", "All vegetarian meals", "Experienced spiritual guide", "Medical assistance"],
      dates: "May 2025 - Oct 2025",
      destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      category: "pilgrimage",
      targetAudience: "devotees, families"
    },
    {
      id: 5,
      title: "International Tour - Dubai Shopping & Sightseeing",
      duration: "6 Days / 5 Nights",
      price: "₹65,000",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      description: "Complete Dubai experience with luxury hotels, shopping, desert safari, and modern attractions",
      highlights: ["5-star hotel accommodation", "Desert safari adventure", "Dubai Mall shopping", "Burj Khalifa visit", "Visa assistance included"],
      dates: "Year Round",
      destinations: ["Dubai", "Abu Dhabi", "Sharjah"],
      category: "international",
      targetAudience: "families, couples, groups"
    },
    {
      id: 6,
      title: "Customized South India Heritage Tour",
      duration: "Flexible Duration",
      price: "₹Starting 20,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Fully customizable tour covering temples, heritage sites, and cultural experiences across South India",
      highlights: ["Completely customizable", "Personal tour guide", "Heritage hotel options", "Cultural experiences", "Flexible itinerary"],
      dates: "Year Round",
      destinations: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
      category: "customized",
      targetAudience: "all travelers"
    }
  ];

  const testimonials = [
    {
      name: "Arjun & Priya",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Our Kerala honeymoon package was absolutely perfect! Priya Travels arranged everything beautifully - from the romantic houseboat stay to the candlelight dinners. The attention to detail made our honeymoon truly memorable. Highly recommend for newlyweds!",
      tour: "Kerala Honeymoon Package 2024",
      verified: true,
      date: "November 2024",
      tourType: "honeymoon"
    },
    {
      name: "Dr. Meera Sharma",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "As an educational coordinator, I've organized multiple student tours with Priya Travels. Their expertise in handling large student groups, safety measures, and educational value makes them our preferred travel partner. The Golden Triangle educational tour was exceptional.",
      tour: "Educational Tours",
      verified: true,
      date: "December 2024",
      tourType: "educational"
    },
    {
      name: "Rajesh Kumar & Family",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
      text: "We've been traveling with Priya Travels for over 15 years for both family vacations and pilgrimage tours. Their service consistency and care for customers is unmatched. From Goa beach holidays to Char Dham Yatra, every trip has been perfectly organized.",
      tour: "Multiple Family & Pilgrimage Tours",
      verified: true,
      date: "Ongoing since 2010",
      tourType: "family-pilgrimage"
    },
    {
      name: "Suresh & Corporate Team",
      location: "Madurai, Tamil Nadu",
      rating: 5,
      text: "Organized our company's annual group tour to Dubai through Priya Travels. The international expertise, visa assistance, and group coordination was flawless. All 25 team members had an amazing experience. Best travel agency for corporate group tours.",
      tour: "Dubai Corporate Group Tour 2024",
      verified: true,
      date: "October 2024",
      tourType: "corporate-group"
    }
  ];

  const services = [
    {
      title: "Pilgrimage Tours",
      icon: "🕉️",
      description: "Spiritual journeys to sacred destinations with comfortable accommodation and guides",
      keywords: ["pilgrimage tours", "spiritual tours", "religious tours", "temple tours"],
      destinations: ["Char Dham", "South India Temples", "Vaishno Devi", "Tirupati", "Shirdi"]
    },
    {
      title: "Educational Tours",
      icon: "🎓",
      description: "Educational trips for schools, colleges with learning experiences and cultural exposure",
      keywords: ["educational tours", "student trips", "school tours", "college tours"],
      destinations: ["Golden Triangle", "Kerala", "Karnataka", "Historical Sites", "Science Centers"]
    },
    {
      title: "Group Tours",
      icon: "👥",
      description: "Group travel packages for families, friends, and corporate teams with group discounts",
      keywords: ["group tours", "family tours", "corporate tours", "group travel"],
      destinations: ["Goa", "Manali", "Ooty", "Kodaikanal", "Andaman", "International"]
    },
    {
      title: "Honeymoon Packages",
      icon: "💕",
      description: "Romantic getaways to exotic destinations with luxury accommodations and special arrangements",
      keywords: ["honeymoon packages", "romantic tours", "couple holidays"],
      destinations: ["Kerala", "Goa", "Maldives", "Dubai", "Thailand", "Bali"]
    },
    {
      title: "International Tours",
      icon: "✈️",
      description: "International holiday packages with visa assistance and complete travel solutions",
      keywords: ["international tours", "overseas packages", "foreign tours"],
      destinations: ["Dubai", "Singapore", "Thailand", "Nepal", "Sri Lanka", "Europe"]
    },
    {
      title: "Customized Tours",
      icon: "⚙️",
      description: "Tailor-made travel packages designed according to your preferences and budget",
      keywords: ["customized tours", "personalized packages", "tailor-made tours"],
      destinations: ["Any destination as per customer choice"]
    }
  ];

  const faqs = [
    {
      question: "What types of tours does Priya Travels offer in Coimbatore?",
      answer: "Priya Travels offers comprehensive travel services including honeymoon packages, educational tours for schools/colleges, group tours for families/corporates, pilgrimage tours, international tour packages, and fully customized tours. We cater to all types of travelers with 40+ years of experience."
    },
    {
      question: "Do you provide honeymoon packages from Coimbatore?",
      answer: "Yes, we specialize in romantic honeymoon packages to destinations like Kerala backwaters, Goa beaches, Maldives, Dubai, Thailand, and Bali. Our honeymoon packages include luxury accommodations, romantic dinners, couple spa treatments, and special arrangements for newlyweds."
    },
    {
      question: "Are educational tours safe for school and college students?",
      answer: "Absolutely! We have specialized protocols for educational tours including trained educational guides, student-friendly accommodations, 24/7 supervision, medical assistance, and safety measures. We've successfully organized educational tours for over 1000 educational institutions across South India."
    },
    {
      question: "What is included in your group tour packages?",
      answer: "Our group tour packages include accommodation in 3-star or better hotels, transportation (flights/trains/buses), meals as per itinerary, sightseeing with professional guides, all permits and entry fees. We offer special group discounts and customized itineraries for groups of 10 or more."
    },
    {
      question: "Do you handle visa and documentation for international tours?",
      answer: "Yes, we provide complete visa assistance and documentation support for international tours. Our experienced team helps with visa applications, travel insurance, foreign exchange, and all required paperwork to ensure hassle-free international travel."
    },
    {
      question: "Can you create completely customized tour packages?",
      answer: "Absolutely! We specialize in creating personalized tour packages based on your preferences, budget, dates, and interests. Whether it's a family vacation, adventure tour, cultural experience, or any special requirements, we design tours exactly as you envision."
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
    if (!bookingForm.name.trim() || !bookingForm.phone.trim() || !bookingForm.travelers.trim()) {
      alert('Please fill in all required fields (Name, Phone, Number of Travelers)');
      return;
    }

    const tourName = selectedTour ? selectedTour.title : 'General Inquiry';
    const message = `Hello Priya Travels Coimbatore,

I would like to inquire about the following tour:
*${tourName}*

My Details:
• Name: ${bookingForm.name}
• Phone: ${bookingForm.phone}
• Email: ${bookingForm.email}
• Number of Travelers: ${bookingForm.travelers}
• Tour Type Interest: ${bookingForm.tourType}
• Additional Message: ${bookingForm.message}

Please contact me with detailed information and pricing.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setIsBookingModalOpen(false);
    setBookingForm({ name: '', phone: '', email: '', travelers: '', tourType: '', message: '' });
  };

  const openBookingModal = (tour = null) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation with comprehensive keywords */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            <div className="flex items-center">
              <img
                src={PtLogo}
                alt="Priya Travels Coimbatore - Complete Travel Agency Logo"
                className="h-14 w-14 lg:h-16 lg:w-16 rounded-full shadow-md"
                loading="eager"
              />
              <div className="ml-4">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  PRIYA TRAVELS
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">Since 1984 - Complete Travel Solutions</p>
              </div>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  All Services
                </button>
                <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  Tour Packages
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  About Us
                </button>
                <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  Reviews
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base">
                  Contact
                </button>
                <button onClick={() => openBookingModal()} className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-base">
                  Book Tour
                </button>
              </div>
            </div>

            {/* Medium screens menu (tablets) */}
            <div className="hidden md:block lg:hidden">
              <div className="flex items-center space-x-2">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors text-sm">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors text-sm">Services</button>
                <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors text-sm">Tours</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors text-sm">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 px-3 py-2 font-medium transition-colors text-sm">Contact</button>
                <button onClick={() => openBookingModal()} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all text-sm">
                  Book Tour
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                {isMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">All Services</button>
              <button onClick={() => scrollToSection('tours')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Tour Packages</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">About Us</button>
              <button onClick={() => scrollToSection('reviews')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>


      {/* Enhanced Hero Section covering all services */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Complete Travel Solutions - Priya Travels Coimbatore"
            className="w-full h-full object-cover mix-blend-overlay"
            loading="eager"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Complete <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Travel Solutions</span><br />
              in <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Coimbatore</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Best Travel Agency Since 1984 | Pilgrimage • Educational • Group • Honeymoon • International Tours
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                🕉️ Spiritual Tours
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                🎓 Educational Tours
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                💕 Honeymoon Packages
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold">
                👥 Group & Corporate Tours
              </div>
            </div>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl"
              aria-label="Explore Our Complete Travel Services"
            >
              Explore All Travel Services
            </button>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Complete Travel Services in Coimbatore
            </h2>
            <h3 className="text-xl text-gray-700 max-w-3xl mx-auto">
              From Sacred Pilgrimages to Romantic Honeymoons & Educational Tours - Your Complete Travel Partner Since 1984
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Popular Destinations:</h4>
                  <p className="text-sm text-gray-600">{service.destinations.join(', ')}</p>
                </div>
                <button
                  onClick={() => openBookingModal()}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Priya Travels Coimbatore?
            </h2>
            <h3 className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leading Travel Agency in Tamil Nadu - Your Trusted Partner for All Types of Tours and Travel Solutions
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">40+ Years Excellence</h4>
              <p className="text-gray-600">Four decades of trusted service in travel and tourism. Successfully served over 100,000 happy customers with pilgrimage journeys, honeymoon packages, family tours and educational trips.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Complete Travel Solutions</h4>
              <p className="text-gray-600">From educational trips to pilgrimage journeys, honeymoon planning to corporate group tours - we handle everything. Premium accommodations, visa assistance, and 24/7 support.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h4>
              <p className="text-gray-600">Specialized teams for different travel types - honeymoon specialists, educational tour coordinators, pilgrimage guides, and international travel experts.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <span className="text-amber-600 mr-3 text-xl">🕉️</span>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Spiritual Tours</h5>
                <p className="text-gray-600 text-xs">Pilgrimage</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <span className="text-amber-600 mr-3 text-xl">🎓</span>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Educational Tours</h5>
                <p className="text-gray-600 text-xs">Schools & Colleges</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <span className="text-amber-600 mr-3 text-xl">💕</span>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Honeymoon Specialists</h5>
                <p className="text-gray-600 text-xs">Romantic Packages</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <span className="text-amber-600 mr-3 text-xl">👥</span>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Group Tours</h5>
                <p className="text-gray-600 text-xs">Family & Corporate</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
              <span className="text-amber-600 mr-3 text-xl">✈️</span>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">International</h5>
                <p className="text-gray-600 text-xs">Worldwide Destinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Featured Tour Packages 2025
            </h2>
            <h3 className="text-xl text-gray-700 max-w-3xl mx-auto">
              Carefully Curated Travel Experiences - Pilgrimage, Educational, Group, Honeymoon & International Tours
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <article key={tour.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={`${tour.title} - ${tour.destinations.join(', ')} Tour Package`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {tour.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {tour.category.replace('-', ' ')}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="flex items-center text-amber-600 mb-4">
                    <span className="mr-2 text-lg">📅</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Destinations:</h4>
                    <p className="text-sm text-gray-600 mb-2">{tour.destinations.join(' • ')}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Package Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-amber-500 mr-2 flex-shrink-0">⭐</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Target:</strong> {tour.targetAudience}
                  </div>

                  <button
                    onClick={() => openBookingModal(tour)}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-bold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105"
                    aria-label={`Book ${tour.title} Package`}
                  >
                    Book This Package
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Customer Reviews & Testimonials
            </h2>
            <h3 className="text-xl text-gray-700">
              Real Experiences from Our Happy Customers Across All Travel Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-gray-500 text-xs">{testimonial.date}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-lg">⭐</span>
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-600 font-semibold">
                    {testimonial.tour}
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                    {testimonial.tourType.replace('-', ' ')}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <h3 className="text-xl text-gray-700">
              Common Questions About Our Complete Travel Services in Coimbatore
            </h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openBookingModal()}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl"
            >
              Have More Questions? Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Contact Priya Travels Coimbatore
            </h2>
            <h3 className="text-xl text-gray-300">
              Ready for Your Next Adventure? Get in Touch for All Your Travel Needs!
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Coimbatore Office</h3>

              <address className="space-y-6 not-italic">
                <div className="flex items-center">
                  <span className="text-amber-400 mr-4 text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Call for Any Tour Booking</p>
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-400">+91 98765 43210</a><br />
                    <a href="tel:+919876543211" className="text-gray-300 hover:text-amber-400">+91 98765 43211</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-amber-400 mr-4 text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email for Tour Inquiries</p>
                    <a href="mailto:info@priyatravels.com" className="text-gray-300 hover:text-amber-400">info@priyatravels.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-amber-400 mr-4 mt-1 text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Priya Travels Head Office</p>
                    <p className="text-gray-300">
                      123 Travel Street, RS Puram<br />
                      Coimbatore, Tamil Nadu 641002<br />
                      India
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Near Brookefields Mall, Opposite HDFC Bank
                    </p>
                  </div>
                </div>
              </address>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Follow Our Travel Updates</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/priyatravels" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-110" aria-label="Follow us on Facebook">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/priyatravels" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-110" aria-label="Follow us on Instagram">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/priyatravels" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-110" aria-label="Subscribe to our YouTube channel">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Tour Inquiry</h3>
              <button
                onClick={() => openBookingModal()}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl mb-8"
              >
                Book Any Tour via WhatsApp
              </button>

              <div className="bg-gray-800 p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-amber-400">Office Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 7:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-amber-400 mt-3">
                    * We're available for urgent travel needs 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={PtLogo}
                  alt="Priya Travels"
                  className="h-12 w-12 rounded-full mr-3"
                />
                <div>
                  <h5 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    PRIYA TRAVELS
                  </h5>
                  <p className="text-xs text-gray-400">Since 1984</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Leading travel agency in Coimbatore, Tamil Nadu. Complete travel solutions for pilgrimage, educational, group, honeymoon and international tours.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4 text-amber-400">Popular Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-amber-400">Pilgrimage Tours</a></li>
                <li><a href="#services" className="hover:text-amber-400">Educational Tours</a></li>
                <li><a href="#services" className="hover:text-amber-400">Group Tour Packages</a></li>
                <li><a href="#services" className="hover:text-amber-400">Honeymoon Packages</a></li>
                <li><a href="#services" className="hover:text-amber-400">International Tours</a></li>
                <li><a href="#services" className="hover:text-amber-400">Customized Tours</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4 text-amber-400">Popular Destinations</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Kerala Honeymoon Packages</li>
                <li>Goa Group Tours</li>
                <li>Char Dham Pilgrimage</li>
                <li>Dubai International Tours</li>
                <li>Golden Triangle Tours</li>
                <li>South India Temple Circuits</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4 text-amber-400">Service Areas</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Coimbatore & Tamil Nadu</li>
                <li>Kerala & Karnataka</li>
                <li>All India Destinations</li>
                <li>International Destinations</li>
                <li>Educational Institutions</li>
                <li>Corporate Group Tours</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Explore the Divine and Indulge in Delight - Your Complete Travel Partner for 40+ Years
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 Priya Travels. All rights reserved. | Best Travel Agency in Coimbatore, Tamil Nadu, India
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Specializing in Honeymoon Packages, Educational Tours, Group Tours, Pilgrimage Tours & International Travel
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedTour ? `Book ${selectedTour.title}` : 'Travel Inquiry'}
              </h3>
              <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="text-2xl">✕</span>
              </button>
            </div>

            {selectedTour && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl mb-6">
                <h4 className="font-bold text-gray-800">{selectedTour.title}</h4>
                <p className="text-gray-600 text-sm">{selectedTour.duration}</p>
                <p className="text-amber-600 font-bold">{selectedTour.price}</p>
                <p className="text-gray-500 text-xs mt-1 capitalize">
                  Category: {selectedTour.category.replace('-', ' ')}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">WhatsApp Number *</label>
                <input
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your WhatsApp number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Travelers *</label>
                <input
                  type="number"
                  min="1"
                  value={bookingForm.travelers}
                  onChange={(e) => setBookingForm({ ...bookingForm, travelers: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter number of travelers"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tour Type Interest</label>
                <select
                  value={bookingForm.tourType}
                  onChange={(e) => setBookingForm({ ...bookingForm, tourType: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select tour type</option>
                  <option value="honeymoon">Honeymoon Package</option>
                  <option value="educational">Educational Tour</option>
                  <option value="group">Group Tour</option>
                  <option value="pilgrimage">Pilgrimage Tour</option>
                  <option value="international">International Tour</option>
                  <option value="customized">Customized Tour</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Special Requirements</label>
                <textarea
                  rows="3"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Any special requirements, budget preferences, or questions?"
                ></textarea>
              </div>

              <button
                onClick={handleBookingSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-bold hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Send WhatsApp Inquiry
              </button>
            </div>

            <p className="text-gray-500 text-sm text-center mt-4">
              This will open WhatsApp with your travel inquiry. Our travel experts will respond within 30 minutes during business hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriyaTravelsWebsite;