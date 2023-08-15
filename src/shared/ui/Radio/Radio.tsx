import React from "react";

import { Label, RadioWrapper } from "./styled";
import { TRadio } from "./types";

const Radio = <T,>({
  direction = "column",
  options,
  name,
  selected,
  boldSelectedValue = false,
  onChange = () => {},
  readOnly = false,
}: TRadio<T>): JSX.Element => {
  return (
    <RadioWrapper direction={direction}>
      {options.map(({ value, label, disabled }) => {
        const checked = selected === value;
        return (
          <Label
            boldSelectedValue={boldSelectedValue}
            isChecked={checked}
            disabled={disabled}
            key={`${value}`}
            htmlFor={`${name}_${value}`}
          >
            <input
              disabled={disabled || readOnly}
              type="radio"
              id={`${name}_${value}`}
              checked={checked}
              onChange={() => onChange(value)}
              data-testid={`${name}_${value}`}
              data-cy={`${name}_${value}`}
            />
            {label}
          </Label>
        );
      })}
    </RadioWrapper>
  );
};

export default Radio;
