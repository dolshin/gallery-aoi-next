import type { SectionId } from './sections';

export type NavigationSeed = {
  sectionId: SectionId;
  label: string;
};

export type NavigationItem = NavigationSeed & { path: string };
