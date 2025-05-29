import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

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
    }
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
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Our Team
            </h1>
            <div className="flex justify-center">
              <span className="block w-32 h-1 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 rounded-full mb-4 animate-pulse"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the creative minds and leaders behind our innovation.
            </p>
          </div>

          {/* Faculty Card */}
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

          {/* Team Grid */}
          {teamSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {section.members.map((member, index) => (
                  <div
                    key={index}
                    className="relative bg-white/10 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-xl p-8 w-full max-w-xs flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-400/40 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-orange-400 to-teal-400 shadow-lg transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white drop-shadow mb-2">{member.name}</h4>
                    {/* Sliding Role Badge */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full flex justify-center pointer-events-none">
                      <span className="inline-block bg-gradient-to-r from-teal-500 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg ring-2 ring-white/30
                        transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team; 