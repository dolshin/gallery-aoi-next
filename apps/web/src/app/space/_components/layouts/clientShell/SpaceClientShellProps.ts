import type { SpaceId } from '@/features/space/config';

export type SpaceClientShellProps = {
  spaceId: SpaceId;
  children: React.ReactNode;
};
