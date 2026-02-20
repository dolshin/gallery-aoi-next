import type { Settings } from 'react-slick';
import { FigureSlider } from '@/app/_components/slider';
import { AOI_MAINVISUAL_SLIDER_ITEMS } from '../../../../_config/main-visual-slider';

export const AoiMainVisualSlider = () => {
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
      items={AOI_MAINVISUAL_SLIDER_ITEMS}
      width={600}
      height={450}
      settings={settings}
    />
  );
};
