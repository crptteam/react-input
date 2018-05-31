# react-input

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React input component.

## Usage

```javascript

import { Input } from  "@crpt/react-input";


<Input onChange={newVal => alert("newVal:", newVal)} />

```

| PropName | Description | Example |
|---|---|---|
| disabled: Boolean  | Can be disabled. |  `<Input disabled />` |
| isError: Boolean | Changes colors to error. |  `<Input isError={true} />` |
| defaultValue: String | Preset value. |  `<Input defaultValue="vasya@gmail.com" />` |
| placeholder: String | Placeholder value. |  `<Input placeholder="Имя пользователя" />` |
| onChange: Function | Callback for change event. |  `<Input onChange={val => alert(val)} />` |
| onUpdate: Function | Fires on enter press or blur. |  `<Input onUpdate={val => alert(val)} />` |
| type: String | Input type attribute. For example type="text" and type="password".  |  `<Input type="password" />` |
| rightIcon: String | Right icon. |  `<Input rightIcon={<Icon type="calendar"/>} />` |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
