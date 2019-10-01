/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function wrap() {
  return (
    <>
      <Grid>
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Another Unit
          </Box>
        </Unit>

        <Unit span="5">
          <Box>
            This should wrap onto a new line
          </Box>
        </Unit>

        <Unit span="6">
          <Box>
            Subsequent units will continue along the new line
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function noWrap() {
  return (
    <>
      <Grid wrap={false}>
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
            Another Unit
          </Box>
        </Unit>

        <Unit span="5">
          <Box>
            This will <em>not</em> wrap onto a new line
          </Box>
        </Unit>

        <Unit span="6">
          <Box>
            Subsequent units will continue along the <em>same</em> line
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Unit Wrapping',
};
