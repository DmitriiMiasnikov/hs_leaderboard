import { ColorKeys } from 'src/shared/config/colors';
import { TMargin } from 'src/shared/types';
import { IconKeys } from './config';

export type TIconBase = TMargin & {
  $size?: number | 'fit';
  $color?: ColorKeys;
  $rotate?: string;
};

export type TIcon = TIconBase & {
  name: IconKeys;
};