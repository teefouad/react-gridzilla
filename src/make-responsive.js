import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { getConfig } from './config';
import {
  cleanObject,
  destruct,
  getType,
  getCSSLength,
} from './helpers';

export default function makeResponsive(Component, mapPropsTo = 'md') {
  const breakpoints = getConfig('breakpoints');
  const breakpointNames = Object.keys(breakpoints);

  function WithResponsiveStyles(props) {
    function getResponsiveProps(styleGetter) {
      const [
        responsiveDefaultProps,
        componentDefaultProps,
      ] = destruct(Component.defaultProps || {}, breakpointNames);

      const [
        responsiveProps,
      ] = destruct(props || {}, breakpointNames);

      const selfDefaultProps = cleanObject(WithResponsiveStyles.defaultProps, [
        'mapPropsTo',
        ...breakpointNames,
      ]);

      let defaultProps = { ...selfDefaultProps, ...componentDefaultProps };
      let breakpointProps = {};

      const orderedBreakpoints = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);

      const mappingBreakpoint = (
        orderedBreakpoints.map(v => v[0]).find(v => props[v] === true)
        || props.mapPropsTo
        || mapPropsTo
      );

      const styles = orderedBreakpoints
        .map(([breakpointName, breakpointWidth]) => {
          defaultProps = {
            ...defaultProps,
            ...(responsiveDefaultProps[breakpointName] || {}),
          };

          breakpointProps = {
            // then accumulated props
            ...breakpointProps,

            // then use the component level props
            ...(
              mappingBreakpoint === breakpointName
                ? cleanObject(props, [
                  'mapPropsTo',
                  'children',
                  ...breakpointNames,
                ])
                : {}
            ),

            // then use the breakpoint specific props
            ...(responsiveProps[breakpointName] || {}),
          };

          const styleGetterArgs = {
            componentProps: breakpointProps,
            breakpointProps: {
              ...defaultProps,
              ...breakpointProps,
            },
            breakpointName,
            breakpointWidth,
          };

          const breakpointStyles = css`
            display: ${styleGetterArgs.breakpointProps.hidden ? 'none' : 'block'};
            ${css(styleGetter(styleGetterArgs))}
          `;

          if (breakpointWidth === 0) {
            return breakpointStyles;
          }

          return css`
            @media screen and (min-width: ${getCSSLength(breakpointWidth)}) {
              ${breakpointStyles}
            }
          `;
        });

      return { css: styles };
    }

    const componentProps = cleanObject(props, [
      'hidden',
      'mapPropsTo',
      ...breakpointNames.filter((v) => {
        const type = getType(props[v]);
        return type === 'object' || type === 'boolean' || type === 'undefined';
      }),
    ]);

    return (
      <Component
        getResponsiveProps={getResponsiveProps}
        {...componentProps}
      />
    );
  }

  WithResponsiveStyles.propTypes = {
    hidden: PropTypes.bool,
    mapPropsTo: PropTypes.string,
    xs: PropTypes.any,
    sm: PropTypes.any,
    md: PropTypes.any,
    lg: PropTypes.any,
    xl: PropTypes.any,
  };

  WithResponsiveStyles.defaultProps = {
    hidden: false,
    mapPropsTo: 'md',
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  };

  return WithResponsiveStyles;
}
