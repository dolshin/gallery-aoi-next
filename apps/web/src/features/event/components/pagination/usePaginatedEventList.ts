import { useRouter } from 'next/navigation';
import { getSpaceTopPath } from '../../../../app/space/_routing/spaceRoutes';

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
