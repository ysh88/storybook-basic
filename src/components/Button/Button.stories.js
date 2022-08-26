import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
  title: 'form/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>], //decorator로 버튼 컴포넌트에서 공통 적용
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
