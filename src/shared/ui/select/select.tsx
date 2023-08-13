import React, { useId } from "react";
import ReactSelect, { MultiValue, SingleValue } from "react-select";

import { FieldLabel, FieldWrapper, reactSelectStyles } from "./styled";
import { TOption, TSelect } from "./types";

const Select = <T,>({
  name,
  title,
  placeholder = "",
  controlShouldRenderValue = true,
  closeMenuOnSelect = true,
  hideSelectedOptions = false,
  disabled = false,
  isClearable = true,
  rounded = false,
  height = "11rem",
  options,
  value,
  onChange = () => {},
  ...props
}: TSelect<T>): JSX.Element => {
  const styles = reactSelectStyles<T>({ height, rounded });

  const onOptionChange = (
    newValue: SingleValue<TOption<T>> | MultiValue<TOption<T>>
  ) => {
    if (newValue === null) onChange(null);
    if (Array.isArray(newValue)) onChange(newValue);
  };

  const hasTitle =
    (value && !!value.length) && title;

  return (
    <FieldWrapper {...props}>
      {hasTitle && <FieldLabel htmlFor={title}>{title}</FieldLabel>}
      <ReactSelect<TOption<T>, boolean>
        id={`select-${name}`}
        aria-label={`select-${name}`}
        inputId={name}
        isMulti={true}
        instanceId={useId()}
        value={value}
        options={options}
        placeholder={placeholder}
        isDisabled={disabled}
        styles={styles}
        noOptionsMessage={() => ""}
        onChange={onOptionChange}
        closeMenuOnSelect={closeMenuOnSelect}
        isClearable={isClearable}
        controlShouldRenderValue={controlShouldRenderValue}
        hideSelectedOptions={hideSelectedOptions}
      />
    </FieldWrapper>
  );
};

export default Select;
