import "./WhatsAppButton.css";
import whatsappLogo from "~/assets/whatsappLogo.png";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923134549126"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button-container"
    >
      <div className="whatsapp-button">
        <span>Happy to chat on WhatsApp</span>
        <img src={whatsappLogo} alt="WhatsAppLogo" />
      </div>
    </a>
  );
}
