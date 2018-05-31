import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

const elements = storiesOf('Input', module);

import Input from '../components/Input';

elements.addDecorator(withKnobs);

elements.add('default', () => {
  return (
    <Input
      isError={boolean('isError', false)}
      onChange={action('Input changed')}
      onUpdate={action('Input updated')}
      type={select('type', ['text', 'password'])}
      placeholder={text('placeholder', 'Пользователь')}
    />
  );
});