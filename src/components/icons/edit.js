import React from 'react';
import PropTypes from 'prop-types';

// https://material.io/tools/icons/?icon=edit&style=baseline
const EditIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    />
  </svg>
);

EditIcon.propTypes = {
  color: PropTypes.string,
};

EditIcon.defaultProps = {
  color: 'none',
};

export default EditIcon;
