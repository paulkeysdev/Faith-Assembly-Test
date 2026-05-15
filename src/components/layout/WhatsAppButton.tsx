import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phone = "254799192029";
  const message = encodeURIComponent("Hello Faith Life Assembly Church, I'd like to connect.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
    </a>
  );
};
