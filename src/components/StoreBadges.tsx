import type { ReactNode } from 'react';
import { site, isPlaceholder } from '../config/site';
import { IconApple, IconGooglePlay } from './Icons';

type Store = {
  key: string;
  url: string;
  small: string;
  name: string;
  icon: ReactNode;
};

const stores: Store[] = [
  { key: 'ios', url: site.appStoreUrl, small: 'Download on the', name: 'App Store', icon: <IconApple /> },
  { key: 'android', url: site.playStoreUrl, small: 'Get it on', name: 'Google Play', icon: <IconGooglePlay /> },
];

/**
 * Store buttons. While a listing URL is still a placeholder the badge renders
 * without a link and reads "Coming soon to".
 */
export function StoreBadges() {
  return (
    <div className="badges">
      {stores.map((store) => {
        const pending = isPlaceholder(store.url);
        const content = (
          <>
            {store.icon}
            <span>
              <small>{pending ? 'Coming soon to' : store.small}</small>
              <strong>{store.name}</strong>
            </span>
          </>
        );
        return pending ? (
          <span key={store.key} className="badge badge--pending" title={store.url}>
            {content}
          </span>
        ) : (
          <a key={store.key} className="badge" href={store.url} target="_blank" rel="noreferrer">
            {content}
          </a>
        );
      })}
    </div>
  );
}
