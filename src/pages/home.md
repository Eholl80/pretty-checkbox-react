---
title: Home
order: -2
---

<h4 align="center">Quickly integrate pretty checkbox Components (checkbox, switch, radio) with React</h4>

<p align="center">
 <a href="https://github.com/atomicpages/pretty-checkbox-react/releases">
    <img src="https://img.shields.io/github/release/atomicpages/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Github Release">
  </a>
   <a href="https://github.com/atomicpages/pretty-checkbox-react/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/pretty-checkbox-react" target="_blank" rel="nofollow noreferred noopener">
    <img src="https://img.shields.io/npm/dm/pretty-checkbox-react.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://travis-ci.org/atomicpages/pretty-checkbox-react" target="_blank" rel="nofollow noreferred noopener">
    <img alt="Build Status" src="https://img.shields.io/travis/atomicpages/pretty-checkbox-react.svg?style=flat-square">
  </a>
  <a href='https://coveralls.io/github/atomicpages/pretty-checkbox-react?branch=master' target="_blank" rel="nofollow noreferred noopener">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/atomicpages/pretty-checkbox-react/master.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/atomicpages/pretty-checkbox-react/maintainability" target="_blank" rel="nofollow noreferred noopener">
    <img src="https://api.codeclimate.com/v1/badges/e7cca7813f2905d7aca7/maintainability" />
    </a>
</p>
<br>

<div align="center">
    <img src="https://github.com/atomicpages/pretty-checkbox-react/raw/master/preview.gif" alt="Pretty checkbox preview" />
</div>

#### Code Sandbox
Fancy something else? Want a standalone example? Looking for customize the `pretty-checkbox` theme? How about forking and testing your own changes in code sandbox? It will allow you to prototype and make complex examples all within your browser.

[![Edit pretty-checkbox-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/40v46649m0)

### Browser
Include the script file and all dependencies.

> Note: keep reading for examples using webpack/rollup/or some other modern web bundler.

```html
<script type="text/javascript" src="node_modules/react/umd/react.production.min.js"></script>
<script type="text/javascript" src="node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script type="text/javascript" src="node_modules/pretty-checkbox-react/dist/pretty-checkbox-react.min.js"></script>

<script type="text/javascript">
function App() {
    return React.createElement(
        PrettyCheckboxReact.Checkbox,
        {
            animation: 'smooth',
            shape: 'curve'
        },
        React.createElement(
            'label',
            null,
            'Check me!'
        )
    )
}

ReactDOM.render(App, document.querySelector('body'));
</script>
```

#### Webpack + Rollup
If you're using webpack or rollup then with JSX you can write this more succulently:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'pretty-checkbox-react';

function App() {
    return <Checkbox animation="smooth" shape="curve">Check me!</Checkbox>;
}

ReactDOM.render(App, document.querySelector('body'));
```

### Contributions
Shout out to [Lokesh](https://github.com/lokesh-coder) for creating the original [pretty-checkbox library](https://github.com/lokesh-coder/pretty-checkbox) :star:

### License
This project is licensed under the MIT License