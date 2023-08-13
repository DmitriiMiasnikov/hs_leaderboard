import { TMargin, ColorKeys } from 'src/shared/types';
import { IconKeys } from './config';

export type TIconBase = TMargin & {
  $size?: number | 'fit';
  $color?: ColorKeys;
  $rotate?: string;
};

export type TIcon = TIconBase & {
  name: IconKeys;
};