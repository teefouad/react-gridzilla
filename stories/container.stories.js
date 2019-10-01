/* eslint-disable */

import React from 'react';
import Box from './box';
import Container from '../src/container';

export function sizes() {
  return (
    <>
      <Container size="fluid">
        <Box>
          Fluid
        </Box>
      </Container>

      <Container size="xlarge">
        <Box>
          X-Large
        </Box>
      </Container>

      <Container size="large">
        <Box>
          Large
        </Box>
      </Container>

      <Container size="medium">
        <Box>
          Medium
        </Box>
      </Container>

      <Container size="small">
        <Box>
          Small
        </Box>
      </Container>

      <Container size="xsmall">
        <Box>
          X-Small
        </Box>
      </Container>

      <Container size="1000">
        <Box>
          Custom (1000px)
        </Box>
      </Container>
    </>
  );
}

export function shorthands() {
  return (
    <>
      <Container fluid>
        <Box>
          Fluid
        </Box>
      </Container>

      <Container xlarge>
        <Box>
          X-Large
        </Box>
      </Container>

      <Container large>
        <Box>
          Large
        </Box>
      </Container>

      <Container medium>
        <Box>
          Medium
        </Box>
      </Container>

      <Container small>
        <Box>
          Small
        </Box>
      </Container>

      <Container xsmall>
        <Box>
          X-Small
        </Box>
      </Container>
    </>
  );
}

export function noAutosize() {
  return (
    <>
      <Container autoSize={false}>
        <Box>
          Fluid
        </Box>
      </Container>

      <Container autoSize={false} size="xlarge">
        <Box>
          X-Large
        </Box>
      </Container>

      <Container autoSize={false} size="large">
        <Box>
          Large
        </Box>
      </Container>

      <Container autoSize={false} size="medium">
        <Box>
          Medium
        </Box>
      </Container>

      <Container autoSize={false} size="small">
        <Box>
          Small
        </Box>
      </Container>

      <Container autoSize={false} size="xsmall">
        <Box>
          X-Small
        </Box>
      </Container>

      <Container autoSize={false} size="1000">
        <Box>
          Custom (1000px)
        </Box>
      </Container>
    </>
  );
}

export function responsiveProps() {
  return (
    <>
      <Container
        xs={{ size: 200 }}
        sm={{ size: 300 }}
        md={{ size: 'medium' }}
        lg={{ size: 'small' }}
        xl={{ size: 400 }}
      >
        <Box>
          Responsive (Random Sizes)
        </Box>
      </Container>
    </>
  );
}

export function mapProps() {
  return (
    <>
      <Container xl size="240">
        <Box>
          Will be 240px on xl
        </Box>
      </Container>
    </>
  );
}

export default {
  title: 'Container',
};
