import React from 'react';
import './Input.css';

function Input({ variant = 'small', ...rest }) {
  return <input className={`input ${variant}`} {...rest} />;
}

export default Input;
