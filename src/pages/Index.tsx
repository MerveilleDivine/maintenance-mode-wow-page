
import { useState, useEffect } from "react";
import { Settings, ArrowRight, Clock } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon Section */}
          <div className={`mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-6 hover:scale-110 transition-transform duration-300">
              <Settings className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Main Heading */}
          <div className={`mb-6 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Hi, Sorry
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className={`mb-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              I took my website down for maintenance.
            </p>
          </div>

          {/* Call to Action */}
          <div className={`mb-12 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Come back in a few days for a full experience that will blow your mind.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Clock className="w-5 h-5 text-purple-300" />
              <span className="text-white font-medium">Under Construction</span>
              <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-white/60 mb-2">
                <span>Progress</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-2000 delay-1200"
                  style={{ width: mounted ? '85%' : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className={`mt-16 transition-all duration-1000 delay-1200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm text-white/50">
              Something amazing is being crafted behind the scenes
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  );
};

export default Index;
