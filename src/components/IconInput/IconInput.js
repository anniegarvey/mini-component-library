import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  className,
  ...rest
}) => {
  const isSmall = size === 'small';
  return <Wrapper className={className}>
    <label>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon id={icon} size={isSmall ? 16 : 24} strokeWidth={2} isSmall={isSmall} />
      <Input isSmall={isSmall} width={width} {...rest} />
    </label>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: ${p => p.isSmall ? (4 / 16) : (5/16)}rem;
  pointer-events: none;
`;

const Input = styled.input`
  border: none;
  border-block-end: ${p => p.isSmall ? 1 : 2}px solid ${COLORS.black};
  color: inherit;
  font-family: Roboto, sans-serif;
  font-size: ${p => p.isSmall ? (14 / 16) : (18 / 16)}rem;
  font-weight: 700;
  padding-inline-start: ${p => p.isSmall ? (24 / 16) : (36 / 16)}rem;
  padding-block: 3px;
  width: ${p => p.width}px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
