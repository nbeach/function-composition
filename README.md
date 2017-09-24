## FunctionComposition
A library for elegant composing/chaining of function calls.

Usage:
```
import {first} from "function-composition";
 
const addFive = (num: number) => num + 5;
const isTen = (num: number) => num === 10;
const toString = (val: number | boolean | string) => String(val);
 
const actual = first(addFive)
   .andThen(isTen)
   .andThen(toString)
   .apply(2);
```