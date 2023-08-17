import { ReactDatePickerProps } from 'react-datepicker';
import { Config } from 'react-popper-tooltip';
import { ESize, TMargin, TWidth } from 'src/shared/types';

export enum EVariant {
  DEFAULT = 'default',
  TABLE_CELL = 'table-cell',
}

export type TDate = (string | null)[] | null;

export type TDatePickerInput = TMargin &
  TWidth & {
    size?: `${ESize}`;
    name?: string;
    placeholder?: string;
    checkboxLabel?: string | JSX.Element;
    disabled?: boolean;
    currentDate: TDate;
    minDate?: ReactDatePickerProps['minDate'];
    maxDate?: ReactDatePickerProps['maxDate'];
    onSubmit?: (date?: TDate) => void;
    clearable?: boolean;
    offset?: Config['offset'];
    readOnly?: boolean;
    selectsRange?: boolean;
  };

export type TVariantConfig = { [innerKey in EVariant]: string };

export type TSizeStates = {
  height: string;
};
export type TSizeConfig = { [innerKey in ESize]: TSizeStates };

export type TDatePickerFieldProps = {
  empty: boolean;
};