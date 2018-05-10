import React from 'react';
import PropTypes from 'prop-types';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Rte from 'components/atoms/text/Rte';

const Streamer = ({ text }) => (
  <Layer
    size="large"
    color="white"
  >
    <Retain
      narrow
    >
      <div className="u-text-center  u-beta">
        <Rte richText={text} />
      </div>
    </Retain>
  </Layer>
);

Streamer.propTypes = {
  text: PropTypes.string,
};
Streamer.defaultProps = {
  text: null,
};

export default Streamer;
