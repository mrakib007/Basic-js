// var x = 5,y=7;
// x=x+y;
// y=x-y;
// x=x-y;

// console.log(x,y);  now we will see a way which is only possible in javascript
// Math.random() is a function which generates random Number.

var p = 5, q = 7;

[p,q] = [q,p];

console.log(p,q);