/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function example1() {
  return (
    <>
      <Grid size="auto">
        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function example2() {
  return (
    <>
      <Grid size="auto">
        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function customUnitSize() {
  return (
    <>
      <Grid size="auto">
        <Unit span="50%">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Auto-sized Grid',
};
