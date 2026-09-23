import type { SVGProps } from 'react';

type IconName = 'play' | 'download' | 'phone' | 'chat' | 'camera' | 'upload' | 'share' | 'heart' | 'bag' | 'gem' | 'shop' | 'menu' | 'spark';

const paths: Record<IconName, React.ReactNode> = {
  play: <path d="M7 4.5v15l12-7.5z" />,
  download: <><path d="M12 4v11" /><path d="M7 10l5 5 5-5" /><path d="M4 20h16" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  chat: <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 18.8L4 20z" />,
  camera: <><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><circle cx="12" cy="12.5" r="3.5" /></>,
  upload: <><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M4 20h16" /></>,
  share: <><circle cx="6" cy="12" r="2.5" /><circle cx="17" cy="6" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="M8.2 10.8l6.6-3.6" /><path d="M8.2 13.2l6.6 3.6" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  bag: <><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  gem: <><path d="M6 4h12l3 5-9 11L3 9z" /><path d="M3 9h18" /><path d="M9 4l-2 5 5 11 5-11-2-5" /></>,
  shop: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" /><path d="M5.5 12v8h13v-8" /><path d="M10 20v-4.5h4V20" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  spark: <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return <svg className="ic" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
