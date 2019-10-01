/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function alignLeft() {
  return (
    <>
      <Grid alignCols="left">
        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function alignCenter() {
  return (
    <>
      <Grid alignCols="center">
        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function alignRight() {
  return (
    <>
      <Grid alignCols="right">
        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="2">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Horizontal Alignment',
};
