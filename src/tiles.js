import React from 'react';
import PropTypes from 'prop-types';

export const TilesContext = React.createContext(false);

const Tiles = ({
  children,
  ...props
}) => (
  <TilesContext.Provider value={props}>
    {children}
  </TilesContext.Provider>
);

Tiles.propTypes = {
  children: PropTypes.node,
};

Tiles.defaultProps = {
  children: null,
};

export default Tiles;
