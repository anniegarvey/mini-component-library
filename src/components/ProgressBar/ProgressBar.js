/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const HEIGHTS = {
  small: 8,
  medium: 12,
  large: 16
}

const ProgressBar = ({ value, size, ariaLabel, ariaLabelledBy, className, ...rest }) => {
  if (!ariaLabel && !ariaLabelledBy) {
    throw new Error('Either ariaLabel or ariaLabelledBy must be set to provide an accessible label');
  }
  if (!HEIGHTS[size]) {
    throw new Error(`size must be one of ${Object.keys(HEIGHTS)}`);
  }

  return <Wrapper className={className} isLarge={size === 'large'} >
    <BarRounder>
      <Bar
        value={value}
        size={size}
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
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px ${2 / 16}rem ${4 / 16}rem ${COLORS.transparentGray35};
  border-radius: ${p => p.isLarge ? 8 / 16 : 4 / 16}rem;
  padding: ${p => p.isLarge ? 4 / 16 : 0}rem;
`;

const BarRounder = styled.div`
  border-radius: ${4 / 16}rem;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: ${p => HEIGHTS[p.size] / 16}rem;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
