import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: MessageCircle, href: '#', color: 'hover:bg-green-600' }
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className={`w-10 h-10 bg-yellow-600 rounded flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};