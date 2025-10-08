'use client'
import { Container } from "../layout/Container";
import { SocialSidebar } from "./SocialSidebar";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Calendar, PhoneCall } from "lucide-react";

export const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
        const playOnInteraction = () => {
          videoRef.current?.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Video Background - Full Width */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => {
              console.log("Video loaded successfully");
              setVideoLoaded(true);
            }}
            onError={(e) => {
              console.error("Video failed to load:", e);
              setVideoError(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
          >
            <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Fallback background image */}
        {videoError && (
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
        )}

        {/* Loading state */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse" />
        )}
      </div>

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col">
        {/* Center Hero Text */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 w-full lg:max-w-7xl">
            <h1 className="text-5xl md:text-6xl lg:text-[3rem]  font-bold text-white leading-tight drop-shadow-2xl">
              Gorem ipsum , consectetur
              <br />
              adipiscing. Nunc vulputate libero et
            </h1>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="pb-12">
          <Container>
            <div className="bg-[#C79A59] rounded-2xl p-6 shadow-2xl flex items-center justify-between">
              {/* Left Text */}
              <div className="text-white text-lg md:text-xl font-medium">
                Get Experts Advice to Setup Your Business in Dubai
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-4">
                <button className="bg-[#49051E] hover:bg-[#49051E] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </button>
                <button className="bg-[#49051E] hover:bg-[#49051E] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Floating CTA Card - Right Side */}
      {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl w-64">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Let's Talk
          <br />
          Service
        </h3>
        
    
        <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-3 rounded-lg font-medium mb-4 hover:shadow-lg transition-all duration-300 flex items-center justify-between">
          <span>Schedule Meet</span>
          <Calendar className="w-5 h-5" />
        </button>

    
        <div className="flex gap-3">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-all duration-300 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-300 flex items-center justify-center">
            <PhoneCall className="w-6 h-6" />
          </button>
        </div>
      </div> */}
    </section>
  );
};