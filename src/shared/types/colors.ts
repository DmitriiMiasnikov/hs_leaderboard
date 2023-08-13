import { Property } from 'csstype';
import theme from 'public/styles/theme';

type Colors = { [key in ColorKeys]: Property.Color };

export type ColorKeys = keyof typeof theme.colors;

export const configColors: Colors = theme.colors;