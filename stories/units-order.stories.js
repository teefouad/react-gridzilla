/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function offsets() {
  return (
    <>
      <Grid>
        <Unit span="3">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="3" offset="25%">
          <Box>
            Offset by 25%
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

export function pushAndPull() {
  return (
    <>
      <Grid>
        <Unit span="4">
          <Box>
            (1) Unit
          </Box>
        </Unit>

        <Unit span="4" push="1 of 3">
          <Box>
            (2) Pushed by one third
          </Box>
        </Unit>

        <Unit span="4" pull="1 of 3">
          <Box>
            (3) Pulled by one third
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function firstAndLast() {
  return (
    <>
      <Grid>
        <Unit span="3" last>
          <Box>
            1 (last)
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            2
          </Box>
        </Unit>

        <Unit span="3" first>
          <Box>
            3 (first)
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            4
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function reverse() {
  return (
    <>
      <Grid reverse>
        <Unit span="3">
          <Box>
            1
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            2
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            3
          </Box>
        </Unit>

        <Unit span="3">
          <Box>
            4
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Units Order',
};
