import { SOCIAL_LINKS } from '../../config/constants';
import type { SocialLinkProps } from './SocialLinkProps';
import * as styles from './SocialLink.css';

/**
 * ソーシャルリンクコンポーネント
 */
export const SocialLink = ({
  type,
  usernameOrUrl,
  size = 24,
}: SocialLinkProps) => {
  const social = SOCIAL_LINKS[type];
  const Icon = social.icon;

  const href = usernameOrUrl.startsWith('http')
    ? usernameOrUrl
    : `${social.baseUrl}${usernameOrUrl}`;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className={styles.socialLink}
      >
        <Icon size={size} />
      </a>
    </li>
  );
};
