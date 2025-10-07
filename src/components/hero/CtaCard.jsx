import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export const CTACard = () => {
  return (
    <div className="bg-blue-200/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Let's Talk<br />Service
      </h3>
      
      {/* Schedule Meet Button */}
      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-between mb-4 transition-all duration-300 hover:scale-105">
        <span>Schedule Meet</span>
        <ArrowRight size={20} />
      </button>

      {/* Contact Icons */}
      <div className="flex items-center justify-center space-x-4">
        <a
          href="#whatsapp"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="#phone"
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};