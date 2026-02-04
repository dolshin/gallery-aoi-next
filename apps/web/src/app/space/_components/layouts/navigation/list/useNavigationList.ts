import { useEffect, useState } from 'react';
import type { NavigationListProps } from './NavigationList.types';
import type { SectionId } from '../../../../_config/sections';

export const useNavigationList = ({
  items,
}: Omit<NavigationListProps, 'handleMenuClick'>) => {
  const [activeSection, setActiveSection] = useState<SectionId>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);
  return activeSection;
};
