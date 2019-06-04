---
title: Getting Started
order: -1
---

### Installation

pretty-checkbox-react and peer dependencies can be added via NPM or Yarn:

```bash
npm i pretty-checkbox pretty-checkbox-react --save
yarn add pretty-checkbox pretty-checkbox-react
```

The default export is a UMD module which means it's compatible with CommonJS, AMD, and global. In the `dist/` folder there are builds to ES Modules and Node. The correct entry points are already set in the `package.json` so there shouldn't be extra effort to load the optimal bundle for webpack or rollup.

### Loading from CDN

You can also directly add a script tag loading pretty-checkbox and pretty-checkbox-react from one of the CDNs providing it:

##### unpkg.com

-   https://unpkg.com/pretty-checkbox
-   https://unpkg.com/pretty-checkbox-react

### Basic Example

```plain
function ConsentForm() {
    return (
        <Checkbox>I agree to the terms and conditions</Checkbox>
    );
}
```