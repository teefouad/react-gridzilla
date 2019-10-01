/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function verticalGrid() {
  return (
    <>
      <Grid vertical style={{ height: 600 }}>
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="8">
          <Box>
            Another Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Vertical Grid',
};
