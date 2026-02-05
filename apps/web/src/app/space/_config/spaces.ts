export const SPACES = {
  AOI: 'aoi',
  TOUKA_AN: 'touka-an',
  VELZA: 'velza',
} as const;

export type SpaceId = (typeof SPACES)[keyof typeof SPACES];
