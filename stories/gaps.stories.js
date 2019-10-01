/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function largest() {
  return (
    <>
      <Grid gap="largest">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function larger() {
  return (
    <>
      <Grid gap="larger">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function large() {
  return (
    <>
      <Grid gap="large">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function medium() {
  return (
    <>
      <Grid gap="medium">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function small() {
  return (
    <>
      <Grid gap="small">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function smaller() {
  return (
    <>
      <Grid gap="smaller">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function smallest() {
  return (
    <>
      <Grid gap="smallest">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function none() {
  return (
    <>
      <Grid gap="none">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function custom() {
  return (
    <>
      <Grid gap="1">
        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Unit
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Gaps',
};
