import type { MicroCMSCategory } from '../../../lib';
import type { SpaceId } from '@/features/space/config';

export type EventCategoryMenuProps = {
  categories: MicroCMSCategory[];
  spaceId: SpaceId;
};
