import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import makeResponsive from './make-responsive';
import { getCSSLength, flexMapper, cleanObject } from './helpers';
import { GridContext } from './grid';
import { getConfig } from './config';

/**
 * Helper function that returns the span value as a number between 0 and 1
 * @param {Number | String} span User specified span for the unit
 * @param {Number} total Total number of columns for the containing grid
 */
const getUnitSpan = (span, total = 12) => {
  if (/^\d+$/.test(span.toString())) {
    return Math.min(parseInt(span, 10), total) / total;
  }

  if (/^\d+(\s*?)+(\/|-|:|of)(\s*?)+\d+$/.test(span.toString())) {
    return span.toString().match(/\d+/g).reduce((p, n) => p / n);
  }

  if (/^\d+%$/.test(span.toString())) {
    return parseInt(span, 10) / 100;
  }

  return span;
};

const Unit = ({
  getResponsiveProps,
  children,
  ...props
}) => (
  <GridContext.Consumer>
    {
      // eslint-disable-next-line
      function Unit({ gridProps }) {
        let shorthandUnitSpan;
        const breakpoints = getConfig('breakpoints');
        const breakpointNames = Object.keys(breakpoints);

        const responsiveProps = getResponsiveProps(
          ({ breakpointProps, breakpointName }) => {
            const [
              alignRow = breakpointProps.stretch ? 'stretch' : breakpointProps.alignRow,
              alignCol = breakpointProps.alignCol,
            ] = breakpointProps.align.split(' ').filter(Boolean);

            const breakpointGridProps = gridProps[breakpointName];

            shorthandUnitSpan = props[breakpointName] || shorthandUnitSpan;

            const unitSpan = (
              breakpointProps.span
              || shorthandUnitSpan
              || breakpointGridProps.unitSpan
            );

            const unitOffset = getUnitSpan(breakpointProps.offset, breakpointGridProps.size);
            const unitPush = getUnitSpan(breakpointProps.push, breakpointGridProps.size);
            const unitPull = getUnitSpan(breakpointProps.pull, breakpointGridProps.size);
            const unitLeft = unitPush - unitPull;

            const unitOrder = (
              (breakpointProps.first && -1)
              || (breakpointProps.last && 9999)
              || breakpointProps.order
            );

            let flex;
            let unitSize;

            if (unitSpan === 'min') {
              flex = 'none';
              unitSize = 'auto';
            } else
            if (unitSpan === 'max') {
              flex = '1';
              unitSize = 'auto';
            } else
            if (unitSpan !== undefined) {
              const v = getUnitSpan(unitSpan, breakpointGridProps.size) * 100;
              flex = `0 0 ${v}%`;
              unitSize = `${v}%`;
            } else
            if (breakpointGridProps.size === 'auto') {
              flex = '1';
              unitSize = 'auto';
            } else
            if (breakpointGridProps.auto) {
              const v = getUnitSpan(1, breakpointGridProps.size) * 100;
              flex = `0 0 ${v}%`;
              unitSize = `${v}%`;
            } else {
              flex = '0 0 100%';
              unitSize = '100%';
            }

            return css`
              label: unit;
              position: relative;
              flex: ${flex};
              ${`${breakpointGridProps.vertical ? 'height' : 'width'}: ${unitSize}`};
              left: ${Number.isNaN(unitLeft) ? null : `${unitLeft * 100}%`};
              margin-left: ${Number.isNaN(unitOffset) ? null : `${unitOffset * 100}%`};
              padding: ${getCSSLength(breakpointGridProps.gapRows)} ${getCSSLength(breakpointGridProps.gapCols)};
              order: ${unitOrder};
              justify-self: ${flexMapper[alignCol] || alignCol};
              align-self: ${flexMapper[alignRow] || alignRow};
              box-sizing: border-box;
            `;
          },
        );

        const otherProps = cleanObject(props, [
          'align',
          'alignCol',
          'alignRow',
          'offset',
          'order',
          'first',
          'last',
          'pull',
          'push',
          'span',
          ...breakpointNames,
        ]);

        return (
          <div
            {...responsiveProps}
            {...otherProps}
            data-gz="unit"
          >
            {children}
          </div>
        );
      }
    }
  </GridContext.Consumer>
);

Unit.propTypes = {
  align: PropTypes.string,
  alignCol: PropTypes.string,
  alignRow: PropTypes.string,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  first: PropTypes.bool,
  last: PropTypes.bool,
  pull: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  push: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getResponsiveProps: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Unit.defaultProps = {
  align: '',
  alignCol: undefined,
  alignRow: undefined,
  offset: 0,
  order: undefined,
  first: false,
  last: false,
  pull: 0,
  push: 0,
  span: undefined,
  children: null,
};

export default makeResponsive(Unit);
