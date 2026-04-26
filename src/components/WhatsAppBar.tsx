import { MessageCircle } from "lucide-react";

const WhatsAppBar = () => {
  return (
    <a
      href="https://wa.me/917972666151"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse fixed z-50 lg:hidden w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
      style={{
        background: "#25D366",
        bottom: "24px",
        left: "16px",        /* moved to LEFT side */
      }}
      aria-label="Order on WhatsApp"
    >
      <span className="wa-shake flex items-center justify-center w-full h-full">
        <MessageCircle size={32} color="white" fill="white" />
      </span>
    </a>
  );
};

export default WhatsAppBar;
