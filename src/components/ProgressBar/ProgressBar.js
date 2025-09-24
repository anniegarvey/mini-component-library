/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ProgressBar = ({ value, size, ariaLabel, ariaLabelledBy, className, ...rest }) => {
  if (!ariaLabel && !ariaLabelledBy) {
    throw new Error('Either ariaLabel or ariaLabelledBy must be set to provide an accessible label');
  }
  return <Wrapper className={className} size={size} >
    <BarRounder size={size}>
      <Bar
        value={value}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        aria-labelled-by={ariaLabelledBy}
        {...rest}
      />
    </BarRounder>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: fit-content;
  padding: ${p => p.size === 'large' ? 4 / 16 : 0}rem;
  box-shadow: inset 0px ${2 / 16}rem ${4 / 16}rem ${COLORS.transparentGray35};
  border-radius: ${p => p.size === 'large' ? 8 / 16 : 4 / 16}rem;
  background-color: ${COLORS.transparentGray15};
`;

const HEIGHTS = {
  small: 8,
  medium: 12,
  large: 16
}

const BarRounder = styled.div`
  width: ${p => (p.size === 'large' ? 362 : 370) / 16}rem;
  height: ${p => HEIGHTS[p.size] / 16}rem;
  border-radius: ${4 / 16}rem;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
