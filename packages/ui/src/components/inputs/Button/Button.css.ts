import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@dolshin/theme-contract';

export const buttonRecipe = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.button.content.gap,
    whiteSpace: 'nowrap',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: vars.radius.control,
    borderWidth: '1px',
    borderStyle: 'none',
    fontSize: vars.button.text.fontSize,
    fontWeight: vars.button.text.fontWeight,
    letterSpacing: vars.button.text.letterSpacing,
    transition:
      'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
    selectors: {
      '&:disabled': {
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
      '&:focus-visible': {
        outline: `${vars.focus.ring.width} solid ${vars.focus.ring.color}`,
        outlineOffset: vars.focus.ring.offset,
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.button.color.primary.default.bg,
        color: vars.button.color.primary.default.fg,
        borderColor: vars.button.color.primary.default.border,
        selectors: {
          '&:disabled': {
            backgroundColor: vars.button.color.primary.disabled.bg,
            color: vars.button.color.primary.disabled.fg,
            borderColor: vars.button.color.primary.disabled.border,
          },
          '&:hover:not(:disabled)': {
            backgroundColor: vars.button.color.primary.hover.bg,
          },
        },
      },
    },

    /** サイズ */
    size: {
      md: {
        height: vars.button.sizing.md.height,
        paddingInline: vars.button.spacing.md.paddingInline,
        paddingBlock: vars.button.spacing.md.paddingBlock,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

/**
 * コンテンツ
 */
export const content = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.button.content.gap,
});
/**
 * アイコン
 */
export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1em',
  selectors: {
    '[data-loading="true"] &': {
      opacity: 0,
    },
  },
});

/**
 * ボタンラベル
 */
export const buttonLabel = style({
  whiteSpace: 'nowrap',
  selectors: {
    '[data-loading="true"] &': {
      color: vars.button.color.primary.disabled.fg,
    },
    '[data-loading="true"][data-loading-position="center"] &': {
      color: 'transparent',
    },
  },
});

/**
 * ローディングラッパー
 */
export const loadingWrapper = style({
  display: 'contents',
});

/**
 * ローディングインジケーター
 */
export const loadingIndicator = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    // 左
    '[data-loading="true"][data-loading-position="left"] &': {
      left: vars.button.spacing.md.paddingInline,
    },

    // 中央
    '[data-loading="true"][data-loading-position="center"] &': {
      left: '50%',
      transform: 'translateX(-50%)',
    },

    // 右
    '[data-loading="true"][data-loading-position="right"] &': {
      right: vars.button.spacing.md.paddingInline,
    },
  },
});

/**
 * アイコンプレースホルダー
 */
export const iconPlaceholder = style({
  display: 'inline-block',
  width: '1em',
  height: '1em',
});
