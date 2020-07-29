import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default function Button({ button: { id, text, state }, onClick }) {

    return (
        <a className={`my-button ${state}`}>
            {text}
        </a>
    )
}
Button.propTypes = {
    button: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func,
  };