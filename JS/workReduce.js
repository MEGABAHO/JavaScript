const arr = [2,4,4,10];

const avg = arr.reduce((acc, element, index) => {
if (index !== arr.length-1){
    return acc+element;
}else {
    return (acc+element)/++index;
}}, 0)
console.log(avg)

const array= [2,4,4,10,20];
function some(arr1,element){
      arr1.find(el=> el === element);
       return !!element;
}
console.log(some(array,4));
console.log(array.some(element=>element = 4));