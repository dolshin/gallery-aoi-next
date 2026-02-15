import React from 'react';
import type { SectionId } from '../../../../space/_config/sections';

export type SectionBaseProps = {
  children: React.ReactNode;
  id: SectionId;
  className?: string;
};
