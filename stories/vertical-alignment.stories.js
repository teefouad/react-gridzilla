/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function alignTop() {
  return (
    <>
      <Grid align="top">
        <Unit span="1 of 3">
          <Box style={{ height: 60 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 120 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 40 }}>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function alignMiddle() {
  return (
    <>
      <Grid align="middle">
        <Unit span="1 of 3">
          <Box style={{ height: 60 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 120 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 40 }}>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function alignBottom() {
  return (
    <>
      <Grid align="bottom">
        <Unit span="1 of 3">
          <Box style={{ height: 60 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 120 }}>
            Unit
          </Box>
        </Unit>

        <Unit span="1 of 3">
          <Box style={{ height: 40 }}>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function alignUnits() {
  return (
    <>
      <Grid style={{ height: 120 }}>
        <Unit span="1 of 3" align="bottom">
          <Box>
            Bottom
          </Box>
        </Unit>

        <Unit span="1 of 3" align="middle">
          <Box>
            Middle
          </Box>
        </Unit>

        <Unit span="1 of 3" align="top">
          <Box>
            Top
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Vertical Alignment',
};
