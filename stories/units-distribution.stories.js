/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function spaceAround() {
  return (
    <>
      <Grid space="around">
        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function spaceBetween() {
  return (
    <>
      <Grid space="between">
        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function spaceEvenly() {
  return (
    <>
      <Grid space="evenly">
        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Units Distribution',
};
