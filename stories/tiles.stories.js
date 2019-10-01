/* eslint-disable */

import React from 'react';
import Box from './box';
import Tiles from '../src/tiles';
import Grid from '../src/grid';
import Unit from '../src/unit';

export function example1() {
  return (
    <>
      <Tiles>
        <Grid>
          <Unit span="6">
            <Grid vertical>
              <Unit>
                <Box>
                  <h3>
                    Unit A
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </Box>
              </Unit>

              <Unit>
                <Box>
                  <h3>
                    Unit A
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </Box>
              </Unit>
            </Grid>
          </Unit>

          <Unit span="6">
            <Box>
              <h3>
                Unit C
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>
            </Box>
          </Unit>
        </Grid>
      </Tiles>
    </>
  );
}

export function example2() {
  return (
    <>
      <Tiles>
        <Grid>
          <Unit span="75%">
            <Grid vertical>
              <Unit>
                <Grid>
                  <Unit span="25%">
                    <Grid vertical>
                      <Unit>
                        <Box>
                          <h3>
                            Unit A
                          </h3>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </Box>
                      </Unit>

                      <Unit>
                        <Box>
                          <h3>
                            Unit A
                          </h3>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </Box>
                      </Unit>
                    </Grid>
                  </Unit>

                  <Unit span="75%">
                    <Box>
                      <h3>
                        Unit A
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </Box>
                  </Unit>
                </Grid>
              </Unit>

              <Unit>
                <Box>
                  <h3>
                    Wide Unit
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus a aperiam deserunt neque natus quisquam inventore, laudantium recusandae. Nobis, explicabo.
                  </p>
                </Box>
              </Unit>
            </Grid>
          </Unit>

          <Unit span="25%">
            <Box>
              <h3>
                Skyscraper Unit
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus
                mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus
                a aperiam deserunt neque natus quisquam inventore, laudantium recusandae.
                Nobis, explicabo.
              </p>
            </Box>
          </Unit>
        </Grid>
      </Tiles>
    </>
  );
}

export default {
  title: 'Tiles',
};
