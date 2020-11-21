# next-object-replace
> Replace for object key/value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-object-replace
```

## usage
```js
import '@jswork/next-object-replace';

const obj = {
  '÷': '/',
  '×': '*'
};

const res = 'A+b×0.8+(C÷D)';
nx.objectReplace(str, obj);

// A+b*0.8+(C/D)
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-object-replace/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-object-replace
[version-url]: https://npmjs.org/package/@jswork/next-object-replace

[license-image]: https://img.shields.io/npm/l/@jswork/next-object-replace
[license-url]: https://github.com/afeiship/next-object-replace/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-object-replace
[size-url]: https://github.com/afeiship/next-object-replace/blob/master/dist/next-object-replace.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-object-replace
[download-url]: https://www.npmjs.com/package/@jswork/next-object-replace
