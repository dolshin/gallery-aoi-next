import type { MicroCMSEventContent } from '../../lib';

export type PaginatedEventListProps = {
  data: MicroCMSEventContent[];
  pageContext: {
    totalPages: number;
    currentPage: number;
    categoryName?: string;
    year?: string;
    month?: string;
  };
};
