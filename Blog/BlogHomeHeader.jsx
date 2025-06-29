const BlogHome_1 = () => {
  return (
    <div className="relative px-4 py-16 md:py-24 text-center">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto space-y-6">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          <span className="font-extrabold">X</span><span className="font-extrabold  tracking-tight text-white (für X) bg-gradient-to-b from-sky-400 to-blue-600 bg-clip-text text-transparent">1</span> Blockchain
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-1000 hover:scale-105">
            The Future is Now
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
          Explore the latest guides and tips for mastering X1 Blockchain
        </p>
        
        <div className="flex justify-center items-center pt-8">
          {/* Blockchain Validator Animation */}
          <div className="relative w-120 h-32  rounded-lg p-6 overflow-hidden flex items-center justify-between">
            
            {/* Validator 1 */}
            <div className="relative">
              <div className="w-16 h-16 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-300 rounded"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 font-mono">
                VALIDATOR
              </div>
              {/* Activity pulse */}
              <div className="absolute inset-0 border-2 border-blue-400 rounded-lg animate-ping opacity-40"></div>
            </div>
            
            {/* Data transfer animation */}
            <div className="flex-1 relative mx-2 h-1 bg-gray-700 rounded-full overflow-hidden">
              {/* Background track */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20"></div>
              
              {/* Moving data packets */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg animate-pulse" 
                   style={{
                     animation: 'slideRight 2s infinite linear',
                     left: '0%'
                   }}>
                <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-lg" 
                   style={{
                     animation: 'slideRight 2.5s infinite linear',
                     animationDelay: '0.8s',
                     left: '0%'
                   }}>
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-lg" 
                   style={{
                     animation: 'slideRight 3s infinite linear',
                     animationDelay: '1.5s',
                     left: '0%'
                   }}>
                <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
            
            {/* Validator 2 */}
            <div className="relative">
              <div className="w-16 h-16 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-green-300 rounded"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-300 font-mono">
                VALIDATOR
              </div>
              {/* Activity pulse with delay */}
              <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-ping opacity-40" 
                   style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Transaction info */}
            <div className="absolute top-2 left-6 text-xs text-gray-400 font-mono">
              TX: 0x4a7b...9c2f
            </div>
            
            <div className="absolute top-2 right-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono">SYNCING</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideRight {
          0% {
            left: 0%;
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogHome_1;


{/* 
{/* Chart bars representing price movement *
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
            
            {/* Trend line overlay 
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-60"></div>
            </div>
            
            {/* Price indicator 
            <div className="absolute -top-2 right-0 flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-green-400 text-xs font-mono">↗ +24.7%</span>
            </div>

*/}

