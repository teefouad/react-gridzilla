/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function unitSpan() {
  return (
    <>
      <Grid>
        <Unit md="25%">
          <Box>
            span=25%
          </Box>
        </Unit>

        <Unit md="0.25">
          <Box>
            span=0.25
          </Box>
        </Unit>

        <Unit md="3">
          <Box>
            span=3
          </Box>
        </Unit>

        <Unit md="1 of 4">
          <Box>
            span=1 of 4
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function min() {
  return (
    <>
      <Grid>
        <Unit md="min">
          <Box>
            Fit Content
          </Box>
        </Unit>

        <Unit md="3">
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

export function max() {
  return (
    <>
      <Grid>
        <Unit md="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit md="2">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit md="max">
          <Box>
            Greedy Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function responsive() {
  return (
    <>
      <Grid>
        <Unit lg="75%" sm="50%">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit lg="25%" sm="50%">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Unit Span',
};
