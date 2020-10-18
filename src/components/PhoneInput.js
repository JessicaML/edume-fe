import React from 'react';
import PropTypes from 'prop-types';

const PhoneInput = ({ onClick, disabled, data }) => (
  <div className="phoneInput-wrapper">
    {data && Object.keys(data).map((number) => (
      <button
        type="button"
        disabled={disabled}
        className="phoneInput-button"
        key={number}
        onClick={() => onClick(number)}
      >
        <h2 className="phoneInput-h2">{number}</h2>
        <p className="phoneInput-p">{data[number]}</p>
      </button>
    ))}
  </div>
);

PhoneInput.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  data: PropTypes.shape({}),
};

export default PhoneInput;
