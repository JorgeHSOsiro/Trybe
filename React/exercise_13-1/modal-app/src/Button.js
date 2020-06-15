import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  isDisable: PropTypes.bool,
  showComponent: PropTypes.func,
  content: PropTypes.string,
}

export default Button;
