/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function gridSize() {
  return (
    <>
      <Grid size="5">
        <Unit md="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit md="3">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Grid Size',
};
