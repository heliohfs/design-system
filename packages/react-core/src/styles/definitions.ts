import {
  BorderRadius,
  BorderWidth,
  FontColor,
  FontStack,
  FontWeight,
  IconSize,
  Miscellaneous,
  Spacing,
  TypographyVariation,
  ZIndex,
} from '../types/defaults';

export const statusColor = {
  error: {
    xlight: '#fdf3f2',
    light: '#ee9891',
    medium: '#e04638',
    dark: '#9b2318',
    xdark: '#58240e',
  },
  warning: {
    xlight: '#fffcf0',
    light: '#ffe380',
    medium: '#ffc700',
    dark: '#cc9f00',
    xdark: '#665000',
  },
  success: {
    xlight: '#f3fcf8',
    light: '#99e6c9',
    medium: '#2db783',
    dark: '#238f67',
    xdark: '#14523b',
  },
  info: {
    xlight: '#f0f8fe',
    light: '#85c7fa',
    medium: '#239bf6',
    dark: '#0873c4',
    xdark: '#043962',
  },
};

export const hex2rgba: (hex, alpha?: number) => string = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const miscellaneous: Miscellaneous = {
  shadow: '#85807a', // rgba(133, 128, 122, 0.04)
  overlay: '#282625', // rgba(40, 38, 37, 0.5)
  bodyColor: '#f8f7f7',
  surfaceColor: '#fff', //input, group button, cards
};

export const spacing: Spacing = {
  nano: '2px',
  micro: '4px',
  mili: '8px',
  centi: '12px',
  deca: '16px',
  kilo: '24px',
  mega: '32px',
  giga: '40px',
  tera: '48px',
  peta: '56px',
  hexa: '64px',
};

export const iconSize: IconSize = {
  // centi: '1rem', // 16px
  // deca: '1.5rem', // 24px
  // kilo: '2rem', // 32px
  centi: '16px',
  deca: '24px',
  kilo: '32px',
};

export const borderRadius: BorderRadius = {
  nano: '2px',
  micro: '4px',
  mili: '8px',
  pill: '999999px',
};

export const borderWidth: BorderWidth = {
  pico: '1px',
  nano: '2px',
};

export const typography: TypographyVariation = {
  // TODO: H6 wasn't defined! It's the same of H5
  // h6: {
  //   // fontSize: '1rem', // 16px
  //   // lineHeight: '1.5rem', // 24px
  //   fontSize: '16px',
  //   lineHeight: '24px',
  // },
  h5: {
    // fontSize: '1rem', // 16px
    // lineHeight: '1.5rem', // 24px
    fontSize: '16px',
    lineHeight: '24px',
  },
  h4: {
    // fontSize: '1.125rem', // 18px
    // lineHeight: '1.688rem', // 27px
    fontSize: '18px',
    lineHeight: '27px',
  },
  h3: {
    // fontSize: '1.25rem', // 20px
    // lineHeight: '2rem', // 32px
    fontSize: '20px',
    lineHeight: '32px',
  },
  h2: {
    // fontSize: '1.625rem', // 26px
    // lineHeight: '2.375rem', // 38px
    fontSize: '26px',
    lineHeight: '38px',
  },
  h1: {
    // fontSize: '2rem', // 32px
    // lineHeight: '2.625rem', // 42px
    fontSize: '32px',
    lineHeight: '42px',
  },
  base: {
    // fontSize: '0.875rem', // 14px
    // lineHeight: '1.313rem', // 21px
    fontSize: '14px',
    lineHeight: '21px',
  },
  sub: {
    // fontSize: '0.75rem', // 12px
    // lineHeight: '1.125rem', // 18px
    fontSize: '12px',
    lineHeight: '18px',
  },
  label: {
    // fontSize: '0.625rem', ??
    // lineHeight: '0.75rem', ??
    fontSize: '11px',
    lineHeight: '14px',
  },
};

export const fontStack: FontStack = {
  default:
    'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono: 'Consolas, monaco, monospace',
};

export const fontWeight: FontWeight = {
  regular: '400',
  bold: '700',
  black: '900',
};

export const fontColor: FontColor = {
  light: '#fff',
  medium: '#85807a',
  dark: '#353231', // default
  orange: '#f89907',
};

export const zIndex: ZIndex = {
  default: 0,
  absolute: 1,
  drawer: 10,
  select: 20,
  input: 20,
  popover: 30,
  tooltip: 40,
  header: 600,
  backdrop: 700,
  sidebar: 800,
  modal: 1000,
};

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | string;
