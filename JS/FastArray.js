const arr = new Array(5);
arr.fill(1,0,3);
arr.fill(2,3,5);

const arr2 = Array.from({length:5}, (acc, i) => ++i);
console.log(arr2)