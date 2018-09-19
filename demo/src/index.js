import React from 'react';
import { render } from 'react-dom';

import Example from '../../src';

const Demo = (props) => (
  <div>
    <h1>react-input Demo</h1>
    <Example
      placeholder="Телефон"
      mask="+7 (999) 999-99-99"
      onChange={(e) => console.log(e)}
    />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
