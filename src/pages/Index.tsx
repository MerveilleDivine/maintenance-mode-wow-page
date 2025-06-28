
import { useState, useEffect } from "react";
import { Settings, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_23_42/0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Logo Section */}
          <div className={`mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-8 shadow-lg">
              <Settings className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <div className={`mb-8 transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Hi, Mervine Here
            </h1>
            <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          {/* Message */}
          <div className={`mb-12 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
              Sorry, I took my website down for maintenance.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto">
              Come back in a few days for a full experience that will absolutely blow your mind.
            </p>
          </div>

          {/* Status Card */}
          <div className={`mb-12 transition-all duration-700 delay-450 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-600" />
                <span className="text-slate-700 font-medium">Under Construction</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className={`mb-16 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-slate-600 mb-3 font-medium">
                <span>Development Progress</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-slate-900 h-2 rounded-full transition-all duration-2000 delay-800"
                  style={{ width: mounted ? '85%' : '0%' }}
                ></div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Almost there... crafting something extraordinary
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className={`transition-all duration-700 delay-750 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 max-w-md mx-auto">
              <p className="text-slate-600 mb-4 leading-relaxed">
                Something truly amazing is being crafted behind the scenes
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <span>Powered by passion</span>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <span>Built with precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-slate-900 rounded-full"></div>
    </div>
  );
};

export default Index;
