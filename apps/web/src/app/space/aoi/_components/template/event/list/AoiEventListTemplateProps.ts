import type { MicroCMSEventContent } from '@/features/event';

export type AoiEventListTemplateProps = {
  data: MicroCMSEventContent[];
  pageContext: {
    totalPages: number;
    currentPage: number;
    categoryName?: string;
    year?: string;
    month?: string;
  };
};
