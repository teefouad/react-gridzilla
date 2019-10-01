import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import makeResponsive from './make-responsive';
import { getConfig } from './config';
import { getCSSLength, getType, cleanObject } from './helpers';

const Container = ({
  getResponsiveProps,
  children,
  ...props
}) => {
  const responsiveProps = getResponsiveProps(
    ({ breakpointProps, breakpointWidth }) => {
      const sizes = getConfig('container.maxWidth');
      const sortedSizes = Object.values(sizes).sort((a, b) => a - b);
      const sizeShorthand = Object.keys(sizes).find(v => breakpointProps[v] === true);
      const autoSizeWidth = sortedSizes.filter(v => v < breakpointWidth).pop();
      const fixedWidth = sizes[sizeShorthand || breakpointProps.size] || breakpointProps.size;

      let containerWidth = fixedWidth;

      if (breakpointProps.autoSize) {
        if (getType(fixedWidth) !== 'null') {
          containerWidth = Math.min(fixedWidth, autoSizeWidth);
        } else {
          containerWidth = autoSizeWidth;
        }
      }

      if (getType(containerWidth) !== 'number' || Number.isNaN(containerWidth)) {
        containerWidth = null;
      }

      return css`
        label: container;

        /* Center the container. */
        margin-right: auto;
        margin-left: auto;

        /* Add side padding. */
        padding: 0 ${getCSSLength(getConfig('container.padding'))};
        
        /* Avoid overflowing by keeping the container at */
        /* max-width 100% of its parent. */
        /* This also allows containers to be nested. */
        max-width: 100%;

        /* Mininum width */
        min-width: ${getCSSLength(getConfig('container.minSize'))};

        /* Set container width. */
        width: 100%;
        max-width: ${getCSSLength(containerWidth)};

        /* border-box forces the browser to include padding */
        /* and borders when calculating the width. */
        box-sizing: border-box;

        /* Clear floating elements. */
        &:before,
        &:after {
          content: '';
          display: block;
          clear: both;
        }
      `;
    },
  );

  const otherProps = cleanObject(props, [
    'fluid',
    'xlarge',
    'large',
    'medium',
    'small',
    'xsmall',
    'size',
    'autoSize',
  ]);

  return (
    <div
      {...responsiveProps}
      {...otherProps}
      data-gz="container"
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
  xlarge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoSize: PropTypes.bool,
  getResponsiveProps: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Container.defaultProps = {
  fluid: false,
  xlarge: false,
  large: false,
  medium: false,
  small: false,
  xsmall: false,
  size: 'fluid',
  autoSize: true,
  children: null,
};

export default makeResponsive(Container);
