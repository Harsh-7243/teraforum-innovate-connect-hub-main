import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Chaos and Clarity",
      date: "June 10, 2025",
      description: "Addressing student challenges through interactive sessions and workshops focused on mental clarity and emotional balance",
      status: "upcoming",
      image: "/lovable-uploads/Chaos_and_clarity.avif"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <button
        onClick={() => navigate('/')}
        className="group bg-white/10 backdrop-blur-md border border-orange-400 text-orange-400 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-teal-500 shadow-lg rounded-full p-3 transition-all duration-200 fixed top-6 left-6 z-50"
        title="Back to Home"
      >
        <ArrowLeft className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-1" />
      </button>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Events & Activities
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for events that address student challenges and provide practical exposure through interactive sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer"
                onClick={() => window.open('https://forms.gle/izEcRZFqameYiJdV9', '_blank')}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={event.status === 'upcoming' ? 'bg-green-600' : 'bg-gray-600'}
                    >
                      {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <p className="text-orange-400 mb-3 font-medium">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 