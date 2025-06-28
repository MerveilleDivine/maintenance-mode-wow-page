
import { useState, useEffect } from "react";
import { Settings, Clock, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-purple-300/20 animate-pulse"
            size={16 + Math.random() * 8}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Logo/Icon Section */}
          <div className={`mb-12 transition-all duration-1500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 mb-8 hover:scale-110 transition-all duration-500 shadow-2xl">
              <Settings className="w-14 h-14 text-white animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse delay-500" />
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Hi, Mervine Here
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className={`mb-10 transition-all duration-1500 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Sorry, I took my website down for maintenance.
            </p>
          </div>

          {/* Enhanced Call to Action */}
          <div className={`mb-16 transition-all duration-1500 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Come back in a few days for a full experience that will absolutely blow your mind.
            </p>
            
            {/* Non-interactive Status Display */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-300 animate-pulse" />
                <span className="text-white font-medium text-lg">Under Construction</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className={`mb-12 transition-all duration-1500 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-lg mx-auto">
              <div className="flex justify-between text-lg text-white/70 mb-4 font-medium">
                <span>Development Progress</span>
                <span className="flex items-center gap-2">
                  85%
                  <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 h-3 rounded-full transition-all duration-3000 delay-1200 shadow-lg relative overflow-hidden"
                  style={{ width: mounted ? '85%' : '0%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="mt-3 text-sm text-white/60">
                Almost there... crafting something extraordinary
              </div>
            </div>
          </div>

          {/* Enhanced Footer Section */}
          <div className={`transition-all duration-1500 delay-1200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Something truly amazing is being crafted behind the scenes
              </p>
              <div className="flex items-center justify-center gap-2 text-white/60">
                <span className="text-sm">Powered by passion</span>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span className="text-sm">Built with love</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
    </div>
  );
};

export default Index;
