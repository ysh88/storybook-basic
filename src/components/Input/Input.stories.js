import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Small = () => <Input variant="small" value="Small" />;
export const Medium = () => <Input variant="medium" value="Medium" />;
export const Large = () => <Input variant="large" value="Large" />;