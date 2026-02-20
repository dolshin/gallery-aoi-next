import { useRouter } from 'next/navigation';
import { getSpaceTopPath } from '@/features/space/config/routes';

export const usePaginatedEventList = () => {
  const router = useRouter();
  const onPageChange = (page: number) => {
    router.push(
      page === 1
        ? `${getSpaceTopPath('aoi')}/event`
        : `${getSpaceTopPath('aoi')}/event/page/${page}`,
    );
  };
  return { onPageChange };
};
