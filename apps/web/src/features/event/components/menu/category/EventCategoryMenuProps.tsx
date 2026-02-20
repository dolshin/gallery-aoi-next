import type { MicroCMSCategory } from '../../../lib';
import type { SpaceId } from '../../../../../app/space/_config';

export type EventCategoryMenuProps = {
  categories: MicroCMSCategory[];
  spaceId: SpaceId;
};
