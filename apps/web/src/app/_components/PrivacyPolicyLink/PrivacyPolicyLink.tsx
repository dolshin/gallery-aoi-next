import Link from 'next/link';
import * as styles from './PrivacyPolicyLink.css';
import type { PrivacyPolicyLinkProps } from './PrivacyPolicyLinkProps';
import { getSpaceTopPath } from '../../space/_routing/spaceRoutes';

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
