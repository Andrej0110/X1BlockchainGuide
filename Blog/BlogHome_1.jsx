import { useTranslation } from "react-i18next";

const BlogHome_1 = () => {
  return (
    <div className="relative px-4 py-16 md:py-24 text-center">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto space-y-6">

        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          X1 Blockchain
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-1000 hover:scale-105">
            The Future is Now
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
          Explore the latest guides and tips for mastering X1 Blockchain
        </p>
        
        <div className="flex justify-center items-center pt-8">
          <div className="relative w-64 h-12 flex items-end justify-center space-x-1">
            {/* Chart bars representing price movement */}
            <div className="w-1 h-3 bg-green-400 rounded-t animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-1 h-5 bg-green-500 rounded-t animate-pulse" style={{animationDelay: '0.1s'}}></div>
            <div className="w-1 h-4 bg-green-400 rounded-t animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-7 bg-blue-400 rounded-t animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-1 h-6 bg-blue-500 rounded-t animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-1 h-8 bg-blue-400 rounded-t animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1 h-9 bg-purple-400 rounded-t animate-pulse" style={{animationDelay: '0.6s'}}></div>
            <div className="w-1 h-7 bg-purple-500 rounded-t animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="w-1 h-10 bg-blue-400 rounded-t animate-pulse" style={{animationDelay: '0.8s'}}></div>
            <div className="w-1 h-8 bg-blue-500 rounded-t animate-pulse" style={{animationDelay: '0.9s'}}></div>
            <div className="w-1 h-11 bg-green-400 rounded-t animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-1 h-9 bg-green-500 rounded-t animate-pulse" style={{animationDelay: '1.1s'}}></div>
            
            {/* Trend line overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-60"></div>
            </div>
            
            {/* Price indicator */}
            <div className="absolute -top-2 right-0 flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 text-xs font-mono">↗ +24.7%</span>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome_1;