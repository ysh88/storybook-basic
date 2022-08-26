import React, { Component } from 'react';
import Button from './Button';

// 스토리북에 컴포넌트 추가
export default {
  title: 'Button', //내비게이션 패널에 표시할 이름(필수 o,중복 x)
  component: Button, //필수 x
};

// 메뉴(컴포넌트) 아래에 추가할 스토리
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
