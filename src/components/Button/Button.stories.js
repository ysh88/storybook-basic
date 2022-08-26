import React from 'react';
import Button from './Button';

// 스토리북에 컴포넌트 추가
export default {
  title: 'form/Button', //내비게이션 패널에 표시할 이름(필수 o,중복 x)
  component: Button, //필수 x
  args:{
    children:"Button" //컴포넌트 내에 있는 모든 스토리에 공통으로 자식 props 설정
  }
};

// 메뉴(컴포넌트) 아래에 추가할 스토리
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// args in v6
const Template = args=><Button {...args}/>;
// 스토리 생성
export const PrimaryA = Template.bind({});
// props 작성
PrimaryA.args = {
  variant:"primary",
  children:"Primary Args", //위에서 설정한 공통 props를 개별 스토리에서 재할당, 덮어쓰기 가능
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant:"secondary",
  children:"Secondary Args",
}

// args 메커니즘을 쓰는 가장 주된 이유는 코드 재활용성
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args={
  ...PrimaryA.args,//기존 props 재활용
  // children:"Long Primary args"
}


