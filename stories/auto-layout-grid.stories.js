/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function example1() {
  return (
    <>
      <Grid auto size="2">
        <Unit>
          <Box>
            Unit 1
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 2
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 3
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 4
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 5
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 6
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function example2() {
  return (
    <>
      <Grid auto size="3">
        <Unit>
          <Box>
            Unit 1
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 2
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 3
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 4
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 5
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 6
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function customUnitSize() {
  return (
    <>
      <Grid auto size="3">
        <Unit>
          <Box>
            Unit 1
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 2
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 3
          </Box>
        </Unit>

        <Unit>
          <Box>
            Unit 4
          </Box>
        </Unit>

        <Unit span="2 of 3">
          <Box>
            Unit 5
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Auto-layout Grid',
};
