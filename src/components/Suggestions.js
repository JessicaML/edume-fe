import React from 'react';
import PropTypes from 'prop-types';

const Suggestions = ({ onClick, suggestions }) => (
  <div className="suggestions">
    <div className="suggestions-wraper">
      {suggestions && suggestions.map((suggestion) => (
        <button
          type="button"
          className="suggestions-button"
          key={suggestion}
          onClick={() => onClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  </div>
);

Suggestions.propTypes = {
  onClick: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default Suggestions;
