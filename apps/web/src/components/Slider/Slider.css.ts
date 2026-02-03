import { style, globalStyle } from '@vanilla-extract/css';

/* ============================================================
 * Tokens（仮）
 * ============================================================ */

const SLIDER = {
  paddingX: '8px',
  arrow: {
    size: '32px',
    border: '#666',
    radius: '50%',
    gap: '6px',
  },
  dots: {
    marginTop: '20px',
  },
};

/* ============================================================
 * Slider Wrapper（自分の責務）
 * ============================================================ */

export const sliderWrapper = style({
  width: '100%',
  margin: '0 auto',
});

/* ============================================================
 * slick-slide（外部クラス）
 * ============================================================ */

globalStyle(`${sliderWrapper} .slick-slide`, {
  padding: `0 ${SLIDER.paddingX}`,
});

/* ============================================================
 * slick-disabled（外部クラス）
 * ============================================================ */

globalStyle(
  `${sliderWrapper} .slick-disabled::before, 
   ${sliderWrapper} .slick-disabled::after`,
  {
    opacity: 0.25,
  }
);

/* ============================================================
 * Arrow（自前クラス）
 * ============================================================ */

globalStyle(`${sliderWrapper} .slider-arrow`, {
  border: `1px solid ${SLIDER.arrow.border}`,
  borderRadius: SLIDER.arrow.radius,
  width: SLIDER.arrow.size,
  height: SLIDER.arrow.size,
  cursor: 'pointer',
});

/* ============================================================
 * Prev / Next
 * ============================================================ */

globalStyle(`${sliderWrapper} .slider-prev`, {
  marginRight: SLIDER.arrow.gap,
});

globalStyle(`${sliderWrapper} .slider-next`, {
  marginLeft: SLIDER.arrow.gap,
});

/* ============================================================
 * Dots
 * ============================================================ */

globalStyle(`${sliderWrapper} .slick-dots`, {
  position: 'relative',
  textAlign: 'center',
  margin: `${SLIDER.dots.marginTop} 0 0`,
});

globalStyle(`${sliderWrapper} .slider-dots`, {
  display: 'flex',
});
