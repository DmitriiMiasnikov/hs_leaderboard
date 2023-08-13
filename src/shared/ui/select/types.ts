import { MultiValue } from 'react-select';
import { TMargin } from 'src/shared/types';

export type TReactSelectProps = {
  height: string;
  rounded: boolean;
};

export type TOption<T> = { value: T; label: string };

export type TSelect<T> = TMargin & {
  options: TOption<T>[];
  value: TOption<T>[] | null;
  name: string;
  disabled?: boolean;
  title?: string;
  controlShouldRenderValue?: boolean;
  placeholder?: string;
  height?: string;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  isClearable?: boolean;
  rounded?: boolean;
  onChange?: (option: MultiValue<TOption<T>> | null) => void;
};
