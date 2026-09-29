// Single source of truth for every external link used on the site.

export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.techiearray.delivery';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/my-gold-work/id6806579572';

export const WHATSAPP_DEMO_URL = 'https://wa.me/919160591699?text=Hello%20My%20Gold%20Work%2C%20I%20own%20a%20jewellery%20business%20and%20would%20like%20a%20demo.';
export const PHONE_NUMBER = '+91 91605 91699';
export const TEL_URL = 'tel:+919160591699';

export const PRIVACY_POLICY_URL = 'https://my-gold-work.web.app/privacyPolicy.html';

export const INSTAGRAM_URL = 'https://www.instagram.com/mygoldwork?stkn=cHY4emwzaWR5b3Ey&utm_source=qr';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1EyZjf8Yag/?mibextid=wwXIfr';
export const YOUTUBE_INSTALL_VIDEO_URL = 'https://youtube.com/@mygoldwork?si=XHaFORKg8qe1AgA9';

/**
 * Sends iPhone/iPad visitors to the App Store and everyone else (Android, desktop, unrecognized)
 * to Google Play. Use this instead of the raw *_URL constants for any "Get the app" link.
 */
export function getAppStoreLink(): string {
  if (typeof navigator === 'undefined') return GOOGLE_PLAY_URL;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) return APP_STORE_URL;
  return GOOGLE_PLAY_URL;
}
