import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import makeResponsive from './make-responsive';
import { getConfig } from './config';
import { getCSSLength, flexMapper, cleanObject } from './helpers';
import { TilesContext } from './tiles';

/**
 * The grid context is used to pass down grid configuration for child units.
 */
export const GridContext = React.createContext({});

/**
 * Parses a grid gap value.
 * @param {Number | String} v Gap value to be parsed
 */
const parseGapValue = (value) => {
  let gapValue = getConfig('grid.gaps')[value] !== undefined ? getConfig('grid.gaps')[value] : value;

  /* divide gap value by 2 */
  gapValue = +gapValue.toString().replace(/\d+/, parseInt(gapValue, 10) * 0.5);

  return gapValue;
};

const Grid = ({
  getResponsiveProps,
  children,
  ...props
}) => (
  <TilesContext.Consumer>
    {
      // eslint-disable-next-line
      function Grid(tilesProps) {
        const gridProps = {};

        const responsiveProps = getResponsiveProps(
          ({ breakpointProps, breakpointName }) => {
            const [
              gapCols = parseGapValue(breakpointProps.gapCols),
              gapRows = parseGapValue(breakpointProps.gapRows),
            ] = breakpointProps.gap.split(' ').filter(Boolean).map(parseGapValue);

            const [
              alignRows = breakpointProps.alignRows,
              alignCols = breakpointProps.alignCols,
            ] = breakpointProps.align.split(' ').filter(Boolean);

            gridProps[breakpointName] = {
              ...breakpointProps,
              gapCols,
              gapRows,
              size: tilesProps && breakpointProps.size === undefined ? 'auto' : breakpointProps.size,
            };

            const alignItems = (tilesProps || breakpointProps.stretch) ? 'stretch' : alignRows;

            const space = breakpointProps.justify ? 'between' : breakpointProps.space;
            const justifyContent = space ? `space-${space}` : alignCols;

            return css`
              label: grid;
              /* Set display mode. */
              display: flex;
              flex-direction: ${`${breakpointProps.vertical ? 'column' : 'row'}${breakpointProps.reverse ? '-reverse' : ''}`};
              flex-wrap: ${{ true: 'wrap', false: 'nowrap' }[breakpointProps.wrap] || breakpointProps.wrap};
              justify-content: ${flexMapper[justifyContent] || justifyContent};
              align-items: ${flexMapper[alignItems] || alignItems};
              margin: -${getCSSLength(gapRows)} -${getCSSLength(gapCols)};
              box-sizing: border-box;

              /* Create gaps between consecutive grids */
              & + & {
                margin-top: ${getCSSLength(gapRows)};
              }
            `;
          },
        );

        const otherProps = cleanObject(props, [
          'align',
          'alignCols',
          'alignRows',
          'space',
          'justify',
          'stretch',
          'auto',
          'unitSpan',
          'gap',
          'gapCols',
          'gapRows',
          'reverse',
          'size',
          'vertical',
          'wrap',
        ]);

        const gridElement = (
          <GridContext.Provider value={{ gridProps }}>
            <div
              {...responsiveProps}
              {...otherProps}
              data-gz="grid"
            >
              {children}
            </div>
          </GridContext.Provider>
        );

        if (tilesProps) {
          const Tiles = () => (
            <div
              css={css`
                display: flex;
                height: 100%;

                & > * {
                  flex: 1 1 0;
                  align-items: stretch;
                }
              `}
              {...tilesProps}
              data-gz="tiles"
            >
              {gridElement}
            </div>
          );

          return Tiles();
        }

        return gridElement;
      }
    }
  </TilesContext.Consumer>
);

Grid.propTypes = {
  align: PropTypes.string,
  alignCols: PropTypes.string,
  alignRows: PropTypes.string,
  space: PropTypes.string,
  justify: PropTypes.bool,
  stretch: PropTypes.bool,
  auto: PropTypes.bool,
  unitSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gapCols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gapRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  reverse: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  vertical: PropTypes.bool,
  wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  getResponsiveProps: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Grid.defaultProps = {
  align: '',
  alignCols: 'flex-start',
  alignRows: 'flex-start',
  space: undefined,
  justify: false,
  stretch: false,
  auto: false,
  unitSpan: undefined,
  gap: '',
  gapCols: 'small',
  gapRows: 'small',
  reverse: false,
  size: undefined,
  vertical: false,
  wrap: true,
  children: null,
};

export default makeResponsive(Grid);
