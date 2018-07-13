import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  display: block;
  position: absolute;
  height: ${props => props.height};
  line-height: ${props => props.height};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  top: ${props => props.top};
  font-family: ${props => props.fontFamily};
  transition: all 0.3s ease;
  padding: 0 17px;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  ${({ focused }) => {
    if (focused)
      return `
				white-space: nowrap;
				align-items: flex-start;
				padding: 11px 17px;
				overflow: hidden;
				justify-content: flex-start;
				width: calc(100% - 17px);
	`;
  }};
`;

const Placeholder = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Input ? props.theme.Input : {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedPlaceholder = innerMerge(
    {},
    defaultTheme.Input.Placeholder,
    (props.theme && props.theme.Input && props.theme.Input.Placeholder) || {}
  );

  const key = props.disabled ? "disabled" : props.isError ? "error" : "main";

  Object.assign(
    theme,
    getThemeAsPlainObjectByKeys(
      mergedPlaceholder,
      key,
      props.focused ? "focused" : "normal"
    )
  );

  return <Elem {...theme} {...props} />;
};

export default Placeholder;
