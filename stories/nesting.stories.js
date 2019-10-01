/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function nesting() {
  return (
    <>
      <Grid>
        <Unit span="50%">
          <Grid>
            <Unit span="50%">
              <Box>
                Grid A
              </Box>
            </Unit>

            <Unit span="50%">
              <Box>
                Grid A
              </Box>
            </Unit>
          </Grid>
        </Unit>

        <Unit span="50%">
          <Grid>
            <Unit span="1 of 3">
              <Box>
                Grid B
              </Box>
            </Unit>

            <Unit span="1 of 3">
              <Box>
                Grid B
              </Box>
            </Unit>

            <Unit span="1 of 3">
              <Box>
                Grid B
              </Box>
            </Unit>
          </Grid>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Nesting',
};
