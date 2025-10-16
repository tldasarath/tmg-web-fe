"use client";
import { useState, useEffect, useRef } from "react";
import {
  Instagram,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Container } from "../layout/Container";

export default function SocialMediaCards() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const mockPosts = [
      {
        id: "1",
        mediaUrl: "/assets/images/social/insta_post1.jpg",
        caption: "Certified translators you can trust!",
        timestamp: "2 hours ago",
        postUrl:
          "https://www.instagram.com/p/DPnhR92Ac3q/?igsh=Z3R0d2V6dDM2ajF4",
      },
      {
        id: "2",
        mediaUrl: "/assets/images/social/insta_post2.jpg",
        caption:
          "Start your UAE business with IFZA — the fastest-growing free zone in Dubai!",
        timestamp: "1 day ago",
        postUrl:
          "https://www.instagram.com/p/DPf32iigdge/?igsh=eWJ4MDNiZnRrdmc3",
      },
      {
        id: "3",
        mediaUrl: "/assets/images/social/insta_post3.jpg",
        caption:
          "Start your own Event Management Company in Dubai with expert guidance from TMG Global.",
        timestamp: "2 days ago",
        postUrl:
          "https://www.instagram.com/p/DPdad30gdH2/?igsh=MTB0NDM0ZzJrZXlnZg==",
      },
      {
        id: "4",
        mediaUrl: "/assets/images/social/insta_post4.jpg",
        caption: " Simplify Your Legal Matters Online with TMG Global! ✨",
        timestamp: "3 days ago",
        postUrl:
          "https://www.instagram.com/p/DPS7fckgUxF/?igsh=MTg5d2cwdWNpeGwzZg==",
      },
      {
        id: "5",
        mediaUrl: "/assets/images/social/insta_post5.jpg",
        caption:
          "Celebrating the legacy of peace, truth, and harmony. ✨ Happy Gandhi Jayanti!",
        timestamp: "5 hours ago",
        postUrl:
          "https://www.instagram.com/p/DPS5ooFgbCb/?igsh=NXc3OGVqZmRuNHAy",
      },
      {
        id: "6",
        mediaUrl: "/assets/images/social/insta_post6.jpg",
        caption:
          "Empowering your business with AI-powered solutions for a future-ready tomorrow.",
        timestamp: "5 hours ago",
        postUrl:
          "https://www.instagram.com/p/DM9pmedtM9G/?igsh=YmxnbXVkNGowZ290",
      },
    ];
    setPosts([...mockPosts, ...mockPosts, ...mockPosts]);
  }, []);

  useEffect(() => {
    if (!autoScroll) return;

    const smoothScroll = () => {
      if (scrollContainerRef.current) {
        scrollPositionRef.current += 0.8;
        const container = scrollContainerRef.current;
        const singleSetWidth = (320 + 24) * 6;

        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = 0;
        }

        container.scrollLeft = scrollPositionRef.current;
      }
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    animationFrameRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoScroll]);

  const scroll = (dir) => {
    if (scrollContainerRef.current) {
      const amt = dir === "left" ? -340 : 340;
      const newPos = scrollContainerRef.current.scrollLeft + amt;
      scrollPositionRef.current = newPos;
      scrollContainerRef.current.scrollBy({ left: amt, behavior: "smooth" });
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num;
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white  ">
      <Container>
        <div className="max-w-7xl mx-auto pt-16 pb-16 md:pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-5xl md:text-5xl font-bold bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center bg-clip-text text-transparent mb-2">
                Social Media
              </h2>
              <p className="text-gray-600 text-lg flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                Follow our latest updates
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* <button
              onClick={() => setAutoScroll(!autoScroll)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                autoScroll
                  ? "bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400"
              }`}
            >
              {autoScroll ? "Auto Scroll ON" : "Auto Scroll OFF"}
            </button> */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-gray-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-gray-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              onMouseEnter={() => setAutoScroll(false)}
              onMouseLeave={() => setAutoScroll(true)}
            >
              {posts.map((post, idx) => (
                <div
                  key={`${post.id}-${idx}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(post.postUrl)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={post.mediaUrl}
                        alt={post.caption}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <Instagram className="w-5 h-5 text-pink-600" />
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                          <p className="text-white font-semibold text-lg mb-3 line-clamp-2 leading-snug drop-shadow-lg">
                            {post.caption}
                          </p>

                          {/* <div className="flex items-center gap-4 text-white/90 text-sm mb-4">
                          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                            <Heart className="w-4 h-4" />
                            <span className="font-medium">
                              {formatNumber(post.likes)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                            <MessageCircle className="w-4 h-4" />
                            <span className="font-medium">
                              {formatNumber(post.comments)}
                            </span>
                          </div>
                          <span className="text-xs ml-auto bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                            {post.timestamp}
                          </span>
                        </div> */}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(post.postUrl);
                            }}
                            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          >
                            <span>View on Instagram</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-pink-400 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; }
      `}</style>
    </div>
  );
}
