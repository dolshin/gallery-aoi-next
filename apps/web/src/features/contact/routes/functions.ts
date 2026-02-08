import { type Site, SITE } from '../../../app/_config/site';
import { getSiteTopPath } from '../../../app/_routing/siteRoutes';

export function getContactConfirmRoute(site: Site) {
  const SITE_TOP_PATH = getSiteTopPath(site);
  switch (site) {
    case SITE.AOI:
      return `${SITE_TOP_PATH}/contact/confirm`;
    case SITE.TOUKA_AN:
      return `${SITE_TOP_PATH}/contact/confirm`;
    case SITE.VELZA:
      return `${SITE_TOP_PATH}/contact/confirm`;
    case SITE.TOP:
      return `${SITE_TOP_PATH}contact/confirm`;
  }
}

export function getContactThanksRoute(site: Site) {
  const SITE_TOP_PATH = getSiteTopPath(site);
  switch (site) {
    case SITE.AOI:
      return `${SITE_TOP_PATH}/contact/thanks`;
    case SITE.TOUKA_AN:
      return `${SITE_TOP_PATH}/contact/thanks`;
    case SITE.VELZA:
      return `${SITE_TOP_PATH}/contact/thanks`;
    case SITE.TOP:
      return `${SITE_TOP_PATH}contact/thanks`;
  }
}
