/* eslint-disable */
/** @jsx jsx */

import { css, jsx } from '@emotion/core';

export default ({ color, children, ...props }) => (
  <div
    css={css`
      position: relative;
      height: 100%;
      padding: 15px;
      font-family: sans-serif;
      text-align: center;
      color: #fff;
      background: linear-gradient(45deg, rgb(255, 163, 71), rgb(255, 71, 163)) center center / 100% fixed;
      background: ${color};
      background-position: center center;
      border-radius: 3px;
      box-sizing: border-box;
    `}
    {...props}
  >
    {children}
  </div>
);
