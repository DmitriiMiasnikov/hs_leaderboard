import React from "react";
import styled, { css } from "styled-components";

import { getMarginStyles } from "src/shared/types";

import { TIcon, TIconBase } from "./types";
import { configIcons, IconKeys } from "./config";
import { getSizeStyles, getFillStyles, getRotateStyles } from "./helpers";

const IconBase = styled.svg<TIconBase>(
  (props) => css`
    ${getSizeStyles(props)}
    ${getMarginStyles(props)}
    ${getFillStyles(props)}
    ${getRotateStyles(props)}
  `
);

const Icon: React.FunctionComponent<TIcon> = ({ name, ...props }) => {
  return <IconBase {...props} as={configIcons[name as IconKeys]} />;
};

export default Icon;
