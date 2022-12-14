import React from 'react';
import {addDecorator} from '@storybook/react';
import Center from '../src/components/Center/Center';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator(story=><Center>{story()}</Center>); //스토리북 전체 컴포넌트에 Center 데코레이터 적용