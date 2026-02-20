export const SITE = {
  AOI: 'aoi',
  TOUKA_AN: 'touka-an',
  VELZA: 'velza',
  TOP: 'top',
} as const;

export type Site = (typeof SITE)[keyof typeof SITE];

export const SITE_VALUES = [
  SITE.AOI,
  SITE.TOUKA_AN,
  SITE.VELZA,
  SITE.TOP,
] as const;
