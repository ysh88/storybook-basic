import React from 'react';
import Input from './Input';

export default {
  title: 'form/Input', //story hierarchy
  component: Input,
  
};

export const Small = () => <Input variant="small"  />;
export const Medium = () => <Input variant="medium" />;
export const Large = () => <Input variant="large"  />;

Small.storyName = "Small Input"; //story renaming
