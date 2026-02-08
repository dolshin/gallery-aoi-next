import { AoiMainVisualSlider } from './slider';
import { Logo } from '@/features/logo/Logo';
import { SectionBase } from '@/features/layouts/components/section/base';
import * as styles from './AoiMainVisualSection.css';
import { AoiLogo } from '../../../_config/logo';

export const AoiMainVisualSection = () => {
  return (
    <SectionBase id="Top">
      <Logo {...AoiLogo} className={styles.mainVisualLogo} />
      <div className={styles.mainVisualWrapper}>
        <h2 className={styles.mainVisualTitle}>
          あなたの作品を輝かせる空間 <br />
          ギャラリーアオイ
        </h2>
        <p className={styles.catchPhrasePrimary}>
          落ち着いた空間で、
          <br />
          作品やアイデアを表現。
        </p>
        <p className={styles.catchPhraseSecondary}>
          絵画、書道、彫刻など様々な作品を展示いただけます。
          <br />
          また、ワークショップやパーティなど様々な用途でご利用いただけます。
        </p>

        <div className={styles.gallerySliderWrapper}>
          <AoiMainVisualSlider />
        </div>
      </div>
    </SectionBase>
  );
};
