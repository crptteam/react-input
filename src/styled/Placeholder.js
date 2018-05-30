import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

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
`;

const Placeholder = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Placeholder) || defaultTheme.Placeholder,
      props.disabled ? 'disabled' : props.isError ? 'error' : 'main',
      props.focused ? 'focused' : 'normal'
    )
  );

  return <Elem {...theme} {...props} />;
};

export default Placeholder;
