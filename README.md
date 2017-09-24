# FunctionComposition
A library for readable composing/chaining of function calls.

### Usage
```typescript
import {first} from "function-composition";
 
const addFive = (num: number) => num + 5;
const isTen = (num: number) => num === 10;
const toString = (val: number | boolean | string) => String(val);
 
const result = first(addFive)
   .then(isTen)
   .then(toString)
   .apply(2);
```