import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  /* =====================================
   * Color (Semantic)
   * ===================================== */
  color: {
    accent: {
      primary: '',
      secondary: '',
    },

    text: {
      primary: '',
      secondary: '',
      muted: '',
      inverse: '',
      disabled: '',
    },

    border: {
      default: '',
      subtle: '',
      focus: '',
    },

    surface: {
      base: '',
      subtle: '',
    },

    status: {
      success: '',
      warning: '',
      error: '',
    },
  },

  sizing: {
    control: {
      md: '',
      lg: '',
    },
  },

  /* =====================================
   * Focus / State (Semantic)
   * ===================================== */
  focus: {
    ring: {
      color: '',
      width: '',
      offset: '',
    },
  },

  /* =====================================
   * Radius (Semantic)
   * ===================================== */
  radius: {
    surface: '',
    control: '',
    pill: '',
  },

  /* =====================================
   * Typography (Semantic)
   * ===================================== */
  typography: {
    inline: {
      sm: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
      md: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
    },

    heading: {
      sm: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
      md: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
      xl: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
      '2xl': {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
    },

    body: {
      sm: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
      md: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '',
        lineHeight: '',
        letterSpacing: '',
      },
    },
  },

  /* =====================================
   * Spacing / Layout (Semantic)
   * ===================================== */
  spacing: {
    section: {
      block: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },

    container: {
      inline: {
        sm: {
          maxWidth: '',
          paddingInline: '',
        },
        md: {
          maxWidth: '',
          paddingInline: '',
        },
        lg: {
          maxWidth: '',
          paddingInline: '',
        },
        xl: {
          maxWidth: '',
          paddingInline: '',
        },
      },
    },

    stack: {
      0: '',
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },

    grid: {
      gap: {
        0: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },
  /* =====================================
   * Component Tokens
   * ===================================== */
  /**
   * ---- Button ----
   */
  button: {
    color: {
      primary: {
        default: {
          bg: '',
          fg: '',
          border: '',
        },
        hover: {
          bg: '',
          fg: '',
          border: '',
        },
        disabled: {
          bg: '',
          fg: '',
          border: '',
        },
      },
    },
    text: {
      fontFamily: '',
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },
    sizing: {
      md: {
        height: '',
      },
    },
    spacing: {
      md: {
        paddingInline: '',
        paddingBlock: '',
      },
    },
    content: {
      gap: '',
    },
  },

  /**
   * ----Input----
   */
  input: {
    color: {
      default: {
        bg: '',
        fg: '',
        border: '',
        placeholder: '',
      },
      focus: {
        border: '',
        ring: '',
      },
      disabled: {
        bg: '',
        fg: '',
        border: '',
      },
      error: {
        border: '',
        fg: '',
      },
    },
    text: {
      fontFamily: '',
      fontSize: '',
      fontWeight: '',
      lineHeight: '',
      letterSpacing: '',
    },

    sizing: {
      md: {
        height: '',
      },
    },
    spacing: {
      md: {
        paddingInline: '',
        paddingBlock: '',
      },
    },
  },
});
