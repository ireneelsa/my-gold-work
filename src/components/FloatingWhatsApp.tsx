import { Icon } from './Icon';
import { WHATSAPP_DEMO_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      className="fab-whatsapp"
      href={WHATSAPP_DEMO_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" className="ic ic-fill" />
    </a>
  );
}
