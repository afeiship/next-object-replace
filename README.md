# next-object-replace
> Replace for object key/value.

## installation
```bash
npm install -S @feizheng/next-object-replace
```

## usage
```js
import '@feizheng/next-object-replace';

const obj = {
  '÷': '/',
  '×': '*'
};

const res = 'A+b×0.8+(C÷D)';
nx.objectReplace(str, obj);

// A+b*0.8+(C/D)
```
