import React from 'react';
import type { SectionId } from '../../../space/_config/sections';

export type PageSectionProps = {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  id: SectionId;
  className?: string;
};
