import React from 'react';
import Button from './Button';

export default {
  title: 'form/Button',
  component: Button,
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variantColor: 'green',
  children: 'Primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variantColor: 'yellow',
  children: 'Secondary',
};
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
