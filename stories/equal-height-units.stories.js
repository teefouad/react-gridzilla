/* eslint-disable */

import React from 'react';
import Box from './box';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function stretchGrid() {
  return (
    <>
      <Grid stretch>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
            mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
            a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
            Nobis, explicabo.
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export function stretchUnit() {
  return (
    <>
      <Grid>
        <Unit span="4">
          <Box>
            Will <em>not</em> stretch
          </Box>
        </Unit>

        <Unit span="4" stretch>
          <Box>
            Will stretch
          </Box>
        </Unit>

        <Unit span="4">
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
            mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
            a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
            Nobis, explicabo.
          </Box>
        </Unit>
      </Grid>
    </>
  );
}

export default {
  title: 'Equal-height Units',
};
