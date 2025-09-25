import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children, className, ...rest }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper className={className}>
      <InnerSelect value={value} onChange={onChange} {...rest}>
        {children}
      </InnerSelect>
      <Chevron id="chevron-down" strokeWidth={2}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const InnerSelect = styled.select`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  padding: 12px ${54 / 16}rem 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
  appearance: none;
  width: fit-content;

  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const Chevron = styled(Icon)`
  position: absolute;
  top: ${10 / 16}rem;
  right: ${12 / 16}rem;
  pointer-events: none;
`;

export default Select;
