import { Logo } from '@/app/_components';
import { Navigation } from '../navigation';
import * as styles from './Sidebar.css';
import { useSidebar } from './useSidebar';
import { useSpaceId } from '../../../_providers/SpaceProvider';

export const Sidebar = () => {
  const spaceId = useSpaceId();
  const { navItems, logo } = useSidebar(spaceId);
  return (
    <header className={styles.sidebar}>
      <Logo {...logo} className={styles.logoPlacement} />
      <Navigation items={navItems} />
    </header>
  );
};
