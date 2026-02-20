import Link from 'next/link';
import * as styles from './PrivacyPolicyLink.css';
import type { PrivacyPolicyLinkProps } from './PrivacyPolicyLinkProps';
import { getSpaceTopPath } from '@/features/space/config/routes';

export const PrivacyPolicyLink = ({ spaceId }: PrivacyPolicyLinkProps) => {
  return (
    <Link
      className={styles.link}
      href={`${getSpaceTopPath(spaceId)}/privacy-policy`}
    >
      プライバシーポリシー
    </Link>
  );
};
