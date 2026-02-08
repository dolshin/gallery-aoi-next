import { LinkButton } from '@/components/Button';
import { getSiteTopPath } from '../../../../_routing/siteRoutes';

export const HomeHeroSection = () => {
  return (
    <section>
      <div>
        <h1>作品を展示する、教室をひらく。</h1>
        <p>
          展示や教室利用を想定したレンタルスペース。
          <br />
          用途に合わせて選べる、3つの空間があります。
        </p>
        <div>
          <LinkButton href={`${getSiteTopPath('aoi')}`}>
            作品を展示したい方はこちら
            <span>↓</span>
          </LinkButton>

          <LinkButton href={`${getSiteTopPath('aoi')}`}>
            教室を開きたい方はこちら
            <span>↓</span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
