import type { Settings } from 'react-slick';
import { FigureSlider } from '@/app/_components/slider';
import { AOI_EQUIPMENT_SLIDER_ITEMS } from '../../../../_config/equipment-slider';
import * as styles from './AoiEquipmentSlider.css';

export const AoiEquipmentSlider = () => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <FigureSlider
      items={AOI_EQUIPMENT_SLIDER_ITEMS}
      width={600}
      height={338}
      settings={settings}
      className={styles.sliderWrapper}
    />
  );
};
