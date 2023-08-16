import React, { FC } from "react";

import { TInput } from "./types";
import { InputWrapper, InputField, CloseButtonWrapper } from "./styled";
import { Button } from "../button";
import { Icon } from "../icon";

const Input: FC<TInput> = ({ value, onChange, placeholder, ...props }) => {
  return (
    <InputWrapper {...props}>
      <InputField
        type="text"
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
        value={value}
      />
      <CloseButtonWrapper>
        <Button
          variant="hollow"
          size="small"
          iconType="only"
          icon={<Icon name="close" $color="white" />}
          onClick={() => onChange("")}
        />
      </CloseButtonWrapper>
    </InputWrapper>
  );
};

export default Input;
