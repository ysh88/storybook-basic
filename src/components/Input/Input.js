import React from 'react';
import './Input.css';

function Input({ variant = 'small', value, ...rest }) {
  return <input className={`input ${variant}`} value={value} {...rest} />;
}

export default Input;
