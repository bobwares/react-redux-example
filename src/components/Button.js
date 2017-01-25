/* eslint-disable */
import React, { PropTypes } from 'react';

const Button = ({name, onButtonClicked}) => {
  return (
      <button
        onClick={onButtonClicked}>
        {name}
      </button>
  );
}

Button.propTypes = {
    onButtonClicked: PropTypes.func,
    clicked: PropTypes.object
}

export default Button