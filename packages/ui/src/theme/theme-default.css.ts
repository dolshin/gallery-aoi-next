import { createTheme } from '@vanilla-extract/css';
import { defaultThemeValues } from '@dolshin/design-token';
import { vars } from '@dolshin/theme-contract';

export const defaultThemeClass = createTheme(vars, defaultThemeValues);
