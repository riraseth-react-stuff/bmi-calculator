import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const { name, type, title, value, onChange } = props;
  return (
    <div className="input-groups">
      <div className="label">{title}</div>
      <div className="range-container">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="range-input"
          autoComplete="false"
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
