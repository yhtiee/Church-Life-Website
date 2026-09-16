import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconChurch = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 2v4M10 4h4" />
    <path d="M6 22V11l6-5 6 5v11" />
    <path d="M3 22h18M10 22v-4a2 2 0 0 1 4 0v4" />
  </Stroke>
);
export const IconCalendar = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4M8 14h3M8 17.5h6" />
  </Stroke>
);
export const IconBook = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 19.5v-14A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5 2.5 2.5 0 0 0 6.5 24" />
    <path d="M12 7v6M9.5 9.5h5" />
  </Stroke>
);
export const IconUsers = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" />
  </Stroke>
);
export const IconHeart = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 20.5s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 3c0 5.9-8 10.5-8 10.5z" />
  </Stroke>
);
export const IconGift = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5" />
  </Stroke>
);
export const IconBell = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9zM10 20a2 2 0 0 0 4 0" />
  </Stroke>
);
export const IconShield = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </Stroke>
);
export const IconCheck = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="m8 12.5 2.8 2.7L16.5 9.5" />
  </Stroke>
);
export const IconMail = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Stroke>
);
export const IconChat = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-4.6A8.5 8.5 0 1 1 20.5 11.5z" />
    <path d="M8.5 10h7M8.5 13.5h4.5" />
  </Stroke>
);
export const IconHelp = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M9.5 9.2a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.9M12 17.2v.3" />
  </Stroke>
);
export const IconTrash = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3.5 6h17M9 6V3.5h6V6M5.5 6l1 15h11l1-15M10 10.5v6.5M14 10.5v6.5" />
  </Stroke>
);
export const IconInfo = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v6M12 7.5v.3" />
  </Stroke>
);
export const IconMenu = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
);
export const IconClose = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
);
export const IconArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Stroke>
);
export const IconLock = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="4.5" y="10.5" width="15" height="11" rx="2.5" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 15v2.5" />
  </Stroke>
);

export const IconApple = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.76-.95 2.8 1.01.08 2.04-.51 2.67-1.27z" />
  </svg>
);

export const IconGooglePlay = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#00d7fe" d="M3.6 2.3c-.3.3-.4.7-.4 1.3v16.8c0 .6.1 1 .4 1.3l.1.1 9.4-9.4v-.2L3.7 2.2z" />
    <path fill="#ffce00" d="m16.2 15.5-3.1-3.2v-.2l3.1-3.2.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1z" />
    <path fill="#ff3a44" d="M16.3 15.4 13.1 12.2l-9.5 9.5c.4.4.9.4 1.6.1l11.1-6.4" />
    <path fill="#48ff48" d="M16.3 9 5.2 2.6c-.7-.4-1.2-.3-1.6.1l9.5 9.5z" />
  </svg>
);
