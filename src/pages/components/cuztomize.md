---
title: Customize
order: 6
---

#### SCSS Customize

```scss
// customize the prefix
$pretty--class-name: pretty;

// override default colors
$pretty--color-default: #bdc3c7;
$pretty--color-primary: #428bca;
$pretty--color-info: #5bc0de;
$pretty--color-success: #5cb85c;
$pretty--color-warning: #f0ad4e;
$pretty--color-danger: #d9534f;
$pretty--color-dark: #5a656b;

// danger zone
$pretty--z-index-back: 0;
$pretty--z-index-between: 1;
$pretty--z-index-front: 2;
$pretty--debug: false;
$pretty--dev-err: "Invalid input type";
```

Once the variables are define you can import them into your main sass file:

```scss
/* REQUIRED */
@import "~pretty-checkbox/scss/variables";
@import "~pretty-checkbox/scss/core";

/* OPTIONALS */
@import "~pretty-checkbox/scss/elements/default/fill";
@import "~pretty-checkbox/scss/elements/default/outline";
@import "~pretty-checkbox/scss/elements/default/thick";

@import "~pretty-checkbox/scss/elements/font-icon/general";

@import "~pretty-checkbox/scss/elements/svg/general";

@import "~pretty-checkbox/scss/elements/image/general";

@import "~pretty-checkbox/scss/elements/switch/general";
@import "~pretty-checkbox/scss/elements/switch/fill";
@import "~pretty-checkbox/scss/elements/switch/slim";

@import "~pretty-checkbox/scss/extras/toggle";
@import "~pretty-checkbox/scss/extras/plain";
@import "~pretty-checkbox/scss/extras/round";
@import "~pretty-checkbox/scss/extras/curve";
@import "~pretty-checkbox/scss/extras/animation";
@import "~pretty-checkbox/scss/extras/disabled";
@import "~pretty-checkbox/scss/extras/locked";
@import "~pretty-checkbox/scss/extras/colors";
@import "~pretty-checkbox/scss/extras/print";

@import "~pretty-checkbox/scss/states/hover";
@import "~pretty-checkbox/scss/states/focus";
@import "~pretty-checkbox/scss/states/indeterminate";
```