import React from "react";
import { render } from "react-dom";
import { hasOnlyDigits } from "../../src/utils";
import Example from "../../src";

const Demo = props => (
  <div>
    <h1>react-input Demo</h1>
    <Example
      placeholder="Телефон"
      validate={val => hasOnlyDigits(val)}
      onChange={e => console.log(e)}
    />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
