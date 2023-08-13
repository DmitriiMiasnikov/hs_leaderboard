export const colorShades = ['grey', 'red', 'orange', 'green', 'blue'] as const;
export type ColorShades = (typeof colorShades)[number];

export const colorIntensities = [
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
  '50',
] as const;
type ColorIntensity = (typeof colorIntensities)[number];

export type RegularColors = `${ColorShades}_${ColorIntensity}`;

export type ColorKeys = 'black' | 'white' | 'transparent' | RegularColors;

export const configColors = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',

  grey_900: '#18181B',
  grey_800: '#435152',
  grey_700: '#737373',
  grey_600: '#8C8C8C',
  grey_500: '#A3A3A3',
  grey_400: '#B6B6B6',
  grey_300: '#CCCCCC',
  grey_200: '#E6E6E6',
  grey_100: '#F1F2F6',
  grey_50: '#F0F0F0',

  red_900: '#7F1D1D',
  red_800: '#991B1B',
  red_700: '#B91C1C',
  red_600: '#E52D2D',
  red_500: '#FF3D00',
  red_400: '#F87171',
  red_300: '#FCA5A5',
  red_200: '#FECACA',
  red_100: '#FEE2E2',
  red_50: '#FEF2F2',

  orange_900: '#7C2D12',
  orange_800: '#9A3412',
  orange_700: '#C2410C',
  orange_600: '#EA580C',
  orange_500: '#F78216',
  orange_400: '#FFA51F',
  orange_300: '#FDBA74',
  orange_200: '#FED7AA',
  orange_100: '#FFEDD5',
  orange_50: '#FFF7ED',

  green_900: '#064E3B',
  green_800: '#065F46',
  green_700: '#047857',
  green_600: '#25B900',
  green_500: '#2BD700',
  green_400: '#34D391',
  green_300: '#0AFEBB',
  green_200: '#9EF2D7',
  green_100: '#D1FAE5',
  green_50: '#ECFDF5',

  blue_900: '#1A3254',
  blue_800: '#204070',
  blue_700: '#003D98',
  blue_600: '#4D76B7',
  blue_500: '#1143FE',
  blue_400: '#4970FF',
  blue_300: '#7290FF',
  blue_200: '#A6CEE3',
  blue_100: '#EEF5FF',
  blue_50: '#F3F7F9',
} as const;