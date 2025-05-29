import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, Settings, ArrowDown, ChevronDown, ChevronUp, Mail, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (item: { id: string; label: string; href?: string }) => {
    if (item.href) {
      navigate(item.href);
    } else {
      scrollToSection(item.id);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'talrop', 'about', 'events', 'team', 'gallery', 'get-involved', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'talrop', label: 'Talrop' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events', href: '/events' },
    { id: 'team', label: 'Team', href: '/team' }, // ✅ Keep this
    { id: 'gallery', label: 'Gallery' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' }
  ];

  const events = [
    {
      title: "Chaos and Clarity",
      date: "June 10, 2025",
      description: "Addressing student challenges through interactive sessions and workshops focused on mental clarity and emotional balance",
      status: "upcoming",
      image: "/lovable-uploads/Chaos_and_clarity.avif"
    },

  ];

  const teamSections = [
    {
      members: [
        {
          name: "Pavana S",
          role: "Community Lead",
          image: "/lovable-uploads/pavana.jpg"
        },
        {
          name: "Spandana N",
          role: "Co-ordinating Lead",
          image: "/lovable-uploads/Spandana.jpg"
        },
        {
          name: "Sudhindra Shenoy B",
          role: "Event Lead",
          image: "/lovable-uploads/Sudhindra.jpg"
        },
        {
          name: "Lipika B V",
          role: "Design Lead",
          image: "/lovable-uploads/Lipika.jpg"
        },
        {
          name: "Raj Singh",
          role: "Technical Lead",
          image: "/lovable-uploads/Raj.jpg"
        },
        {
          name: "Harsh Kumar",
          role: "PR Lead",
          image: "/lovable-uploads/Harsh.png"
        },

        {
          name: "Preethi M",
          role: "Outreach Lead",
          image: "/lovable-uploads/Preethi.jpg"
        },
        {
          name: "Prajwal",
          role: "Content & Photography Lead",
          image: "/lovable-uploads/Prajwal.jpg"
        }

      ]
    },
  ];

  const galleryImages = [
    "/lovable-uploads/Chaos_and_clarity.avif",
    "/lovable-uploads/team.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/fddfbdee-c539-4b8d-8bae-ae54f009bbfd.png"
                alt="Teraforum Logo"
                className="h-10 w-10 rounded-full"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                Teraforum
              </span>
            </div>


            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item);
                      scrollToSection(item.id);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item);
                      scrollToSection(item.id);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
              >
                {isMenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavClick(item);
                    scrollToSection(item.id);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-teal-900/20"></div>
        <div className="absolute inset-0">
          {/* Animated stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img
              src="/lovable-uploads/fddfbdee-c539-4b8d-8bae-ae54f009bbfd.png"
              alt="Teraforum Logo"
              className="h-24 w-24 mx-auto mb-6 animate-fade-in rounded-full"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            TERAFORUM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Technology • Innovation • Community Impact
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A student-driven initiative under RISA in collaboration with Talrop, empowering students through
            learning, exploration, and creativity across all departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 py-3 text-lg"
            >
              Discover More
            </Button>
            <Button
              onClick={() => scrollToSection('get-involved')}
              variant="outline"
              className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-950 px-8 py-3 text-lg"
            >
              Get Involved
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ArrowDown
              size={32}
              className="mx-auto text-gray-400 cursor-pointer hover:text-white transition-colors"
              onClick={() => scrollToSection('talrop')}
            />
          </div>
        </div>
      </section>

      {/* Talrop Section */}
      <section id="talrop" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Talrop Partnership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bridging the gap between education and industry through national-level collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">About Talrop</h3>
              <p className="text-gray-300 mb-6">
                Talrop is a national-level organization dedicated to empowering students and bridging the gap between education and the industry.
                It works with schools and colleges across India to promote entrepreneurship, skill development, innovation, and real-world exposure among youth.
              </p>
              <p className="text-gray-300 mb-6">
                Talrop's mission is to create a generation of skilled, confident, and future-ready individuals by integrating
                industry-relevant programs and initiatives into the academic system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Startup Culture</h4>
                  <p className="text-gray-300">Encouraging entrepreneurial thinking and supporting young innovators through mentorship and incubation.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-teal-400 mb-3">Industry Collaboration</h4>
                  <p className="text-gray-300">Bringing experts and professionals to share knowledge through workshops, webinars, and events.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Technology Integration</h4>
                  <p className="text-gray-300">Introducing trending technologies like AI, blockchain, IoT, and digital tools to students.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
              About TeraForum Club
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A student-driven initiative under RISA in collaboration with Talrop, serving as a hub of learning, exploration, and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
                <p className="text-gray-300">
                  To organize events, seminars, and awareness campaigns that complement academic learning with practical exposure across all departments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
                <p className="text-gray-300">
                  To be a catalyst for student empowerment, connecting academic learning with real-world opportunities and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Impact</h3>
                <p className="text-gray-300">
                  Creating meaningful change through collaboration with RISA and Talrop, fostering innovation and leadership development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Capturing moments of innovation, collaboration, and student participation in our activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                style={{ height: index % 3 === 0 ? '300px' : '200px' }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Modal for image pop-up */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="absolute top-2 right-2 flex gap-2 z-10">
                  <a
                    href={selectedImage}
                    download
                    className="text-white bg-slate-800/80 rounded-full p-2 hover:bg-slate-700 transition"
                    title="Download Image"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4' />
                    </svg>
                  </a>
                  <button
                    className="text-white bg-slate-800/80 rounded-full p-2 hover:bg-red-500 hover:scale-110 shadow transition flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close"
                    title="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img
                  src={selectedImage}
                  alt="Enlarged Gallery"
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Get Involved
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of joining TeraForum Club and become part of a movement shaping the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Benefits for Students</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">National-Level Exposure through RISA youth movements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Real-World Connections via Talrop's industry network</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Skill & Leadership Development in essential areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Platform for Innovation and creative project implementation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Focus on Holistic Growth beyond academics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-300">Bridge to Opportunities in tech, entrepreneurship, and social impact</p>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">Ready to Join?</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-400 mb-2">For Students</h4>
                    <p className="text-gray-300 mb-4">Open to all students passionate about innovation and community impact.</p>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
                      Apply for Membership
                    </Button>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">For Alumni & Professionals</h4>
                    <p className="text-gray-300 mb-4">Share your expertise as a mentor or speaker.</p>
                    <Button variant="outline" className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-950">
                      Become a Mentor
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Email us at</p>
                    <a
                      href="mailto:risaforumpesce@gmail.com?subject=Hello%20TeraForum&body=I%20would%20like%20to%20know%20more%20about..."
                      className="text-white font-medium underline hover:text-orange-400 transition"
                    >
                      risaforumpesce@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300">Follow us on social media</p>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.instagram.com/teraforum?igsh=MWVpZmd6OGtyNm1jbA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tera-forum-633719366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        LinkedIn
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                      rows={5}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Our Team
            </h1>
            <div className="flex justify-center">
              <span className="block w-32 h-1 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 rounded-full mb-4 animate-shimmer"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the creative minds and leaders behind our innovation.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative bg-white/10 backdrop-blur-lg border border-orange-400 rounded-3xl shadow-2xl p-8 max-w-md w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-orange-400/40">
              <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-teal-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                Faculty Coordinator
              </span>
              <img
                src="/lovable-uploads/revanesh.jpg"
                alt="Mr. Revanesh M"
                className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-orange-400 to-teal-400 shadow-xl transition-all duration-300 hover:scale-105"
              />
              <h4 className="text-2xl font-bold mt-4 text-white drop-shadow">Mr. Revanesh M</h4>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-400/40 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <img
                    src={section.members[0].image}
                    alt={section.members[0].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-orange-400 to-teal-400 shadow-lg transition-all duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg ring-2 ring-white/30 animate-glow">
                    {section.members[0].role}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white drop-shadow">{section.members[0].name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="/lovable-uploads/fddfbdee-c539-4b8d-8bae-ae54f009bbfd.png"
                alt="Teraforum Logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-bold text-lg bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                Teraforum
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Teraforum. Empowering students through RISA and Talrop collaboration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
