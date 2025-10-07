import { MessageCircle, Phone } from "lucide-react";

export const BottomBanner = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-600 to-yellow-500 py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-white text-lg font-medium flex-1">
          Get Expert Advise to Setup Your Business in Dubai
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>
          <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <Phone size={20} />
            <span>Call Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};